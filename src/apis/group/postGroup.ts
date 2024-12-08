import { postRequest } from "../apiService";

interface UserRequestParams {
  groupName: string;
  description: string;
  groupColor: string;
}
// 그룹 생성
export const postGroup = async (userForm: UserRequestParams) => {
  try {
    const res = await postRequest("/groups", userForm);
    return res;
  } catch (error) {
    return error;
  }
};
