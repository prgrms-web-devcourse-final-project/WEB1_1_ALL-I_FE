import {
  createPersonalSchedule,
  deletePersonalSchedule,
  editPersonalSchedule,
  getPersonalSchedules,
} from "@/apis/personalSchdule";
import {
  CreatePersonalScheduleRequest,
  DeletePersonalScheduleRequest,
  EditPersonalScheduleRequest,
} from "@/types/apiRequest.type";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getYear, getMonth } from "@/utils/date";

// 개인 일정 생성 query
export const useCreatePersonalSchedule = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending, error } = useMutation({
    mutationFn: (scheduleData: CreatePersonalScheduleRequest) =>
      createPersonalSchedule(scheduleData),
    onSuccess: (_, variables) => {
      queryClient.refetchQueries({
        queryKey: [
          "schedules",
          getYear(variables.startDate),
          getMonth(variables.startDate),
        ],
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

//
// 개인 일정 조회 query
export const useGetPersonalSchedules = ({
  year,
  month,
}: {
  year: string;
  month: string;
}) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["schedules", year, month],
    queryFn: () => getPersonalSchedules({ year, month }),
  });

  return { data, isLoading, error };
};

// 개인 일정 삭제 query
export const useDeletePersonalSchedule = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending, error } = useMutation({
    mutationFn: ({
      scheduleId,
      data: _,
    }: {
      scheduleId: string;
      data: DeletePersonalScheduleRequest;
    }) => deletePersonalSchedule(scheduleId),
    onSuccess: (_, variables) => {
      queryClient.refetchQueries({
        queryKey: [
          "schedules",
          getYear(variables.data.date),
          getMonth(variables.data.date),
        ],
      });
    },
  });

  return { mutate, isPending, error };
};
