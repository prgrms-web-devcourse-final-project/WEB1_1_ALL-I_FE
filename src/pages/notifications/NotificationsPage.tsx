import GroupInviteForm from "@/components/feature/notifications/GroupInviteForm/GroupInviteForm";
import * as Styled from "./Notifications.style";
import ScheduleForm from "@/components/feature/notifications/ScheduleForm/ScheduleForm";
import { useAlarmStore } from "@/store/useNotification.store";
import { useEffect } from "react";

// 로컬 스토리지 키 상수
const UNREAD_NOTIFICATIONS_KEY = "unread_notifications";
const READ_NOTIFICATIONS_KEY = "read_notifications";

function NotificationsPage() {
  const { notifications, updateUnreadCount, removeNotification } =
    useAlarmStore();

  // 읽지 않은 알림들 읽음 처리
  useEffect(() => {
    // 읽은 알림 목록 가져오기
    const readNotifications = JSON.parse(
      localStorage.getItem(READ_NOTIFICATIONS_KEY) || "[]"
    );
    // 읽지 않은 알림 목록 가져오기
    const unReadNotifications = JSON.parse(
      localStorage.getItem(UNREAD_NOTIFICATIONS_KEY) || "[]"
    );
    // 이번에 읽은 알림들을 읽은 알림 목록에 추가
    const updatedReadNotifications = [
      ...readNotifications,
      ...unReadNotifications,
    ];
    // 읽은 알림 목록 저장
    localStorage.setItem(
      READ_NOTIFICATIONS_KEY,
      JSON.stringify(updatedReadNotifications)
    );
    // 읽지 않은 알림 목록 삭제
    localStorage.removeItem(UNREAD_NOTIFICATIONS_KEY);
    // 읽지 않은 알림 개수 초기화
    updateUnreadCount(0);
  }, [notifications, updateUnreadCount]);

  return (
    <Styled.Container>
      {notifications.map((notification, index) => {
        if (notification.groupEvent || notification.personalEvent) {
          const event = notification.groupEvent || notification.personalEvent;
          return (
            <ScheduleForm
              key={index}
              scheduleName={event?.title}
              scheduleDate={event?.startDate}
            />
          );
        }

        if (notification.groupInvitation) {
          const invitation = notification.groupInvitation;
          return (
            <GroupInviteForm
              key={index}
              groupInvitationId={invitation.groupInvitationId}
              senderName={invitation.senderName}
              groupName={invitation.groupName}
              index={index}
              removeNotification={removeNotification}
            />
          );
        }
      })}
    </Styled.Container>
  );
}

export default NotificationsPage;
