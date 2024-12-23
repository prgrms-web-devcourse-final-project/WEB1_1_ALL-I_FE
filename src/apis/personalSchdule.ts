import {
  deleteRequest,
  getRequest,
  postRequest,
  updateRequest,
} from "@/apis/apiService";
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

// 개인 일정 조회 API
// GET /events?year={year}&month={month}
export const getPersonalSchedules = async ({
  year,
  month,
}: {
  year: string;
  month: string;
}) => {
  try {
    return await getRequest(`/events?year=${year}&month=${month}`);
  } catch (error) {
    console.error("개인 일정 조회 실패:", error);
    throw error;
  }
};

// 개인 일정 삭제 API
// DELETE /events/{event_id}
export const deletePersonalSchedule = async (eventId: string) => {
  try {
    return await deleteRequest(`/events/${eventId}`);
  } catch (error) {
    console.error("개인 일정 삭제 실패:", error);
    throw error;
  }
};

// 개인 특정 달 그룹 일정 조회 API
// GET /groupEvents?year={year}&month={month}
export const getPersonalGroupSchedules = async ({
  year,
  month,
}: {
  year: string;
  month: string;
}) => {
  try {
    return await getRequest(`/groupEvents?year=${year}&month=${month}`);
  } catch (error) {
    console.error("개인 그룹 일정 조회 실패:", error);
    throw error;
  }
};
