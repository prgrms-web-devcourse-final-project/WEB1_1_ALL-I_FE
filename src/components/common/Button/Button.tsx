import * as S from "./Button.style";

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
    <S.Button
      $buttonType={buttonType}
      $isHoverEffect={isHoverEffect}
      type={type}
    >
      {children}
    </S.Button>
  );
}

export default Button;
