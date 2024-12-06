import useSignupForm from "@/hooks/useSignupForm";
import * as Styled from "./SignupPage.style";
import TextInput from "@/components/common/TextInput/TextInput";
import Button from "@/components/common/Button/Button";
// import Camera from "@/assets/icons/camera.svg?react";

function SignupPage() {
  const { formData, handleChange, handleSubmit } = useSignupForm();

  return (
    <Styled.Wrapper>
      <h1>회원 가입</h1>
      {/* 프로필 이미지 업로드
       ** 백엔드에서 s3 사용하는지 확인 필요
       ** 그 전에는 경로만 보낸다고 했었음
       ** 그거에 따라 이미지 업로드 보내는 방식이 달라짐 */}
      <Styled.Form onSubmit={handleSubmit}>
        {/* <div>
          <Styled.Label htmlFor="profileImage">

            <Styled.FilePreview>
              {formData.profileImagePreview ? (
                <Styled.Img
                  src={formData.profileImagePreview}
                  alt="미리보기"
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                  }}
                />
              ) : (
                <Camera width={"3.5rem"} height={"3.5rem"} stroke={"#fff"} />
              )}
            </Styled.FilePreview>
          </Styled.Label> */}
        {/* <Styled.InputFile
            type="file"
            id="profileImage"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div> */}

        <TextInput
          name="email"
          type="email"
          label="이메일"
          placeholder="이메일을 입력해주세요"
          required
          maxLength={30}
          minLength={4}
          value={formData.email}
          onChange={handleChange("email")}
        />
        <TextInput
          name="password"
          type="password"
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요"
          required
          maxLength={16}
          minLength={8}
          value={formData.password}
          onChange={handleChange("password")}
        />
        <TextInput
          name="checkPwd"
          type="password"
          label="비밀번호 확인"
          placeholder="비밀번호를 확인해주세요"
          required
          maxLength={16}
          minLength={8}
          value={formData.checkPwd}
          onChange={handleChange("checkPwd")}
        />
        <TextInput
          name="name"
          type="text"
          label="닉네임"
          placeholder="2~10자로 입력해주세요"
          required
          maxLength={10}
          minLength={2}
          value={formData.name}
          onChange={handleChange("name")}
        />
        <Button type="submit" children="가입" buttonType="primaryLarge" />
      </Styled.Form>
    </Styled.Wrapper>
  );
}

export default SignupPage;
