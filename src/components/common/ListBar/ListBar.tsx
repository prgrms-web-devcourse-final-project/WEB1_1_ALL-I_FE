import * as Styled from "./ListBar.style";

interface ListBarProps {
  color: string;
}

function ListBar({ color = "red" }: ListBarProps) {
  return <Styled.Bar $color={color} />;
}

export default ListBar;
