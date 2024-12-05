import { Category, PersonalSchedule, PersonalGroupSchedule } from "@/types";
import ScheduleItem from "../ScheduleItem/ScheduleItem";
import { MainSchedule } from "@/models/MainSchedule";

/**
 * 리스트용 클래스 만들어서 타입 일관되게 수정할 것
 */
interface ScheduleListProps {
  categories: Category[];
  schedules: MainSchedule[];
}

function ScheduleList({ categories, schedules }: ScheduleListProps) {
  return schedules.map((schedule) => <ScheduleItem schedule={schedule} />);
}

export default ScheduleList;
