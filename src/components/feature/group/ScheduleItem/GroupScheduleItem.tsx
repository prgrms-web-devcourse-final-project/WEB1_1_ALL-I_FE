import * as Styled from "./GroupScheduleItem.style";

import EditDeleteIcon from "@/components/feature/EditDeleteIcon/EditDeleteIcon";
import { useNavigate } from "react-router-dom";
import { FormatDate, FormatTime } from "@/utils/format";
import TextDate from "@/components/common/TextDate/TextDate";
import ListBar from "@/components/common/ListBar/ListBar";
import { useUserNames } from "@/hooks/useUserNames";
import { useDeleteGroupSchedule } from "@/hooks/queries/useGroupSchedules";

interface ScheduleItemProps {
  groupEventId: string; // 일정 ID
  groupId: string; // 그룹아이디
  title: string; // 일정 제목
  startDate: string; // 시작 날짜
  endDate: string; // 종료 날짜
  startTime?: string | null; // 시작 시간
  endTime?: string | null; // 종료 시간
  isAlarmed: boolean; // 알림 여부
  categoryId: string; // 카테고리 ID
  color: string; // 카테고리 색상
  assignedUserIds: string[];
}

function GroupScheduleItem({
  groupEventId,
  groupId,
  title,
  startDate,
  endDate,
  startTime,
  endTime,
  isAlarmed,
  categoryId,
  assignedUserIds,
  color,
}: ScheduleItemProps) {
  const navigate = useNavigate();
  const userNames = useUserNames(assignedUserIds.map((id) => ({ userId: id })));
  const { mutate: deleteSchedule } = useDeleteGroupSchedule();

  // 수정 버튼 클릭
  const handleEditClick = () => {
    navigate(`/group/${groupId}/schedule/${groupEventId}/edit`, {
      state: {
        groupEventId,
        groupId,
        title,
        startDate,
        endDate,
        startTime,
        endTime,
        isAlarmed,
        categoryId,
        assignedUserIds,
      },
    });
  };

  // values 설정 (날짜 또는 시간)
  const values =
    startDate === endDate && startTime && endTime
      ? [FormatTime(startTime), FormatTime(endTime)]
      : [FormatDate(startDate), FormatDate(endDate)];

  const handleDelete = () => {
    deleteSchedule({ groupId, eventId: groupEventId });
  };

  return (
    <Styled.ScheduleItemWrapper>
      <Styled.LeftWrapper>
        <ListBar color={color} />
        <TextDate values={values} />
        <Styled.ScheduleTitle>{title}</Styled.ScheduleTitle>
      </Styled.LeftWrapper>
      <Styled.RightWrapper>
        <Styled.AssignWrapper>
          {assignedUserIds.map((userId) => (
            <Styled.AssignPeople key={userId}>
              {userNames[userId]}
            </Styled.AssignPeople>
          ))}
        </Styled.AssignWrapper>
        <EditDeleteIcon onEdit={handleEditClick} onDelete={handleDelete} />
      </Styled.RightWrapper>
    </Styled.ScheduleItemWrapper>
  );
}

export default GroupScheduleItem;
