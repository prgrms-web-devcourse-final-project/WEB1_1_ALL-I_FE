import { useState, useRef, useEffect } from "react";
import { postChat, postChatContent } from "@/apis/chatbotAPI";
import { FormatDate } from "@/utils/format";
import { useToast } from "./useToast";

// API 응답 데이터 타입 정의
interface ResponseData {
  date: string;
  title: string;
  startDate: string;
  endDate: string;
}

// 챗봇 응답 데이터
interface ChatbotResponse {
  data: {
    responses: ResponseData[];
    tokenReqDTO?: {
      token: string;
    };
  };
}

// 챗 메시지
interface ChatMessage {
  id: number;
  message: string;
  isUser: boolean; // 챗봇, 사용자 메시지 구분
  buttons?: string[]; // 수락/거절 버튼
  token?: string; // 응답받은 토큰값 => 수락하면 이 값을 통해 post
  actionMessage?: string; // 버튼 클릭하면 보이는 메시지
}

// 예시 내용 데이터
const exampleTexts: Record<string, string> = {
  "일정 작성":
    "다음주 수요일부터 내년 1월까지 매주 수요일 13시에 개발 회의 일정 잡아줘",
  "투두 작성": "이번주 수요일에 Java 과제 제출 투두 만들어줘",
  "계획 추천":
    "12월 안에 한강 작가의 채식주의자 완독하고 싶은데 계획 추천해줘. 나는 주로 주말에 시간이 많아",
};

export function useChat() {
  const [selectedOption, setSelectedOption] = useState<string>("투두 작성");
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    null
  );
  const [inputValue, setInputValue] = useState<string>("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 1, message: "아래의 예시처럼 입력해주세요 ", isUser: false },
    { id: 2, message: exampleTexts["투두 작성"], isUser: false },
  ]);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  const { showToast } = useToast();

  // 스크롤 자동 이동
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // 투두, 일정, 계획 추천 옵션 클릭
  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    if (exampleTexts[option]) {
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          message: "아래의 예시처럼 입력해주세요 ",
          isUser: false,
        },
        { id: prev.length + 2, message: exampleTexts[option], isUser: false },
      ]);
    }
  };

  // 카테고리 선택
  const handleCategoryChange = (categoryId: string | null) => {
    setSelectedCategoryId(categoryId);
  };

  // 입력 내용
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // 엔터 키로 내용 보내기
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  // 내용 보내는 함수
  const handleSubmit = async () => {
    if (isSubmitting) return;

    if (!inputValue.trim() || !selectedCategoryId || !selectedOption) {
      showToast("옵션, 카테고리, 내용 입력을 모두 완료해주세요.", "error");
      return;
    }

    setIsSubmitting(true);

    setMessages((prev) => [
      ...prev,
      { id: prev.length + 1, message: inputValue, isUser: true },
    ]);

    // 로딩 시작
    setIsLoading(true);

    // API POST로 보낼 데이터
    const requestData = {
      intention:
        selectedOption === "일정 작성"
          ? "EVENT"
          : selectedOption === "투두 작성"
            ? "TODO"
            : "PLAN_RECOMMENDATION",
      categoryId: selectedCategoryId,
      prompt: inputValue,
    };

    // console.log("requestData 데이터:", requestData);

    setInputValue("");

    try {
      const response = await postChat<ChatbotResponse>(
        "/chatbot/messages",
        requestData
      );

      // console.log("response 데이터:", response);

      const token = response.data.tokenReqDTO?.token;

      // 응답 데이터를 가공
      const responseMessage = response.data.responses
        .map((res) => {
          if (selectedOption === "일정 작성") {
            // 일정 작성 메시지 포맷
            const startDate = FormatDate(res.startDate);
            const endDate = FormatDate(res.endDate);
            return `${startDate} - ${endDate}\n${res.title} 일정이 계획되었습니다.`;
          } else {
            // 투두, 계획 추천 메시지 포맷
            const date = FormatDate(res.date);
            return `${date}\n${res.title} 투두가 계획되었습니다.`;
          }
        })
        .join("\n\n");

      // 수락, 거절 버튼과 함께 메시지 추가
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          message: responseMessage || "작성을 실패했습니다. 다시 작성해주세요.",
          isUser: false,
          buttons: ["수락", "거절"],
          token,
        },
      ]);
    } catch (error) {
      console.error("채팅 데이터를 서버로 보내는 중 에러 발생:", error);
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          message: "작성을 실패했습니다. 다시 작성해주세요.",
          isUser: false,
        },
      ]);
    } finally {
      setIsLoading(false);
      setIsSubmitting(false);
    }
  };

  // 수락, 거절 버튼 클릭 함수
  const handleButtonClick = async (action: "수락" | "거절", token: string) => {
    if (!token) return;

    try {
      await postChatContent(action, token);
      setMessages((prev) =>
        prev.map((msg) =>
          msg.token === token
            ? {
                ...msg,
                buttons: [],
                actionMessage:
                  action === "수락"
                    ? "작성 완료되었습니다."
                    : "작성을 거절했습니다.",
              }
            : msg
        )
      );
    } catch (error) {
      let errorMessage = "작성을 실패했습니다. 다시 작성해주세요.";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      setMessages((prev) =>
        prev.map((msg) =>
          msg.token === token
            ? { ...msg, buttons: [], actionMessage: errorMessage }
            : msg
        )
      );
    }
  };

  return {
    selectedOption,
    selectedCategoryId,
    inputValue,
    messages,
    isLoading,
    chatEndRef,
    handleOptionClick,
    handleCategoryChange,
    handleInputChange,
    handleKeyDown,
    handleSubmit,
    handleButtonClick,
  };
}
