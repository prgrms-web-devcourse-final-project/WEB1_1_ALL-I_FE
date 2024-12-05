import ListBar from "@/components/common/ListBar/ListBar";
import TextDate from "@/components/common/TextDate/TextDate";
import { MainSchedule } from "@/models/MainSchedule";
import { useNavigate } from "react-router-dom";

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
    <>
      <TextDate values={[schedule.startDate, schedule.endDate]} />
      <ListBar color={schedule.categoryId} />
      {schedule.title}
    </>
  );
}

export default ScheduleItem;
