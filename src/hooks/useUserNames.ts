import { useState, useCallback, useEffect, useMemo } from "react";
import { getRequest } from "@/apis/apiService";

interface User {
  userId: string;
  done?: boolean;
}

export const useUserNames = (userList: User[]) => {
  const [userNames, setUserNames] = useState<Record<string, string>>({});

  const userIds = useMemo(
    () => userList.map((user) => user.userId).join(","),
    [userList]
  );

  const fetchUserNames = useCallback(async () => {
    if (!userIds) return;

    try {
      const userIdArray = userIds.split(",");
      const promises = userIdArray.map(async (userId) => {
        const url = `/user/${userId}`;
        const response = await getRequest(url);
        const userName = response?.data;
        return { userId, userName };
      });

      const results = await Promise.all(promises);
      const userNameMap = results.reduce(
        (acc, { userId, userName }) => {
          acc[userId] = userName || "Unknown User";
          return acc;
        },
        {} as Record<string, string>
      );

      setUserNames(userNameMap);
    } catch (error) {
      console.error("사용자 이름 데이터를 가져오는 중 오류 발생:", error);
    }
  }, [userIds]);

  useEffect(() => {
    fetchUserNames();
  }, [fetchUserNames]);

  return userNames;
};
