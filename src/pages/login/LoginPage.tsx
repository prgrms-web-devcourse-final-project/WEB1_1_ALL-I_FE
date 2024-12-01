import * as Styled from "./LoginPage.style";
import TextInput from "@/components/common/TextInput/TextInput";
import Button from "@/components/common/Button/Button";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <Styled.Wrapper>
      <Styled.Name>J - AI</Styled.Name>
      <Styled.Explan>계획과 일정을 AI와 함께 시작해보세요!</Styled.Explan>
      <Styled.Form>
        <TextInput
          name="email"
          label=""
          placeholder="이메일"
          required
          type="email"
          value=""
          onChange={(e) => console.log(e)}
        />
        <TextInput
          name="password"
          label=""
          placeholder="비밀번호"
          required
          type="password"
          value=""
          onChange={(e) => console.log(e)}
        />
        <Button buttonType="primaryLarge" children="로그인" type="button" />
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
