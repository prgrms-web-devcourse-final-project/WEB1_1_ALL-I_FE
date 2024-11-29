import * as Styled from "./Toggle.style";

interface IProps {
  isOn: boolean;
  onClick: () => void;
}

function Toggle({ isOn, onClick }: IProps) {
  return (
    <Styled.ToggleWrapper onClick={onClick}>
      <Styled.ToggleContainer $isOn={isOn}>
        <Styled.ToggleCircle $isOn={isOn} />
      </Styled.ToggleContainer>
    </Styled.ToggleWrapper>
  );
}

export default Toggle;
