import Calendar from "@/components/common/Calendar/Calendar";
import ScheduleList from "@/components/feature/main/ScheduleList/ScheduleList";
import CategoryButtons from "@/components/feature/main/CategoryButtons/CategoryButtons";

function MainPage() {
  return (
    <>
      <Calendar usage="main" onDateSelect={() => {}} />
      <CategoryButtons />
      <ScheduleList />
    </>
  );
}

export default MainPage;
