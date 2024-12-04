import * as Styled from "./ScheduleItem.style";
import TextDate from "../TextDate/TextDate";
import ListBar from "../ListBar/ListBar";
import EditDeleteIcon from "@/components/feature/EditDeleteIcon/EditDeleteIcon";
import { useNavigate } from "react-router-dom";
import { FormatDate, FormatTime } from "@/utils/format";

interface ScheduleItemProps {
  id: string; // 일정 id
  title: string; // 일정 제목
  startDate: string; // 시작 날짜
  endDate: string; // 종료 날짜
  startTime?: string | null; // 시작 시간
  endTime?: string | null; // 종료 시간
  isAlarmed: boolean; // 알림 여부
  categoryId: string; // 카테고리 id
  color: string; // 카테고리 색상
  onDelete: (id: string) => void; // 삭제 핸들러
}

function ScheduleItem({
  id,
  title,
  startDate,
  endDate,
  startTime,
  endTime,
  isAlarmed,
  categoryId,
  color,
  onDelete,
}: ScheduleItemProps) {
  const navigate = useNavigate();

  // 수정 버튼 클릭
  const handleEditClick = () => {
    navigate(`/main/schedule/${id}/edit`, {
      state: {
        id,
        title,
        startDate,
        endDate,
        startTime,
        endTime,
        isAlarmed,
        categoryId,
      },
    });
  };

  // values 설정 (날짜 or 시간)
  const values =
    startDate === endDate && startTime && endTime
      ? [FormatTime(startTime), FormatTime(endTime)] // startDate와 endDate가 같고 startTime, endTime이 존재하면 시간 표시
      : [FormatDate(startDate), FormatDate(endDate)]; // 그렇지 않으면 날짜 표시

  return (
    <Styled.Wrapper>
      <Styled.Explan>
        <TextDate values={values} />
        <ListBar color={color} />
        <Styled.ScheduleText>{title}</Styled.ScheduleText>
      </Styled.Explan>
      <EditDeleteIcon onEdit={handleEditClick} onDelete={() => onDelete(id)} />
    </Styled.Wrapper>
  );
}

export default ScheduleItem;
