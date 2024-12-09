import Icon from "@/assets/icons/alarm.svg?react";
import * as Styled from "./AlarmIcon.style";
import { parseNotificationDescription } from "@/utils/alarm";
import { useEffect } from "react";
import { AlarmResDTO, ParsedAlarm } from "@/types/notification.types";
import { getAlarm } from "@/apis/alarm";
import { useAlarmStore } from "@/store/useNotification.store";
import useAuthStore from "@/store/useAuthStore";
import { EventSourcePolyfill } from "event-source-polyfill";
import "event-source-polyfill";

// 로컬 스토리지 키 상수
const UNREAD_NOTIFICATIONS_KEY = "unread_notifications";
const READ_NOTIFICATIONS_KEY = "read_notifications";

// 로컬 스토리지에 저장할 알림 타입
interface StorageNotification {
  alarmId: string;
}

function AlarmIcon() {
  const {
    notifications,
    unreadCount,
    addNotification,
    setNotifications,
    updateUnreadCount,
  } = useAlarmStore();

  // 읽지 않은 알림 로컬 스토리지에 저장 함수
  const saveUnreadNotification = (alarmId: string) => {
    const existingUnread = localStorage.getItem(UNREAD_NOTIFICATIONS_KEY);
    const unreadList: StorageNotification[] = existingUnread
      ? JSON.parse(existingUnread)
      : [];

    // 중복 체크
    if (!unreadList.some((item) => item.alarmId === alarmId)) {
      unreadList.push({ alarmId });
      localStorage.setItem(
        UNREAD_NOTIFICATIONS_KEY,
        JSON.stringify(unreadList)
      );
    }
  };

  // 읽지 않은 알림 개수 업데이트
  useEffect(() => {
    const unreadNotifications = localStorage.getItem(UNREAD_NOTIFICATIONS_KEY);
    const unreadList = unreadNotifications
      ? JSON.parse(unreadNotifications)
      : [];
    updateUnreadCount(unreadList.length);
  }, [notifications, updateUnreadCount]);

  // 알림 조회
  useEffect(() => {
    const fetchData = async () => {
      const data = await getAlarm();
      // 알림 파싱
      const parsedData: ParsedAlarm[] = data.data.map(
        (notification: AlarmResDTO) => {
          const parsed = parseNotificationDescription(notification.description);
          return {
            ...notification,
            ...parsed,
          };
        }
      );
      setNotifications(parsedData);
      parsedData.forEach((notification) => {
        // 읽은 목록 가져오기
        const readNotifications = JSON.parse(
          localStorage.getItem(READ_NOTIFICATIONS_KEY) || "[]"
        );
        // 읽은 목록에 없으면 읽지 않은 알림으로 저장
        if (
          !readNotifications.some(
            (item: StorageNotification) => item.alarmId === notification.alarmId
          )
        ) {
          saveUnreadNotification(notification.alarmId);
        }
      });
    };

    fetchData();
  }, [setNotifications]);

  //실시간 알림 SSE 연결
  useEffect(() => {
    const connect = () => {
      const token = useAuthStore.getState().access_token;
      const eventSource = new EventSourcePolyfill(`/api/alarms/connect`, {
        headers: {
          Authorization: `${token}`,
          Accept: "text/event-stream",
          "Cache-Control": "no-cache",
          Connection: "keep-alive",
        },
        heartbeatTimeout: 10000000,
        withCredentials: true,
      });
      eventSource.onopen = () => {
        console.log("SSE 연결 성공");
      };
      eventSource.onerror = (error) => {
        console.error("SSE 연결 에러:", error);
        eventSource?.close();
        // 연결이 끊기면 바로 재연결 시도
        setTimeout(connect, 1000);
      };
      eventSource.onmessage = (event) => {
        console.log("Message from server:", event.data);
        const parsed = parseNotificationDescription(event.data.description);
        const newNotification = {
          ...event.data,
          ...parsed,
        };

        addNotification(newNotification);
        saveUnreadNotification(newNotification.alarmId);
      };
    };

    connect();
  }, []);

  return (
    <Styled.Container>
      <Icon width="100%" height="100%" fill="none" stroke="currentColor" />
      {unreadCount > 0 && <Styled.Count>{unreadCount}</Styled.Count>}
    </Styled.Container>
  );
}

export default AlarmIcon;
