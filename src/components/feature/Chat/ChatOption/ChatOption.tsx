import * as Styled from "./ChatOption.style";

interface OptionSelectProps {
  options: string[];
  onOptionClick: (option: string) => void;
  selectedOption: string;
}

export default function OptionSelect({
  options,
  onOptionClick,
  selectedOption,
}: OptionSelectProps) {
  return (
    <Styled.ButtonContainer>
      {options.map((option) => (
        <Styled.Button
          key={option}
          $isSelected={selectedOption === option}
          onClick={() => onOptionClick(option)}
        >
          {option}
        </Styled.Button>
      ))}
    </Styled.ButtonContainer>
  );
}
