import { GetPersonalGroupSchedulesRequest } from "@/types/apiRequest.type";
import { useQuery } from "@tanstack/react-query";
import { getYear, getMonth } from "@/utils/date";
import { getPersonalGroupSchedules } from "@/apis/personalSchdule";
/**
 * 임시로 더미데이터 사용하고,
 * api 연동시 query 로직이 포함될 예정입니다.
 */

// group id 리스트 받아 온 뒤 모든 그룹의 일정 데이터 받아오기

export const usePersonalGroupSchedules = () => {
  return { data: [], isLoading: false, error: null };
};

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
