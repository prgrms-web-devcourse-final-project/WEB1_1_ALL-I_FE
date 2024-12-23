import { useQuery } from "@tanstack/react-query";
import { getGroupTodos, getGroupSchedules } from "@/apis/groups";
import { GroupSchedule, GroupTodo } from "@/types";
import { GroupCategory } from "@/types/category.type";

interface GroupData {
  todos: GroupTodo[];
  schedules: GroupSchedule[];
  category: GroupCategory[];
}

// 그룹 데이터(투두, 스케줄) 조회 query
export const useGetGroupData = (
  groupId: string | undefined,
  year: string,
  month: string
) => {
  return useQuery<GroupData>({
    queryKey: ["groupData", groupId, { year, month }],
    queryFn: async () => {
      if (!groupId) {
        return { todos: [], schedules: [], category: [] };
      }

      const [todosResponse, schedulesResponse] = await Promise.all([
        getGroupTodos(groupId, parseInt(year), parseInt(month)),
        getGroupSchedules(groupId, parseInt(year), parseInt(month)),
      ]);

      return {
        todos: todosResponse?.data?.groupTodos || [],
        schedules: schedulesResponse?.data?.groupEvents || [],
        category: schedulesResponse?.data?.groupCategory || [],
      };
    },
    enabled: !!groupId,
    initialData: { todos: [], schedules: [], category: [] },
  });
};
