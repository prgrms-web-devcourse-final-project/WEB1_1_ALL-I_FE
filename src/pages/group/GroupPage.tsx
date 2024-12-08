import GroupPick from "@/components/feature/group/GroupPick/GroupPick";
import GroupList from "@/components/feature/group/MainList/GroupList";
import ProfileSlider from "@/components/feature/group/ProfileSlider/ProfileSlider";
import Calendar from "@/components/common/Calendar/Calendar";
import { CalendarSchedule } from "@/models/CalendarSchedule";
import { CalendarTodo } from "@/models/CalendarTodo";
import { GroupTodo, GroupSchedule } from "@/types";
import { useGetGroupMembers, useGetGroups } from "@/hooks/queries/useGroups";
import { useGetGroupData } from "@/hooks/queries/useGroupData";
import { useState, useEffect } from "react";
import { GroupOption } from "@/types/select.types";

function GroupPage() {
  const [selectedGroup, setSelectedGroup] = useState<GroupOption | null>(null);
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [currentYearMonth, setCurrentYearMonth] = useState({
    year: new Date().getFullYear().toString(),
    month: (new Date().getMonth() + 1).toString(),
  });

  const { data: groupOptions = [] } = useGetGroups();

  // 첫 번째 그룹 선택
  useEffect(() => {
    if (groupOptions.length > 0 && !selectedGroup) {
      setSelectedGroup(groupOptions[0]);
    }
  }, [groupOptions, selectedGroup]);

  // 그룹 멤버 데이터
  const { data: groupMembers = [] } = useGetGroupMembers(
    selectedGroup?.groupId
  );

  // 그룹 투두, 일정 데이터
  const { data: groupData } = useGetGroupData(
    selectedGroup?.groupId,
    currentYearMonth.year,
    currentYearMonth.month
  );

  // 캘린더 데이터 변환
  const transformToCalendarFormat = () => {
    const calendarSchedules: CalendarSchedule[] =
      groupData?.schedules.map((schedule: GroupSchedule) => ({
        id: schedule.groupEventId,
        title: schedule.title,
        start: schedule.startDate,
        end: schedule.endDate,
        color: groupData?.category[0].color,
        categoryId: schedule.categoryId,
      })) || [];

    const calendarTodos: CalendarTodo[] =
      groupData?.todos.map((todo: GroupTodo) => ({
        id: todo.groupTodoId,
        title: todo.title,
        date: todo.date,
        isCompleted: todo.done,
      })) || [];

    return { calendarSchedules, calendarTodos };
  };

  // 캘린더 월 변경
  const handleMonthChange = (year: number, month: number) => {
    setCurrentYearMonth({
      year: year.toString(),
      month: month.toString(),
    });
  };

  // 투두, 일정 삭제
  const handleDelete = (type: "todo" | "schedule", id: string) => {
    // 삭제 로직 구현 해야함
    console.log(`Delete ${type} with id: ${id}`);
  };

  return (
    <div>
      <GroupPick
        selectedGroup={selectedGroup}
        options={groupOptions}
        onGroupChange={setSelectedGroup}
      />
      {selectedGroup && (
        <Calendar
          schedules={transformToCalendarFormat().calendarSchedules}
          todos={transformToCalendarFormat().calendarTodos}
          onDateSelect={setSelectedDate}
          onMonthChange={handleMonthChange}
        />
      )}
      <ProfileSlider
        profiles={groupMembers.map((member) => ({
          id: member.userId,
          name: member.nickname,
        }))}
        groupId={selectedGroup?.groupId || ""}
        groupName={selectedGroup?.groupName || ""}
        color={groupData?.category[0]?.color || ""}
        description={selectedGroup?.description || ""}
        members={groupMembers.map((member) => ({
          id: member.userId,
          name: member.nickname,
        }))}
      />
      {groupData && (
        <GroupList
          schedules={groupData.schedules}
          todos={groupData.todos}
          category={groupData.category[0]}
          selectedDate={selectedDate}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
}

export default GroupPage;
