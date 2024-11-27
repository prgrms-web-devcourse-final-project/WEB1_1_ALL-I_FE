import * as Styled from "./TextDate.style";

interface TextDateProps {
  values: string[]; // 날짜 or 시간의 시작 및 종료
}

function TextDate({ values }: TextDateProps) {
  return (
    <Styled.TextContainer>
      <div>
        {values.map((day, index) => (
          <Styled.Text key={`day-${index}`}>{day}</Styled.Text>
        ))}
      </div>
    </Styled.TextContainer>
  );
}
export default TextDate;
