import { useNavigate } from "react-router-dom";

import ListBar from "@/components/common/ListBar/ListBar";
import TextDate from "@/components/common/TextDate/TextDate";
import { MainSchedule } from "@/models/MainSchedule";
import { FormatTime, FormatDate } from "@/utils/format";

import * as Styled from "./ScheduleItem.style";
import EditDeleteIcon from "../../EditDeleteIcon/EditDeleteIcon";
import { useDeletePersonalSchedule } from "@/hooks/queries/usePersonalSchedules";

interface ScheduleItemProps {
  schedule: MainSchedule;
}

function ScheduleItem({ schedule }: ScheduleItemProps) {
  const navigate = useNavigate();
  const { mutate: deleteSchedule } = useDeletePersonalSchedule();

  // 수정 버튼 클릭
  const handleEditClick = () => {
    navigate(`/main/schedule/${schedule.id}/edit`, {
      state: { schedule },
    });
  };

  // 삭제 버튼 클릭
  const handleDeleteClick = () => {
    deleteSchedule({
      scheduleId: schedule.id,
      data: {
        date: schedule.startDate,
      },
    });
  };

  const TextDateValues =
    schedule.startDate === schedule.endDate && schedule.startTime
      ? [FormatTime(schedule.startTime), FormatTime(schedule.endTime)]
      : [FormatDate(schedule.startDate), FormatDate(schedule.endDate)];

  return (
    <Styled.ScheduleItemWrapper>
      <Styled.LeftWrapper>
        <ListBar color={schedule.color!} />
        <TextDate values={TextDateValues} />
        <Styled.ScheduleTitle>{schedule.title}</Styled.ScheduleTitle>
      </Styled.LeftWrapper>
      <Styled.RightWrapper>
        {!schedule.isGroup && (
          <EditDeleteIcon
            onEdit={handleEditClick}
            onDelete={handleDeleteClick}
          />
        )}
      </Styled.RightWrapper>
    </Styled.ScheduleItemWrapper>
  );
}

export default ScheduleItem;
