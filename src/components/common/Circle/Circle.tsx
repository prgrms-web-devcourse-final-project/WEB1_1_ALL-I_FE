import * as Styled from "./Circle.style";

interface CircleProps {
  color: string;
}

// 카테고리 리스트에서 보여주는 색상
function Circle({ color }: CircleProps) {
  return <Styled.CircleColor $color={color}></Styled.CircleColor>;
}

export default Circle;
