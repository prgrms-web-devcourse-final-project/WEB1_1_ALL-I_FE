import { useEffect, useState } from "react";
import { AlarmResDTO } from "@/types/notification.types";
import GroupInviteForm from "@/components/feature/notifications/GroupInviteForm/GroupInviteForm";
import * as Styled from "./Notifications.style";
import ScheduleForm from "@/components/feature/notifications/ScheduleForm/ScheduleForm";
import { getAlarm } from "@/apis/alarm";
import {
  parseGroupEventString,
  parsePersonalEventString,
  parseGroupInvitationString,
  parseNotificationDescription,
} from "@/utils/alarm";

function NotificationsPage() {
  // DTO로 응답이 오기 때문에 AlarmResDTO 타입과 파싱된 이벤트 데이터를 합쳐서 상태 관리
  const [notifications, setNotifications] = useState<
    (AlarmResDTO & {
      groupEvent?: ReturnType<typeof parseGroupEventString>;
      personalEvent?: ReturnType<typeof parsePersonalEventString>;
      groupInvitation?: ReturnType<typeof parseGroupInvitationString>;
    })[]
  >([]);

  // 알림 삭제 함수
  const removeNotification = (index: number) => {
    setNotifications((prev) => prev.filter((_, i) => i !== index));
  };

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
              senderId={invitation.senderId}
              groupName={invitation.groupName}
              index={index}
              removeNotification={removeNotification}
            />
          );
        }
      })}
      {/* 그룹 초대 없어서 임시 데이터 보기 */}
      <GroupInviteForm
        key={6}
        groupInvitationId="1"
        senderId="64b86382-ac6c-4d0d-9a37-9a11ddc96b79"
        groupName="학교"
        index={5}
        removeNotification={removeNotification}
      />
    </Styled.Container>
  );
}

export default NotificationsPage;
