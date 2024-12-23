import { useQuery } from "@tanstack/react-query";
import { getRequest } from "@/apis/apiService";

export const useGetMyInfo = () => {
  return useQuery({
    queryKey: ["myInfo"],
    queryFn: async () => {
      const response = await getRequest("/user/myPage");
      return response.data;
    },
  });
};
