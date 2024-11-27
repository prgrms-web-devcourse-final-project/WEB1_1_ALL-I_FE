import * as Styled from "./TextDate.style";

interface TextDateProps {
  type: "day" | "time";
  values: string[]; // 날짜 or 시간의 리스트
}

function TextDate({ type, values }: TextDateProps) {
  return (
    <div>
      {type === "day" && (
        <div>
          {values.map((day, index) => (
            <Styled.Text key={`day-${index}`}>{day}</Styled.Text>
          ))}
        </div>
      )}
      {type === "time" && (
        <div>
          {values.map((time, index) => (
            <Styled.Text key={`time-${index}`}>{time}</Styled.Text>
          ))}
        </div>
      )}
    </div>
  );
}
export default TextDate;
