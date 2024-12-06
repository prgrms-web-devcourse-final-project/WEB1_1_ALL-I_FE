import { postRequest } from "../apiService";

interface UserRequestParams {
  email: string;
  password: string;
}

export const postLogin = async (userForm: UserRequestParams) => {
  try {
    const res = await postRequest("/user/login", userForm);
    return res;
  } catch (error) {
    return error;
  }
};
