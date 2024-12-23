import * as Style from "./TimeInput.style";
import { TimeInputProps } from "@/types/input.types";
import { useToast } from "@/hooks/useToast";

function TimeInput({
  startTime,
  endTime,
  withEndTime = false,
  onChange,
}: TimeInputProps) {
  const { showToast } = useToast();

  const handleStartTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newStartTime = e.target.value;
    // 투두 작업할 때
    if (!endTime) {
      onChange(newStartTime);
      return;
    }
    // 일정 작업할 때
    if (newStartTime > endTime) {
      onChange(newStartTime, newStartTime);
    } else {
      onChange(newStartTime, endTime);
    }
  };

  const handleEndTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEndTime = e.target.value;
    if (newEndTime < startTime) {
      showToast("종료 시간을 다시 입력해주세요.", "error");
      return;
    }
    onChange(startTime, newEndTime);
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
            min={startTime}
          />
        </>
      )}
    </Style.Container>
  );
}

export default TimeInput;
