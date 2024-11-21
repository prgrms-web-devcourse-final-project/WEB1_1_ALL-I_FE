import * as Styled from "./Test.style";

interface TestProps {
  title: string;
  description?: string;
  variant?: "primary" | "secondary" | "danger";
  onClick?: () => void;
  disabled?: boolean;
}

const Test = ({
  title,
  description,
  variant = "primary",
  onClick,
  disabled = false,
}: TestProps) => {
  return (
    <Styled.ButtonContainer
      $variant={variant}
      $disabled={disabled}
      onClick={disabled ? undefined : onClick}
    >
      <Styled.Title>{title}</Styled.Title>
      {description && <Styled.Description>{description}</Styled.Description>}
    </Styled.ButtonContainer>
  );
};

export default Test;
