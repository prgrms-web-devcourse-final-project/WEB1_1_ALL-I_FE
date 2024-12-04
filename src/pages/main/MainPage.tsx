import Calendar from "@/components/common/Calendar/Calendar";
import ScheduleList from "@/components/feature/main/ScheduleList/ScheduleList";

function MainPage() {
  return (
    <>
      <Calendar usage="main" onDateSelect={() => {}} />
      <ScheduleList />
    </>
  );
}

export default MainPage;
