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
      `/group-invitations/${groupInvitationId}/accept`
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
      `/group-invitations/${groupInvitationId}/decline`
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

// 실시간 알림 SSE 연결
export const connectAlarmSSE = () => {
  try {
    const eventSource = new EventSource(
      `${import.meta.env.VITE_API_BASE_URL}/alarms/connect`,
      { withCredentials: true }
    );

    eventSource.onopen = () => {
      console.log("SSE 연결 성공");
    };

    eventSource.onerror = (error) => {
      console.error("SSE 연결 에러:", error);

      if (eventSource.readyState === EventSource.CLOSED) {
        console.log("SSE 재연결 시도...");
        eventSource.close();

        setTimeout(() => {
          connectAlarmSSE();
        }, 3000);
      }
    };

    return eventSource;
  } catch (error) {
    console.error("SSE 연결 실패:", error);
    throw error;
  }
};

// SSE 연결 해제
export const disconnectAlarmSSE = (eventSource: EventSource) => {
  if (eventSource) {
    eventSource.close();
    console.log("SSE 연결 해제");
  }
};
