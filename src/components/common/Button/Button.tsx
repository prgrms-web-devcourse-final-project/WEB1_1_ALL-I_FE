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
  onClick?: () => void;
}

function Button({
  children,
  buttonType,
  isHoverEffect,
  type,
  onClick,
}: IProps) {
  return (
    <Styled.Button
      $buttonType={buttonType}
      $isHoverEffect={isHoverEffect}
      type={type}
      onClick={onClick}
    >
      {children}
    </Styled.Button>
  );
}

export default Button;
