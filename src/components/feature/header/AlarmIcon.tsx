import Icon from "@/assets/icons/alarm.svg?react";
import * as Styled from "./AlarmIcon.style";
import { parseNotificationDescription } from "@/utils/alarm";
import { useEffect } from "react";
import {
  parseGroupInvitationString,
  parsePersonalEventString,
} from "@/utils/alarm";
import { useState } from "react";
import { AlarmResDTO } from "@/types/notification.types";
import { parseGroupEventString } from "@/utils/alarm";
import { connectAlarmSSE, disconnectAlarmSSE, getAlarm } from "@/apis/alarm";

function AlarmIcon() {
  // DTO로 응답이 오기 때문에 AlarmResDTO 타입과 파싱된 이벤트 데이터를 합쳐서 상태 관리
  const [notifications, setNotifications] = useState<
    (AlarmResDTO & {
      groupEvent?: ReturnType<typeof parseGroupEventString>;
      personalEvent?: ReturnType<typeof parsePersonalEventString>;
      groupInvitation?: ReturnType<typeof parseGroupInvitationString>;
    })[]
  >([]);

  // 알림 조회
  useEffect(() => {
    const fetchData = async () => {
      const data = await getAlarm();
      // 알림 파싱
      const parsedData = data.data.map((notification: AlarmResDTO) => {
        const parsed = parseNotificationDescription(notification.description);
        return {
          ...notification,
          ...parsed,
        };
      });
      setNotifications(parsedData);
    };

    fetchData();
  }, []);

  // 실시간 알림 SSE 연결
  useEffect(() => {
    const eventSource = connectAlarmSSE();

    eventSource.onmessage = (event) => {
      const data: AlarmResDTO = JSON.parse(event.data);
      // 새로운 알림 데이터 파싱
      const parsed = parseNotificationDescription(data.description);
      const newNotification = {
        ...data,
        ...parsed,
      };
      // 기존 알림 목록의 앞쪽에 새 알림 추가
      setNotifications((prev) => [newNotification, ...prev]);
    };

    return () => {
      disconnectAlarmSSE(eventSource);
    };
  }, []);

  // 안 읽은 알림 개수 계산
  const unreadCount = notifications.filter(
    (notification) => !notification.isRead
  ).length;

  return (
    <Styled.Container>
      <Icon width="100%" height="100%" fill="none" stroke="currentColor" />
      {unreadCount > 0 && <Styled.Count>{unreadCount}</Styled.Count>}
    </Styled.Container>
  );
}

export default AlarmIcon;
