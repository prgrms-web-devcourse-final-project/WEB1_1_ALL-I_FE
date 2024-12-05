import ListBar from "@/components/common/ListBar/ListBar";
import TextDate from "@/components/common/TextDate/TextDate";
import { MainSchedule } from "@/models/MainSchedule";
import { useNavigate } from "react-router-dom";
import * as Styled from "./ScheduleItem.style";
import EditDeleteIcon from "../../EditDeleteIcon/EditDeleteIcon";

interface ScheduleItemProps {
  schedule: MainSchedule;
}

function ScheduleItem({ schedule }: ScheduleItemProps) {
  const navigate = useNavigate();

  // 수정 버튼 클릭
  const handleEditClick = () => {
    navigate(`/main/schedule/${schedule.id}/edit`, {
      state: { schedule },
    });
  };

  // 삭제 버튼 클릭
  const handleDeleteClick = () => {
    // TODO: 삭제 로직 추가
  };

  return (
    <Styled.ScheduleItemWrapper>
      <Styled.LeftWrapper>
        <ListBar color={schedule.color!} />
        <TextDate values={[schedule.startDate, schedule.endDate]} />
        <Styled.ScheduleTitle>{schedule.title}</Styled.ScheduleTitle>
      </Styled.LeftWrapper>
      <Styled.RightWrapper>
        <EditDeleteIcon onEdit={handleEditClick} onDelete={handleDeleteClick} />
      </Styled.RightWrapper>
    </Styled.ScheduleItemWrapper>
  );
}

export default ScheduleItem;
