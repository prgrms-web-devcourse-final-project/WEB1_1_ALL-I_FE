import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  CreateGroupScheduleRequest,
  EditGroupScheduleRequest,
} from "@/types/apiRequest.type";
import { getYear, getMonth } from "@/utils/date";
import { createGroupSchedule, editGroupSchedule } from "@/apis/groupSchdules";

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
      queryClient.invalidateQueries({
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
      queryClient.invalidateQueries({
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
