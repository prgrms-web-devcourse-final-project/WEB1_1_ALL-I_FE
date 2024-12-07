import { postRequest } from "../apiService";

interface UserRequestParams {
  group_id: string;
  nickname: string;
}
// 그룹 생성
export const postInvitation = async ({
  group_id,
  nickname,
}: UserRequestParams) => {
  try {
    const res = await postRequest(`/groups-invitation/${group_id}`, {
      nickname,
    });
    return res;
  } catch (error) {
    return error;
  }
};
