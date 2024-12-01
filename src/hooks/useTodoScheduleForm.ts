import { useState } from "react";
import { GroupMember, OptionType } from "@/types/select.types";
import { useToast } from "@/hooks/useToast";

interface useTodoScheduleFormProps {
  withEndDate?: boolean; // 종료일 입력 여부
  withEndTime?: boolean; // 종료시간 입력 여부
  withGroup?: boolean; // 그룹원 선택 여부
}

export const useTodoScheduleForm = ({
  withEndDate = false,
  withEndTime = false,
  withGroup = false,
}: useTodoScheduleFormProps = {}) => {
  // 내용
  const [content, setContent] = useState<string>("");
  // 카테고리
  const [categoryList, setCategoryList] = useState<OptionType[]>([]);
  const [category, setCategory] = useState<OptionType | null>(null);
  // 멤버
  const [memberList, setMemberList] = useState<GroupMember[]>([]);
  const [member, setMember] = useState<GroupMember[]>([]);
  // 날짜
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  // 시간
  const [startTime, setStartTime] = useState<string>("09:00");
  const [endTime, setEndTime] = useState<string>("10:00");
  // 토글
  const [isTimeOn, setIsTimeOn] = useState<boolean>(false);
  const [isAlarmOn, setIsAlarmOn] = useState<boolean>(false);
  // 토스트
  const { showToast } = useToast();

  const handleContentChange = (value: string) => {
    setContent(value);
  };

  const handleCategoryChange = (value: OptionType | null) => {
    setCategory(value);
  };

  const handleMemberChange = (value: GroupMember[]) => {
    setMember(value);
  };

  const handleDateChange = (newStartDate: Date, newEndDate?: Date) => {
    setStartDate(newStartDate);
    if (withEndDate && newEndDate) setEndDate(newEndDate);
  };

  const handleTimeChange = (newStartTime: string, newEndTime?: string) => {
    setStartTime(newStartTime);
    if (withEndTime && newEndTime) setEndTime(newEndTime);
  };

  const handleTimeToggle = () => {
    setIsTimeOn(!isTimeOn);
  };

  const handleAlarmToggle = () => {
    setIsAlarmOn(!isAlarmOn);
  };

  const validateContentAndCategory = () => {
    let ok = true;
    if (!content) {
      showToast("내용을 입력해주세요.", "error");
      ok = false;
    }
    if (!category) {
      showToast("카테고리를 입력해주세요.", "error");
      ok = false;
    }
    if (withGroup && member.length === 0) {
      showToast("멤버를 선택해주세요.", "error");
      ok = false;
    }
    return ok;
  };

  return {
    content,
    setContent,
    categoryList,
    setCategoryList,
    memberList,
    setMemberList,
    member,
    setMember,
    category,
    setCategory,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    startTime,
    setStartTime,
    endTime,
    setEndTime,
    isTimeOn,
    setIsTimeOn,
    isAlarmOn,
    setIsAlarmOn,
    handleContentChange,
    handleCategoryChange,
    handleMemberChange,
    handleDateChange,
    handleTimeChange,
    handleTimeToggle,
    handleAlarmToggle,
    validateContentAndCategory,
  };
};
