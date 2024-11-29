import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/locale";
import "react-datepicker/dist/react-datepicker.css";
import * as Style from "./DateInput.style";
import "./DateInput.css";
import { DateProps } from "@/types/input.types";

function DateInput({ defaultDate, onChange, withEndDate }: DateProps) {
  const initialDate = new Date(defaultDate);
  const [startDate, setStartDate] = useState<Date>(initialDate);
  const [endDate, setEndDate] = useState<Date | null>(initialDate);

  const handleStartDateChange = (date: Date | null) => {
    setStartDate(date || new Date());
    if (endDate && date && date > endDate) {
      setEndDate(date); // 시작 날짜가 종료 날짜보다 늦으면 종료 날짜 초기화
    }
    onChange(date || new Date(), endDate);
  };

  const handleEndDateChange = (date: Date | null) => {
    setEndDate(date);
    onChange(startDate, date);
  };

  useEffect(() => {
    onChange(startDate, endDate);
  }, [startDate, endDate, onChange]);

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
            customInput={<Style.InputDate />}
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
              customInput={<Style.InputDate />}
              placeholderText="종료 날짜 (선택)"
            />
          </div>
        </>
      )}
    </Style.InputContainer>
  );
}
export default DateInput;
