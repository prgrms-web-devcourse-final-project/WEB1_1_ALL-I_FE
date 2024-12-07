import { getRequest } from "../apiService";

export const getUser = async () => {
  try {
    const res = await getRequest(`/user/myPage`);
    return res;
  } catch (error) {
    return error;
  }
};
