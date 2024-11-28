import * as Styled from "./ListBar.style";

interface ListBarProps {
  color: string;
}

// 일정/투두 리스트의 막대바
function ListBar({ color = "red" }: ListBarProps) {
  return <Styled.Bar $color={color} />;
}

export default ListBar;
