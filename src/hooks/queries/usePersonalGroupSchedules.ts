import { useQuery } from "@tanstack/react-query";
import { getPersonalGroupSchedules } from "@/apis/personalSchdule";

// 개인 그룹 일정 조회 query
export const useGetPersonalGroupSchedules = ({
  year,
  month,
}: {
  year: string;
  month: string;
}) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["personalGroupSchedules", year, month],
    queryFn: () =>
      getPersonalGroupSchedules({
        year,
        month,
      }),
  });
  return { data, isLoading, error };
};
