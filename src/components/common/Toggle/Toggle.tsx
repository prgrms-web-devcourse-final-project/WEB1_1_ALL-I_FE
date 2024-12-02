import * as Styled from "./Toggle.style";

interface IProps {
  isOn: boolean;
  onClick: (isOn: boolean) => void;
}

function Toggle({ isOn, onClick }: IProps) {
  return (
    <Styled.ToggleWrapper onClick={() => onClick(!isOn)}>
      <Styled.ToggleContainer $isOn={isOn}>
        <Styled.ToggleCircle $isOn={isOn} />
      </Styled.ToggleContainer>
    </Styled.ToggleWrapper>
  );
}

export default Toggle;
