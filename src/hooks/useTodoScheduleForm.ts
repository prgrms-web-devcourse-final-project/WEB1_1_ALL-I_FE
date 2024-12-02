import { useState } from "react";
import { GroupMember, OptionType } from "@/types/select.types";
import { useToast } from "@/hooks/useToast";

interface TodoScheduleFormState {
  content: string; // 내용
  category: OptionType | null; // 카테고리
  member: GroupMember[]; // 선택된 멤버들
  date: {
    start: Date; // 시작일
    end: Date; // 종료일
  };
  time: {
    start: string; // 시작 시간
    end: string; // 종료 시간
  };
  toggle: {
    isTimeOn: boolean; // 시간 설정 여부
    isAlarmOn: boolean; // 알람 설정 여부
  };
  list: {
    category: OptionType[]; // 카테고리 목록
    member: GroupMember[]; // 멤버 목록
  };
}

interface useTodoScheduleFormProps {
  withEndDate?: boolean; // 종료일 입력 필드 표시 여부
  withEndTime?: boolean; // 종료 시간 입력 필드 표시 여부
  withGroup?: boolean; // 그룹 멤버 선택 필드 표시 여부
}

export function useTodoScheduleForm({
  withEndDate = false,
  withEndTime = false,
  withGroup = false,
}: useTodoScheduleFormProps = {}) {
  // 폼의 초기 상태 설정
  const [form, setForm] = useState<TodoScheduleFormState>({
    content: "",
    category: null,
    member: [],
    date: {
      start: new Date(),
      end: new Date(),
    },
    time: {
      start: "09:00",
      end: "10:00",
    },
    toggle: {
      isTimeOn: false,
      isAlarmOn: false,
    },
    list: {
      category: [],
      member: [],
    },
  });

  const { showToast } = useToast();

  // 폼 전체 업데이트 함수
  const updateForm = (updates: Partial<TodoScheduleFormState>) => {
    setForm((prev) => ({ ...prev, ...updates }));
  };

  const handleContentChange = (value: string) => {
    updateForm({ content: value });
  };

  const handleCategoryChange = (value: OptionType | null) => {
    updateForm({ category: value });
  };

  const handleMemberChange = (value: GroupMember[]) => {
    updateForm({ member: value });
  };

  const handleDateChange = (newStartDate: Date, newEndDate?: Date) => {
    updateForm({
      date: {
        start: newStartDate,
        end: withEndDate && newEndDate ? newEndDate : newStartDate,
      },
    });
  };

  const handleTimeChange = (newStartTime: string, newEndTime?: string) => {
    updateForm({
      time: {
        start: newStartTime,
        end: withEndTime && newEndTime ? newEndTime : newStartTime,
      },
    });
  };

  const handleTimeToggle = (isOn: boolean) => {
    updateForm({
      toggle: {
        ...form.toggle,
        isTimeOn: isOn,
      },
    });
  };

  const handleAlarmToggle = (isOn: boolean) => {
    updateForm({
      toggle: {
        ...form.toggle,
        isAlarmOn: isOn,
      },
    });
  };

  const handleCategoryListChange = (categories: OptionType[]) => {
    updateForm({
      list: {
        ...form.list,
        category: categories,
      },
    });
  };

  const handleMemberListChange = (members: GroupMember[]) => {
    updateForm({
      list: {
        ...form.list,
        member: members,
      },
    });
  };

  // 폼 유효성 검사 함수
  const validateContentAndCategory = () => {
    const validationRules = [
      { condition: !form.content, message: "내용을 입력해주세요." },
      { condition: !form.category, message: "카테고리를 입력해주세요." },
      {
        condition: withGroup && form.member.length === 0,
        message: "멤버를 선택해주세요.",
      },
    ];

    // 유효성 검사 실패 시 토스트 메시지 표시
    const failedRules = validationRules.filter((rule) => rule.condition);
    failedRules.forEach((rule) => {
      showToast(rule.message, "error");
    });

    return true;
  };

  // 폼 상태와 핸들러 함수들을 반환
  return {
    ...form,
    updateForm,
    handleContentChange,
    handleCategoryChange,
    handleMemberChange,
    handleDateChange,
    handleTimeChange,
    handleTimeToggle,
    handleAlarmToggle,
    handleCategoryListChange,
    handleMemberListChange,
    validateContentAndCategory,
  };
}
