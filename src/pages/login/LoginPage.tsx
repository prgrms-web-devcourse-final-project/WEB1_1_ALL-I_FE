import * as Styled from "./LoginPage.style";
import { Link } from "react-router-dom";
import useLoginForm from "@/hooks/useLoginForm";
import TextInput from "@/components/common/TextInput/TextInput";
import Button from "@/components/common/Button/Button";
import LogoIcon from "@/assets/PlanWith_Logo.svg?react";

function LoginPage() {
  const { formData, handleChange, handleSubmit } = useLoginForm();

  return (
    <Styled.Wrapper>
      <Styled.LogoWrapper>
        <LogoIcon width="100%" height="100%" fill="var(--color-primary)" />
      </Styled.LogoWrapper>

      <Styled.Explan>계획과 일정을 AI와 함께 시작해보세요!</Styled.Explan>
      <Styled.Form onSubmit={handleSubmit}>
        <TextInput
          name="email"
          label=""
          placeholder="이메일"
          required
          type="email"
          value={formData.email}
          onChange={handleChange("email")}
        />
        <TextInput
          name="password"
          label=""
          placeholder="비밀번호"
          required
          type="password"
          value={formData.password}
          onChange={handleChange("password")}
        />
        <Button buttonType="primaryLarge" children="로그인" type="submit" />
      </Styled.Form>
      <Styled.UserWrapper>
        <span>아이디 찾기</span>
        <span>|</span>
        <span>비밀번호 찾기</span>
        <span>|</span>
        <Link to="/signup">회원가입</Link>
      </Styled.UserWrapper>
    </Styled.Wrapper>
  );
}

export default LoginPage;
