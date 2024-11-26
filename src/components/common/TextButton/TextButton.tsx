import * as Style from "./Textbutton.style";

interface IProps {
  text: string;
  size?: "small" | "medium" | "large";
}

function Textbutton({ text, size }: IProps) {
  return <Style.Container $size={size}>{text}</Style.Container>;
}

export default Textbutton;
