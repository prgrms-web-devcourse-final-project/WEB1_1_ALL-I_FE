import { GetPersonalGroupSchedulesRequest } from "@/types/apiRequest.type";
import { useQuery } from "@tanstack/react-query";
import { getYear, getMonth } from "@/utils/date";
import { getPersonalGroupSchedules } from "@/apis/personalSchdule";

// 개인 그룹 일정 조회 query
export const useGetPersonalGroupSchedules = ({
  date,
}: GetPersonalGroupSchedulesRequest) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["personalGroupSchedules", getYear(date), getMonth(date)],
    queryFn: () =>
      getPersonalGroupSchedules({
        year: getYear(date),
        month: getMonth(date),
      }),
  });
  return { data, isLoading, error };
};
