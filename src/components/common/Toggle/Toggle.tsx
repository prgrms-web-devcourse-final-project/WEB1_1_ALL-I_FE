import * as Style from "./Toggle.style";

interface IProps {
  isOn: boolean;
  onClick: () => void;
}

function Toggle({ isOn, onClick }: IProps) {
  return (
    <Style.ToggleWrapper onClick={onClick}>
      <Style.ToggleContainer $isOn={isOn}>
        <Style.ToggleCircle $isOn={isOn} />
      </Style.ToggleContainer>
    </Style.ToggleWrapper>
  );
}

export default Toggle;
