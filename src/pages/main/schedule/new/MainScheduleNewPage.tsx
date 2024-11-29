import { useEffect, useState } from "react";
import * as Styled from "./MainScheduleNewPage.style";
import TextInput from "@/components/common/TextInput/TextInput";
import CategorySelect from "@/components/common/SelectList/Category/CategorySelect";
import DateInput from "@/components/common/DateInput/DateInput";
import { OptionType } from "@/types/select.types";
import Toggle from "@/components/common/Toggle/Toggle";
import TextSetting from "@/components/common/TextSetting/TextSetting";
import TimeInput from "@/components/common/TimeInput/TimeInput";
import Button from "@/components/common/Button/Button";

function MainScheduleNewPage() {
  const [content, setContent] = useState<string>(""); // 내용
  const [categoryList, setCategoryList] = useState<OptionType[]>([]);
  const [category, setCategory] = useState<OptionType | null>(null); // 선택된 카테고리
  const [startDate, setStartDate] = useState<string>(new Date().toISOString()); // 시작날짜
  const [endDate, setEndDate] = useState<string | null>(null); // 종료날짜 null 가능
  const [startTime, setStartTime] = useState<string>(""); // 시작시간
  const [endTime, setEndTime] = useState<string>(""); // 종료시간
  const [isTimeOn, setIsTimeOn] = useState<boolean>(false); // 시간 옵션 사용 여부
  const [isAlramOn, setIsAlramOn] = useState<boolean>(false); // 알림 추가 여부

  const handleContentChange = (value: string) => {
    setContent(value);
  };

  const handleCategoryChange = (value: OptionType | null) => {
    setCategory(value);
  };

  const handleDateChange = (startDate: Date, endDate: Date | null) => {
    setStartDate(startDate.toISOString());
    setEndDate(endDate ? endDate.toISOString() : endDate); // 시작날이 종료날보다 늦으면 null
  };

  const handleTimeChange = (startTime: string, endTime?: string) => {
    setStartTime(startTime);
    if (endTime) setEndTime(endTime);
  };

  const handleTimeToggle = () => {
    setIsTimeOn(!isTimeOn);
  };

  const handleAlramToggle = () => {
    setIsAlramOn(!isAlramOn);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateContentAndCategory()) return;
    console.log(
      content,
      category,
      startDate,
      endDate,
      startTime,
      endTime,
      isAlramOn
    );
    // 스케줄 생성 api
  };

  const validateContentAndCategory = () => {
    let ok = true;
    if (!content) {
      alert("내용을 입력해주세요.");
      ok = false;
    }
    if (!category) {
      alert("카테고리를 입력해주세요.");
      ok = false;
    }
    return ok;
  };

  useEffect(() => {
    // 카테고리 목록 가져오는 api
    // 카테고리 목록 categoryList에 저장
    setCategoryList([
      { name: "카테고리1", color: "blue" },
      { name: "카테고리1", color: "red" },
      { name: "카테고리3", color: "black" },
    ]);
  }, []);

  return (
    <Styled.Container>
      <Styled.Form onSubmit={handleSubmit}>
        <TextInput
          name="content"
          type="text"
          placeholder="내용"
          required={false}
          value={content}
          onChange={handleContentChange}
        />
        <CategorySelect
          options={categoryList}
          onCategoryChange={handleCategoryChange}
        />
        <Styled.ToggleContainer>
          <TextSetting text="시간 옵션"></TextSetting>
          <Toggle isOn={isTimeOn} onClick={handleTimeToggle} />
        </Styled.ToggleContainer>
        <DateInput
          defaultDate={startDate}
          onChange={handleDateChange}
          withEndDate={true}
        />
        {isTimeOn && (
          <TimeInput withEndTime={true} onChange={handleTimeChange} />
        )}
        <Styled.ToggleContainer>
          <TextSetting text="알림 추가" />
          <Toggle isOn={isAlramOn} onClick={handleAlramToggle} />
        </Styled.ToggleContainer>
        <Button buttonType="primaryLarge" isHoverEffect={true}>
          생성
        </Button>
      </Styled.Form>
    </Styled.Container>
  );
}

export default MainScheduleNewPage;
