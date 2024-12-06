import * as Styled from "./InputField.style";
import ChatIcon from "@/assets/icons/chat.svg?react";

interface InputFieldProps {
  inputValue: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

function InputField({
  inputValue,
  onInputChange,
  onSubmit,
  onKeyDown,
}: InputFieldProps) {
  return (
    <Styled.InputContainer>
      <Styled.Input
        type="text"
        value={inputValue}
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        placeholder="내용을 입력하세요"
      />
      <Styled.SubmitButton onClick={onSubmit}>
        <ChatIcon width={16} height={16} fill="none" stroke="white" />
      </Styled.SubmitButton>
    </Styled.InputContainer>
  );
}

export default InputField;
