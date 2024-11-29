import * as Styled from "./TextButton.style";

interface IProps {
  children: string;
  size?: "small" | "medium" | "large";
}

function Textbutton({ children, size }: IProps) {
  return <Styled.Container $size={size}>{children}</Styled.Container>;
}

export default Textbutton;
