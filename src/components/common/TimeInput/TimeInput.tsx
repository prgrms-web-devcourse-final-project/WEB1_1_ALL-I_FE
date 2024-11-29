import { useState } from "react";
import * as Style from "./TimeInput.style";
import { TimeInputProps } from "@/types/input.types";

function TimeInput({
  defaultStartTime = "09:00",
  defaultEndTime = "10:00",
  withEndTime = false,
  onChange,
}: TimeInputProps) {
  const [startTime, setStartTime] = useState(defaultStartTime);
  const [endTime, setEndTime] = useState(defaultEndTime);

  const handleStartTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newStartTime = e.target.value;
    if (withEndTime && endTime && newStartTime > endTime) {
      alert("시작 시간을 다시 입력해주세요.");
    } else {
      setStartTime(newStartTime);
      onChange(newStartTime, endTime);
    }
  };

  const handleEndTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!withEndTime) return; // 종료 시간이 사용되지 않을 때는 X
    const newEndTime = e.target.value;
    if (newEndTime >= startTime) {
      setEndTime(newEndTime);
      onChange(startTime, endTime);
    } else {
      alert("종료 시간을 다시 입력해주세요.");
    }
  };

  return (
    <Style.Container>
      <Style.StyledTimeInput
        id="start-time"
        name="startTime"
        type="time"
        value={startTime}
        onChange={handleStartTimeChange}
        required
      />
      {withEndTime && (
        <>
          →
          <Style.StyledTimeInput
            id="end-time"
            name="endTime"
            type="time"
            value={endTime || ""}
            onChange={handleEndTimeChange}
            required={withEndTime}
          />
        </>
      )}
    </Style.Container>
  );
}

export default TimeInput;
