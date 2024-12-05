import ScheduleItem from "../ScheduleItem/ScheduleItem";
import { MainSchedule } from "@/models/MainSchedule";
import * as Styled from "./ScheduleList.styled";
/**
 * 리스트용 클래스 만들어서 타입 일관되게 수정할 것
 */
interface ScheduleListProps {
  schedules: MainSchedule[];
}

function ScheduleList({ schedules }: ScheduleListProps) {
  return (
    <Styled.ScheduleListWrapper>
      {schedules.map((schedule) => (
        <ScheduleItem key={schedule.id} schedule={schedule} />
      ))}
    </Styled.ScheduleListWrapper>
  );
}

export default ScheduleList;
