import { postRequest } from "../apiService";

// 특정 그룹 멤버 조회
export const postLogout = async () => {
  try {
    const res = await postRequest(`/user/logout`);
    return res;
  } catch (error) {
    return error;
  }
};
