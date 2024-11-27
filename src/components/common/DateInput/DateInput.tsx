import { useState } from "react";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/locale";
import "react-datepicker/dist/react-datepicker.css";
import * as Style from "./DateInput.style";
import "./DateInput.css";

interface DateProps {
  defaultDate: string; // 시작 날짜와 종료 날짜의 기본값 (메인페이지 달력 날짜 기준으로 받아와야함)
  onChange: (startDate: Date | null, endDate: Date | null) => void; // 날짜 변경될 때마다 호출해서 변경된 날짜 전달
  withEndDate?: boolean; // 종료날짜 입력 옵션
}

function DateInput({ defaultDate, onChange, withEndDate }: DateProps) {
  const initialDate = new Date(defaultDate);
  const [startDate, setStartDate] = useState<Date | null>(initialDate);
  const [endDate, setEndDate] = useState<Date | null>(initialDate);

  const handleStartDateChange = (date: Date | null) => {
    setStartDate(date);
    if (endDate && date && date > endDate) {
      setEndDate(null); // 시작 날짜가 종료 날짜보다 늦으면 종료 날짜 초기화
    }
    onChange(date, endDate);
  };

  const handleEndDateChange = (date: Date | null) => {
    setEndDate(date);
    onChange(startDate, date);
  };

  return (
    <Style.InputContainer>
      {/* 시작 날짜 */}
      <>
        <div style={{ width: "100%" }}>
          <DatePicker
            locale={ko}
            dateFormat="yyyy.MM.dd"
            required
            selected={startDate}
            onChange={handleStartDateChange}
            customInput={<Style.DateInput />}
            popperPlacement="bottom-end"
          />
        </div>
      </>
      {withEndDate && (
        <>
          {/* 종료 날짜 */}→
          <div style={{ width: "100%" }}>
            <DatePicker
              locale={ko}
              dateFormat="yyyy.MM.dd"
              selected={endDate}
              onChange={handleEndDateChange}
              minDate={startDate || new Date()}
              customInput={<Style.DateInput />}
              placeholderText="종료 날짜 (선택)"
              popperPlacement="bottom-end"
            />
          </div>
        </>
      )}
    </Style.InputContainer>
  );
}
export default DateInput;
