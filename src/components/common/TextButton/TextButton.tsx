import * as Style from "./TextButton.style";

interface IProps {
  children: string;
  size?: "small" | "medium" | "large";
}

function Textbutton({ children, size }: IProps) {
  return <Style.Container $size={size}>{children}</Style.Container>;
}

export default Textbutton;
