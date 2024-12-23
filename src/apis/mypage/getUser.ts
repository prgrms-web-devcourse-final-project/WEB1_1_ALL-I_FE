import { getRequest } from "../apiService";

// 사용자(유저) 정보 조회
export const getUser = async () => {
  try {
    const res = await getRequest(`/user/myPage`);
    return res;
  } catch (error) {
    return error;
  }
};
