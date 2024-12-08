import { updateRequest } from "../apiService";

// 사용자 정보 수정
export const putGroup = async (nickname: string) => {
  try {
    const res = await updateRequest(`/user/myPage`, {
      nickname: nickname,
      imageUrl: null,
      endTime: "23:00",
    });
    return res;
  } catch (error) {
    return error;
  }
};
