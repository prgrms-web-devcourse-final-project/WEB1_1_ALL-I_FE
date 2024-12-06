import { getRequest } from "@/apis/apiService";

// 그룹 맴버 조회
export const getGroupMembers = async (groupId: string) => {
  try {
    return await getRequest(`/groups-setting/${groupId}`);
  } catch (error) {
    console.error("그룹 맴버 조회 실패:", error);
    throw error;
  }
};
