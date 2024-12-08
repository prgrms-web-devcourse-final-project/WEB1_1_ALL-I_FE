import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { getGroupsList, getGroupMembers } from "@/apis/groups";
import { GroupOption, GroupMember } from "@/types/select.types";

// 그룹 목록 조회 query
export const useGetGroups = (
  options?: UseQueryOptions<GroupOption[], Error, GroupOption[]>
) => {
  return useQuery<GroupOption[], Error, GroupOption[]>({
    queryKey: ["groups"],
    queryFn: getGroupsList,
    ...options,
  });
};

// 그룹원 목록 조회 query
export const useGetGroupMembers = (groupId: string | undefined) => {
  return useQuery<GroupMember[]>({
    queryKey: ["groupMembers", groupId],
    queryFn: () => getGroupMembers(groupId!).then((res) => res.data),
    enabled: !!groupId,
  });
};
