import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  CreateGroupScheduleRequest,
  EditGroupScheduleRequest,
} from "@/types/apiRequest.type";
import { getYear, getMonth } from "@/utils/date";
import { createGroupSchedule, editGroupSchedule } from "@/apis/groupSchdules";
import { deleteRequest } from "@/apis/apiService";

// 그룹 일정 생성 query
export const useCreateGroupSchedule = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending, error } = useMutation({
    mutationFn: ({
      groupId,
      scheduleData,
    }: {
      groupId: string;
      scheduleData: CreateGroupScheduleRequest;
    }) => createGroupSchedule({ groupId, scheduleData }),
    onSuccess: (_, variables) => {
      queryClient.refetchQueries({
        queryKey: [
          "schedules",
          getYear(variables.scheduleData.startDate),
          getMonth(variables.scheduleData.startDate),
        ],
      });
    },
  });

  return { mutate, isPending, error };
};

// 그룹 일정 수정 query
export const useEditGroupSchedule = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending, error } = useMutation({
    mutationFn: ({
      groupId,
      scheduleId,
      scheduleData,
    }: {
      groupId: string;
      scheduleId: string;
      scheduleData: EditGroupScheduleRequest;
    }) => editGroupSchedule({ groupId, scheduleId, scheduleData }),
    onSuccess: (_, variables) => {
      queryClient.refetchQueries({
        queryKey: [
          "schedules",
          getYear(variables.scheduleData.startDate),
          getMonth(variables.scheduleData.startDate),
        ],
      });
    },
  });

  return { mutate, isPending, error };
};

// 그룹 일정 삭제
export const useDeleteGroupSchedule = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ groupId, eventId }: { groupId: string; eventId: string }) =>
      deleteRequest(`/groupEvents/${groupId}/events/${eventId}`),
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ["groupData"] });
    },
  });
};
