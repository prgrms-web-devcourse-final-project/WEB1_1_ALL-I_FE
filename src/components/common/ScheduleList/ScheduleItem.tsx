import * as Styled from "./ScheduleItem.style";
import TextDate from "../TextDate/TextDate";
import ListBar from "../ListBar/ListBar";

interface ScheduleItemProps {
  values: string[]; // 날짜 or 시간 시작 및 종료
  color: string;
  schedule: string;
}

// 일정 아이템, props 값은 임시로 설정해뒀습니다.
// values는 시작/종료 값을 넣어주면 됩니다.
//  ex. ["1월 00일", "10월 50일"], ["1 : 00", "12 : 00"]
function ScheduleItem({
  values = [],
  color = "#E1FBFF",
  schedule = "기말고사",
}: ScheduleItemProps) {
  return (
    <Styled.Wrapper>
      <Styled.Explan>
        {values.length > 0 ? <TextDate values={values} /> : ""}
        <ListBar color={color} />
        <Styled.ScheduleText>{schedule}</Styled.ScheduleText>
      </Styled.Explan>
      <span>(수정 아이콘)</span>
    </Styled.Wrapper>
  );
}

export default ScheduleItem;
