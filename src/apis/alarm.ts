import { getRequest, updateRequest } from "./apiService";

// 알림 조회
export const getAlarm = async () => {
  try {
    return await getRequest("/alarms");
  } catch (error) {
    console.error("알림 조회 실패:", error);
    throw error;
  }
};

// 그룹 초대 수락
export const acceptGroupInvitation = async (groupInvitationId: string) => {
  try {
    return await updateRequest(
      `/groups-invitation/${groupInvitationId}/accept`
    );
  } catch (error) {
    console.error("그룹 초대 수락 실패:", error);
    throw error;
  }
};

// 그룹 초대 거절
export const rejectGroupInvitation = async (groupInvitationId: string) => {
  try {
    return await updateRequest(
      `/groups-invitation/${groupInvitationId}/decline`
    );
  } catch (error) {
    console.error("그룹 초대 거절 실패:", error);
    throw error;
  }
};

// id로 이름 조회
export const getUserNameById = async (userId: string) => {
  try {
    return await getRequest(`/user/${userId}`);
  } catch (error) {
    console.error("이름 조회 실패:", error);
    throw error;
  }
};
