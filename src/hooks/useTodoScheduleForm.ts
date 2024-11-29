import { useState } from "react";
import { OptionType } from "@/types/select.types";
import { useToast } from "@/hooks/useToast";

interface useTodoScheduleFormProps {
  withEndDate?: boolean;
  withEndTime?: boolean;
}

export const useTodoScheduleForm = ({
  withEndDate = false,
  withEndTime = false,
}: useTodoScheduleFormProps = {}) => {
  const [content, setContent] = useState<string>("");
  const [categoryList, setCategoryList] = useState<OptionType[]>([]);
  const [category, setCategory] = useState<OptionType | null>(null);
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [startTime, setStartTime] = useState<string>("09:00");
  const [endTime, setEndTime] = useState<string>("10:00");
  const [isTimeOn, setIsTimeOn] = useState<boolean>(false);
  const [isAlarmOn, setIsAlarmOn] = useState<boolean>(false);
  const { showToast } = useToast();

  const handleContentChange = (value: string) => {
    setContent(value);
  };

  const handleCategoryChange = (value: OptionType | null) => {
    setCategory(value);
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
    return ok;
  };

  return {
    content,
    setContent,
    categoryList,
    setCategoryList,
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
    handleDateChange,
    handleTimeChange,
    handleTimeToggle,
    handleAlarmToggle,
    validateContentAndCategory,
  };
};
