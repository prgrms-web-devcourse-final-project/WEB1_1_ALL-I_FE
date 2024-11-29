import * as Styled from "./TodoScheduleForm.style";
import TextInput from "@/components/common/TextInput/TextInput";
import CategorySelect from "@/components/common/SelectList/Category/CategorySelect";
import DateInput from "@/components/common/DateInput/DateInput";
import TimeInput from "@/components/common/TimeInput/TimeInput";
import Toggle from "@/components/common/Toggle/Toggle";
import TextSetting from "@/components/common/TextSetting/TextSetting";
import Button from "@/components/common/Button/Button";
import { useTodoScheduleForm } from "@/hooks/useTodoScheduleForm";

interface ScheduleFormProps {
  form: ReturnType<typeof useTodoScheduleForm>;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  withEndDate?: boolean;
  withEndTime?: boolean;
  withAlarm?: boolean;
  submitButtonText: string;
}

function ScheduleForm({
  form,
  onSubmit,
  withEndDate = false,
  withEndTime = false,
  withAlarm = false,
  submitButtonText,
}: ScheduleFormProps) {
  return (
    <Styled.Container>
      <Styled.Form onSubmit={onSubmit}>
        <TextInput
          name="content"
          type="text"
          placeholder="내용"
          required={false}
          value={form.content}
          onChange={form.handleContentChange}
        />
        <CategorySelect
          category={form.category}
          options={form.categoryList}
          onCategoryChange={form.handleCategoryChange}
        />
        <Styled.ToggleContainer>
          <TextSetting text="시간 옵션" />
          <Toggle isOn={form.isTimeOn} onClick={form.handleTimeToggle} />
        </Styled.ToggleContainer>
        <DateInput
          startDate={form.startDate}
          endDate={withEndDate ? form.endDate : undefined}
          onChange={form.handleDateChange}
          withEndDate={withEndDate}
        />
        {form.isTimeOn && (
          <TimeInput
            startTime={form.startTime}
            endTime={withEndTime ? form.endTime : undefined}
            onChange={form.handleTimeChange}
            withEndTime={withEndTime}
          />
        )}
        {withAlarm && (
          <Styled.ToggleContainer>
            <TextSetting text="알림 추가" />
            <Toggle isOn={form.isAlarmOn} onClick={form.handleAlarmToggle} />
          </Styled.ToggleContainer>
        )}
        <Button buttonType="primaryLarge" isHoverEffect={true} type="submit">
          {submitButtonText}
        </Button>
      </Styled.Form>
    </Styled.Container>
  );
}

export default ScheduleForm;