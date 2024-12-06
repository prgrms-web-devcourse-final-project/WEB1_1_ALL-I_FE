import { postRequest } from "./apiService";

export const postChat = async <T>(url: string, data: object): Promise<T> => {
  try {
    const response = await postRequest(url, data);
    return response as T;
  } catch (error) {
    console.error("POST 요청 에러:", error);
    throw error;
  }
};

// 수락,거절 메시지 함수
export const postChatContent = async (
  action: "수락" | "거절",
  token: string
) => {
  const isAccept = action === "수락";
  const url = `/chatbot/message?accept=${isAccept}&isAlarmed=false`;

  try {
    await postRequest(url, { token });
    return isAccept ? "작성이 완료되었습니다." : "작성이 삭제되었습니다.";
  } catch (error) {
    console.error(`${action} 요청 중 에러 발생:`, error);
    throw new Error(
      isAccept ? "수락 요청에 실패했습니다." : "거절 요청에 실패했습니다."
    );
  }
};
