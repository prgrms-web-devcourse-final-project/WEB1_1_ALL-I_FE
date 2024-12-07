import { deleteRequest } from "../apiService";

// 그룹 조회
export const deleteMember = async (groupSettingId: string) => {
  try {
    const res = await deleteRequest(
      `/groups-setting/${groupSettingId}/ejection`
    );
    return res;
  } catch (error) {
    return error;
  }
};
