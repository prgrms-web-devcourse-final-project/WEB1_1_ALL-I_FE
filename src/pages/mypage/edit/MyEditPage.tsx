import * as Styled from "./MyEditPage.style";
import { useLocation } from "react-router-dom";
// import Profile from "@/assets/icons/profile.svg?react";
import TextInput from "@/components/common/TextInput/TextInput";
import Button from "@/components/common/Button/Button";
import useEditPage from "@/hooks/useEditPage";

function MyEditPage() {
  const location = useLocation();

  const defaultName = location.state || "";

  const {
    // inputRef,
    formData,
    // handleImageUpload,
    handleInputChange,
    handleSubmit,
    // imagePreview,
  } = useEditPage(defaultName);

  return (
    <Styled.Wrapper>
      <h1>내 정보 수정</h1>
      <Styled.Form onSubmit={handleSubmit}>
        {/* <Styled.ImgContainer htmlFor="profileImage">
          {imagePreview ? (
            <img src={imagePreview} alt="" />
          ) : (
            <Profile width={113} height={108} fill="var(--color-primary)" />
          )}
        </Styled.ImgContainer>

        <Styled.FileUpload
          type="file"
          id="profileImage"
          accept="image/*"
          ref={inputRef}
          onChange={handleImageUpload}
        /> */}

        <TextInput
          name="name"
          label="닉네임"
          type="text"
          value={formData.name}
          onChange={handleInputChange("name")}
          required={false}
        />
        <TextInput
          name="password"
          label="새 비밀번호"
          placeholder="새 비밀번호를 입력해주세요"
          type="password"
          value={formData.password}
          onChange={handleInputChange("password")}
          required={false}
        />
        <TextInput
          name="checkPwd"
          label="비밀번호 확인"
          placeholder="새 비밀번호를 확인해주세요"
          type="password"
          value={formData.checkPwd}
          onChange={handleInputChange("checkPwd")}
          required={false}
        />
        <Button children="저장" buttonType="primaryLarge" type="submit" />
      </Styled.Form>
    </Styled.Wrapper>
  );
}

export default MyEditPage;
