import { getRequest, deleteRequest } from "@/apis/apiService";

// 그룹 맴버 조회
export const getGroupMembers = async (groupId: string) => {
  try {
    return await getRequest(`/groups-setting/${groupId}`);
  } catch (error) {
    console.error("그룹 맴버 조회 실패:", error);
    throw error;
  }
};

// 그룹 리스트 가져오기
export const getGroupsList = async () => {
  try {
    const response = await getRequest("/groups");
    if (response && response.data) {
      return response.data;
    }
    return [];
  } catch (error) {
    console.error("그룹 목록 조회 실패:", error);
    throw error;
  }
};

// 그룹 투두 조회
export const getGroupTodos = async (
  groupId: string,
  year: number,
  month: number
) => {
  try {
    const url = `/group-todos/${groupId}?year=${year}&month=${month}`;
    return await getRequest(url);
  } catch (error) {
    console.error("그룹 투두 데이터를 가져오는 중 오류 발생:", error);
    throw error;
  }
};

// 그룹 일정 조회
export const getGroupSchedules = async (
  groupId: string,
  year: number,
  month: number
) => {
  try {
    const url = `/groupEvents/${groupId}/events?year=${year}&month=${month}`;
    return await getRequest(url);
  } catch (error) {
    console.error("그룹 스케줄 ��이터를 가져오는 중 오류 발생:", error);
    throw error;
  }
};

// 그룹 삭제 API
export const quitGroup = async (groupId: string) => {
  return await deleteRequest(`/groups-setting/${groupId}/quit`);
};
