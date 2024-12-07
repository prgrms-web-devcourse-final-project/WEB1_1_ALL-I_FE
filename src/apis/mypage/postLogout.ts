import { postRequest } from "../apiService";

// 로그아웃
export const postLogout = async () => {
  try {
    const res = await postRequest(`/user/logout`);
    return res;
  } catch (error) {
    return error;
  }
};
