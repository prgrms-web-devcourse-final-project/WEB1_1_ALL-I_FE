import { postRequest } from "../apiService";

interface UserRequestParams {
  email: string;
  password: string;
  nickname: string;
}
// signup
export const postSignup = async (userData: UserRequestParams) => {
  try {
    const res = await postRequest("/user/signup", userData);
    return res;
  } catch (error) {
    return error;
  }
};
