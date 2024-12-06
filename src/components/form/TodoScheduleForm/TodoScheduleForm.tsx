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
  withCategory?: boolean;
  withEndDate?: boolean;
  withEndTime?: boolean;
  withGroup?: boolean;
  withAlarm?: boolean;
  submitButtonText: string;
}

function TodoScheduleForm({
  form,
  onSubmit,
  withCategory = false,
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
          onChange={form.handleContentUpdate}
        />
        {withGroup && (
          <GroupSelect
            groupId={form.groupId}
            selectedMembersId={form.member}
            onMemberChange={form.handleMemberUpdate}
          />
        )}
        {withCategory && (
          <CategorySelect
            categoryId={form.categoryId}
            onCategoryChange={form.handleCategoryUpdate}
          />
        )}
        <Styled.ToggleContainer>
          <TextSetting text="시간 옵션" />
          <Toggle
            type="time"
            isOn={form.toggle.isTimeOn}
            onClick={form.handleToggleUpdate}
          />
        </Styled.ToggleContainer>
        <DateInput
          startDate={form.date.start}
          endDate={withEndDate ? form.date.end : undefined}
          onChange={form.handleDateUpdate}
          withEndDate={withEndDate}
        />
        {form.toggle.isTimeOn && (
          <TimeInput
            startTime={form.time.start}
            endTime={withEndTime ? form.time.end : undefined}
            onChange={form.handleTimeUpdate}
            withEndTime={withEndTime}
          />
        )}
        {withAlarm && (
          <Styled.ToggleContainer>
            <TextSetting text="알림 추가" />
            <Toggle
              type="alarm"
              isOn={form.toggle.isAlarmOn}
              onClick={form.handleToggleUpdate}
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
