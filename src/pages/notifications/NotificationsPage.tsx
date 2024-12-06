import { useEffect, useState } from "react";
import { AlarmResDTO } from "@/types/notification.types";
import GroupInviteForm from "@/components/feature/notifications/GroupInviteForm/GroupInviteForm";
import * as Styled from "./Notifications.style";
import ScheduleForm from "@/components/feature/notifications/ScheduleForm/ScheduleForm";

function NotificationsPage() {
  const [notifications, setNotifications] = useState<AlarmResDTO[]>([]);

  useEffect(() => {
    // 더미 데이터
    const dummyNotifications: AlarmResDTO[] = [
      {
        alarmId: "8f4230c3-cb53-4648-be0d-a82361354d71",
        type: "EVENT",
        description: {
          personalEventId: "0f64a17d-bef6-4278-8d2b-194568a94807",
          title: "뒹굴 뒹굴 대잔치",
          startDate: "2024-12-03",
          endDate: "2024-12-03",
          startTime: null,
          endTime: null,
          isAlarmed: true,
          createdAt: "2024-12-03T14:16:25.442234",
          categoryId: "34a81a0e-f886-43f2-a984-194ba77eab1d",
          userId: "8af30641-215d-42a6-aed6-006246e53d6e",
        },
        userId: "8af30641-215d-42a6-aed6-006246e53d6e",
      },
      {
        alarmId: "7e4230c3-cb53-4648-be0d-a82361354d72",
        type: "EVENT",
        description: {
          personalEventId: "1f64a17d-bef6-4278-8d2b-194568a94808",
          title: "코딩 스터디",
          startDate: "2024-12-04",
          endDate: "2024-12-04",
          startTime: "14:00",
          endTime: "16:00",
          isAlarmed: true,
          createdAt: "2024-12-03T15:16:25.442234",
          categoryId: "34a81a0e-f886-43f2-a984-194ba77eab1d",
          userId: "8af30641-215d-42a6-aed6-006246e53d6e",
        },
        userId: "8af30641-215d-42a6-aed6-006246e53d6e",
      },
    ];

    setNotifications(dummyNotifications);
  }, []);

  return (
    <Styled.Container>
      <GroupInviteForm groupId="1" name="홍길동" groupName="학교" />
      <ScheduleForm scheduleName="코딩 스터디" scheduleDate="2024-12-04" />
    </Styled.Container>
  );
}

export default NotificationsPage;
