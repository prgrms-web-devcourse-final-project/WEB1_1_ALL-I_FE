import { getRequest } from "../apiService";

// 그룹 조회
export const getGroup = async () => {
  try {
    const res = await getRequest("/groups");
    return res;
  } catch (error) {
    return error;
  }
};
