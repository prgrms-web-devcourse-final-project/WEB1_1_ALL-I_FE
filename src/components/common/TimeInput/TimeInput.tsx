import { useState } from "react";
import * as Style from "./TimeInput.style";

interface TimeInputProps {
  defaultStartTime?: string; // default 시작시간
  defaultEndTime?: string; // default 종료시간
  withEndTime?: boolean; // 종료시간 옵션 (true: 사용, false: 사용하지 않음)
  onChange: (startTime: string, endTime?: string) => void; // 시간 바뀔때마다 호출해서 바뀐 시간 전달
}

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
        type="time"
        value={startTime}
        onChange={handleStartTimeChange}
      />
      {withEndTime && (
        <>
          →
          <Style.StyledTimeInput
            id="end-time"
            type="time"
            value={endTime || ""}
            onChange={handleEndTimeChange}
          />
        </>
      )}
    </Style.Container>
  );
}

export default TimeInput;
