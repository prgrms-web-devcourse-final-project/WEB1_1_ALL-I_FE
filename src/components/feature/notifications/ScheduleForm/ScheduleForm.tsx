import * as Styled from "./ScheduleForm.style";

interface ScheduleFormProps {
  scheduleName?: string;
  scheduleDate?: string;
}

function ScheduleForm({ scheduleName, scheduleDate }: ScheduleFormProps) {
  return (
    <Styled.Container>
      <Styled.Date>{scheduleDate}</Styled.Date>
      <Styled.Content>
        예정된
        <span>{scheduleName}</span>
        시작 시간입니다.
      </Styled.Content>
    </Styled.Container>
  );
}

export default ScheduleForm;
