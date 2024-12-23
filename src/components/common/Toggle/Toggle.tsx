import * as Styled from "./Toggle.style";

interface IProps {
  type: "time" | "alarm";
  isOn: boolean;
  onClick: (type: "time" | "alarm", isOn: boolean) => void;
}

function Toggle({ type, isOn, onClick }: IProps) {
  return (
    <Styled.ToggleWrapper onClick={() => onClick(type, !isOn)}>
      <Styled.ToggleContainer $isOn={isOn}>
        <Styled.ToggleCircle $isOn={isOn} />
      </Styled.ToggleContainer>
    </Styled.ToggleWrapper>
  );
}

export default Toggle;
