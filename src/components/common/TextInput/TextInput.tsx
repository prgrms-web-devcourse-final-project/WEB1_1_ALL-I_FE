import * as Style from "./TextInput.style";
import { useState } from "react";
import { TextInputProps } from "@/types/input.types";

function TextInput({
  name, // 입력 필드 이름
  type = "text", // 입력 필드 형식
  label, // 입력 필드 라벨
  placeholder, // 입력 필드 플레이스홀더
  required = true, // 필수 입력
  maxLength = 30, // 최대 입력 길이
  minLength = 2, // 최소 입력 길이
  value,
  onChange,
}: TextInputProps) {
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const handleInvalid = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.target instanceof HTMLInputElement) {
      setIsEmailValid(false);
      setIsPasswordValid(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    onChange(inputValue); // 상위 컴포넌트로 상태 전달

    if (type === "email") {
      // 이메일 유효성 검사
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setIsEmailValid(emailRegex.test(inputValue));
    }

    if (type === "password") {
      // 비밀번호 유효성 검사
      const passwordRegex = /^(?=.*\d)(?=.*[\W_]).{8,}$/;
      setIsPasswordValid(passwordRegex.test(inputValue));
    }
  };

  return (
    <div>
      {label && <Style.Label htmlFor={name}>{label}</Style.Label>}
      <Style.Input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        maxLength={maxLength}
        minLength={minLength}
        onChange={handleChange}
        onInvalid={handleInvalid}
        value={value}
      />
      {type === "email" && !isEmailValid && (
        <Style.ErrorMessage>
          올바른 이메일 형식을 입력해주세요.
        </Style.ErrorMessage>
      )}
      {type === "password" && !isPasswordValid && (
        <Style.ErrorMessage>
          비밀번호는 최소 8자 이상이어야 하며, 숫자와 특수문자가 포함되어야
          합니다.
        </Style.ErrorMessage>
      )}
    </div>
  );
}
export default TextInput;
