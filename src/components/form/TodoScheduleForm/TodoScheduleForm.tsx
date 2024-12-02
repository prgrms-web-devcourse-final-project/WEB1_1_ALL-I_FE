import * as Styled from "./TodoScheduleForm.style";
import TextInput from "@/components/common/TextInput/TextInput";
import CategorySelect from "@/components/common/SelectList/Category/CategorySelect";
import DateInput from "@/components/common/DateInput/DateInput";
import TimeInput from "@/components/common/TimeInput/TimeInput";
import Toggle from "@/components/common/Toggle/Toggle";
import TextSetting from "@/components/common/TextSetting/TextSetting";
import Button from "@/components/common/Button/Button";
import { useTodoScheduleForm } from "@/hooks/useTodoScheduleForm";
import GroupSelect from "@/components/common/SelectList/Group/GroupSelect";

interface TodoScheduleFormProps {
  form: ReturnType<typeof useTodoScheduleForm>;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  withEndDate?: boolean;
  withEndTime?: boolean;
  withGroup?: boolean;
  withAlarm?: boolean;
  submitButtonText: string;
}

function TodoScheduleForm({
  form,
  onSubmit,
  withEndDate = false,
  withEndTime = false,
  withGroup = false,
  withAlarm = false,
  submitButtonText,
}: TodoScheduleFormProps) {
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
        {withGroup && (
          <GroupSelect
            groupMembers={form.list.member}
            selectedMembers={form.member}
            onMemberChange={form.handleMemberChange}
          />
        )}
        <CategorySelect
          category={form.category}
          options={form.list.category}
          onCategoryChange={form.handleCategoryChange}
        />
        <Styled.ToggleContainer>
          <TextSetting text="시간 옵션" />
          <Toggle isOn={form.toggle.isTimeOn} onClick={form.handleTimeToggle} />
        </Styled.ToggleContainer>
        <DateInput
          startDate={form.date.start}
          endDate={withEndDate ? form.date.end : undefined}
          onChange={form.handleDateChange}
          withEndDate={withEndDate}
        />
        {form.toggle.isTimeOn && (
          <TimeInput
            startTime={form.time.start}
            endTime={withEndTime ? form.time.end : undefined}
            onChange={form.handleTimeChange}
            withEndTime={withEndTime}
          />
        )}
        {withAlarm && (
          <Styled.ToggleContainer>
            <TextSetting text="알림 추가" />
            <Toggle
              isOn={form.toggle.isAlarmOn}
              onClick={form.handleAlarmToggle}
            />
          </Styled.ToggleContainer>
        )}
        <Button buttonType="primaryLarge" isHoverEffect={true} type="submit">
          {submitButtonText}
        </Button>
      </Styled.Form>
    </Styled.Container>
  );
}

export default TodoScheduleForm;
