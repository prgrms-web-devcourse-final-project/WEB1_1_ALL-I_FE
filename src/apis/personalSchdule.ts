import { postRequest, updateRequest } from "@/apis/apiService";
import {
  CreatePersonalScheduleRequest,
  EditPersonalScheduleRequest,
} from "@/types/apiRequest.type";

// 개인 일정 생성
export const createPersonalSchedule = async (
  scheduleData: CreatePersonalScheduleRequest
) => {
  try {
    return await postRequest("/events", scheduleData);
  } catch (error) {
    console.error("개인 일정 생성 실패:", error);
    throw error;
  }
};

// 개인 일정 수정
export const editPersonalSchedule = async ({
  scheduleId,
  scheduleData,
}: {
  scheduleId: string;
  scheduleData: EditPersonalScheduleRequest;
}) => {
  try {
    return await updateRequest(`/events/${scheduleId}`, scheduleData);
  } catch (error) {
    console.error("개인 일정 수정 실패:", error);
    throw error;
  }
};
