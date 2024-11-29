import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  password: string;
  checkPwd: string;
  profileImage: File | null;
  profileImagePreview: string | null;
}

function useSignupForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    checkPwd: "",
    profileImage: null,
    profileImagePreview: null,
  });

  // input onChange 함수
  const handleChange = (fieldName: string) => (value: string) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  // 이미지 미리보기 및 이미지 데이터 (이미지 데이터는 추후 수정 필요)
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // e.target은 HTMLInputElement 타입
    if (file) {
      setFormData((prev) => ({
        ...prev,
        profileImage: file,
        profileImagePreview: URL.createObjectURL(file), // 미리보기 URL 생성
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.password !== formData.checkPwd) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    } else {
      // 여기에 formData를 백엔드로 보내는 로직 추가
      console.log("전송 Form Data:", formData);
    }
  };

  return {
    formData,
    handleChange,
    handleImageChange,
    handleSubmit,
  };
}

export default useSignupForm;
