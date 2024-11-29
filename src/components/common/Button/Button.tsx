import * as Styled from "./Button.style";

interface IProps {
  children: string;
  buttonType:
    | "primaryLarge"
    | "primaryMedium"
    | "primarySmall"
    | "primaryMicro"
    | "whiteMedium"
    | "whiteSmall"
    | "whiteMicro";
  isHoverEffect?: boolean;
  type: "button" | "submit" | "reset";
}

function Button({ children, buttonType, isHoverEffect, type }: IProps) {
  return (
    <Styled.Button
      $buttonType={buttonType}
      $isHoverEffect={isHoverEffect}
      type={type}
    >
      {children}
    </Styled.Button>
  );
}

export default Button;
