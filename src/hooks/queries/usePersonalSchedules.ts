import {
  createPersonalSchedule,
  editPersonalSchedule,
} from "@/apis/personalSchdule";
import {
  CreatePersonalScheduleRequest,
  EditPersonalScheduleRequest,
} from "@/types/apiRequest.type";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getYear, getMonth } from "@/utils/date";

// 개인 일정 생성 query
export const useCreatePersonalSchedule = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending, error } = useMutation({
    mutationFn: (scheduleData: CreatePersonalScheduleRequest) =>
      createPersonalSchedule(scheduleData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["schedules"],
      });
    },
  });

  return { mutate, isPending, error };
};

// 개인 일정 수정 query
export const useEditPersonalSchedule = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending, error } = useMutation({
    mutationFn: ({
      scheduleId,
      scheduleData,
    }: {
      scheduleId: string;
      scheduleData: EditPersonalScheduleRequest;
    }) => editPersonalSchedule({ scheduleId, scheduleData }),
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
