import DatePicker from "react-datepicker";
import { ko } from "date-fns/locale";
import "react-datepicker/dist/react-datepicker.css";
import * as Style from "./DateInput.style";
import "./DateInput.css";
import { DateProps } from "@/types/input.types";
import { useToast } from "@/hooks/useToast";

function DateInput({ startDate, endDate, onChange, withEndDate }: DateProps) {
  const { showToast } = useToast();

  const handleStartDateChange = (date: Date | null) => {
    if (!date) {
      showToast("에러가 발생했습니다.", "error");
      return;
    }
    // 투두 작업할 때
    if (!endDate) {
      onChange(date);
      return;
    }
    // 일정 작업할 때
    if (date > endDate) {
      onChange(date, date); // 시작 날짜가 종료 날짜보다 늦으면 종료 날짜 초기화
    } else {
      onChange(date, endDate);
    }
  };

  const handleEndDateChange = (date: Date | null) => {
    if (!date) {
      showToast("에러가 발생했습니다.", "error");
      return;
    }
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
              minDate={startDate}
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
