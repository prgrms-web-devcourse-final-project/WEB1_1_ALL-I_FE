import { postRequest, updateRequest } from "@/apis/apiService";
import {
  CreateGroupScheduleRequest,
  EditGroupScheduleRequest,
} from "@/types/apiRequest.type";

export const createGroupSchedule = async ({
  groupId,
  scheduleData,
}: {
  groupId: string;
  scheduleData: CreateGroupScheduleRequest;
}) => {
  try {
    return await postRequest(`/groupEvents/${groupId}/events`, scheduleData);
  } catch (error) {
    console.error("일정 생성 실패:", error);
    throw error;
  }
};

export const editGroupSchedule = async ({
  groupId,
  scheduleId,
  scheduleData,
}: {
  groupId: string;
  scheduleId: string;
  scheduleData: EditGroupScheduleRequest;
}) => {
  try {
    return await updateRequest(
      `/groupEvents/${groupId}/events/${scheduleId}`,
      scheduleData
    );
  } catch (error) {
    console.error("일정 수정 실패:", error);
    throw error;
  }
};
