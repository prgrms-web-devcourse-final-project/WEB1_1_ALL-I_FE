import * as Style from "./TextSetting.style";

interface TextProps {
  text: string; // 입력받을 텍스트
}

function TextSetting({ text }: TextProps) {
  return <Style.StyledText>{text}</Style.StyledText>;
}

export default TextSetting;
