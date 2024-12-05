import { Category, PersonalSchedule, PersonalGroupSchedule } from "@/types";

/**
 * 리스트용 클래스 만들어서 타입 일관되게 수정할 것
 */
interface ScheduleListProps {
  categories: Category[];
  schedules: PersonalSchedule[] | PersonalGroupSchedule[];
}

function ScheduleList() {
  return <div>ScheduleList</div>;
}

export default ScheduleList;
