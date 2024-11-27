import * as S from "./Button.style";

interface IProps {
  children: string;
  buttonType:
    | "primaryLarge"
    | "primaryMedium"
    | "primarySmall"
    | "whiteMedium"
    | "whiteSmall";
  isHoverEffect?: boolean;
}

function Button({ children, buttonType, isHoverEffect }: IProps) {
  return (
    <S.Button $buttonType={buttonType} $isHoverEffect={isHoverEffect}>
      {children}
    </S.Button>
  );
}

export default Button;