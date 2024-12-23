import { useState } from "react";
import { GroupMember, OptionType } from "@/types/select.types";
import { useToast } from "@/hooks/useToast";

interface TodoScheduleFormState {
  todoId?: string; // 투두 id
  scheduleId?: string; // 스케줄 id
  content: string; // 내용
  categoryId: string | null; // 카테고리
  groupId: string; // 그룹 id
  member: string[]; // 선택된 멤버들의 id
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
    categories: OptionType[]; // 카테고리 목록
    members: GroupMember[]; // 멤버 목록
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
    todoId: "",
    scheduleId: "",
    content: "",
    categoryId: null,
    groupId: "",
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
      categories: [],
      members: [],
    },
  });

  const { showToast } = useToast();

  // 폼 전체 업데이트 함수
  const handleFormUpdate = (updates: Partial<TodoScheduleFormState>) => {
    setForm((prev) => ({ ...prev, ...updates }));
  };

  const handleTodoIdUpdate = (value: string) => {
    handleFormUpdate({ todoId: value });
  };

  const handleScheduleIdUpdate = (value: string) => {
    handleFormUpdate({ scheduleId: value });
  };

  const handleContentUpdate = (value: string) => {
    handleFormUpdate({ content: value });
  };

  const handleGroupIdUpdate = (value: string) => {
    handleFormUpdate({ groupId: value });
  };

  const handleCategoryUpdate = (value: string | null) => {
    handleFormUpdate({ categoryId: value });
  };

  const handleMemberUpdate = (value: string[]) => {
    handleFormUpdate({ member: value });
  };

  const handleDateUpdate = (newStartDate: Date, newEndDate?: Date) => {
    handleFormUpdate({
      date: {
        start: newStartDate,
        end: withEndDate && newEndDate ? newEndDate : newStartDate,
      },
    });
  };

  const handleTimeUpdate = (newStartTime: string, newEndTime?: string) => {
    handleFormUpdate({
      time: {
        start: newStartTime,
        end: withEndTime && newEndTime ? newEndTime : newStartTime,
      },
    });
  };

  const handleToggleUpdate = (type: "time" | "alarm", isOn: boolean) => {
    setForm((prev) => ({
      ...prev,
      toggle: {
        ...prev.toggle,
        [type === "time" ? "isTimeOn" : "isAlarmOn"]: isOn,
      },
    }));
  };

  const handleListUpdate = (updates: {
    categories?: OptionType[];
    members?: GroupMember[];
  }) => {
    handleFormUpdate({
      list: {
        ...form.list,
        ...(updates.categories && { categories: updates.categories }),
        ...(updates.members && { members: updates.members }),
      },
    });
  };

  // 폼 유효성 검사 함수
  const handleFormValidation = () => {
    let ok = true;

    const validationRules = [
      { condition: !form.content, message: "내용을 입력해주세요." },
      {
        condition: form.groupId === "" && !form.categoryId,
        message: "카테고리를 입력해주세요.",
      },
      {
        condition: withGroup && form.member.length === 0,
        message: "멤버를 선택해주세요.",
      },
    ];

    // 유효성 검사 실패 시 토스트 메시지 표시
    const failedRules = validationRules.filter((rule) => rule.condition);
    failedRules.forEach((rule) => {
      ok = false;
      showToast(rule.message, "error");
    });

    return ok;
  };

  // 폼 상태와 핸들러 함수들을 반환
  return {
    ...form,
    handleTodoIdUpdate,
    handleScheduleIdUpdate,
    handleFormUpdate,
    handleContentUpdate,
    handleGroupIdUpdate,
    handleCategoryUpdate,
    handleMemberUpdate,
    handleDateUpdate,
    handleTimeUpdate,
    handleToggleUpdate,
    handleListUpdate,
    handleFormValidation,
  };
}
