import { getRequest } from "../apiService";

interface UserRequestParams {
  group_id: string;
}

// 특정 그룹 멤버 조회
export const getMember = async ({ group_id }: UserRequestParams) => {
  try {
    const res = await getRequest(`/groups-setting/${group_id}`);
    return res;
  } catch (error) {
    return error;
  }
};
