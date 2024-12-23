import { useState, useRef } from "react";

interface FormData {
  name: string;
  password: string;
  checkPwd: string;
}

function useEditPage(defaultName = "") {
  const inputRef = useRef<HTMLInputElement | null>(null);

  // 정보 수정 데이터들
  const [formData, setFormData] = useState<FormData>({
    name: defaultName,
    password: "",
    checkPwd: "",
  });

  // 이미지 데이터들
  const [imagePreview, setImagePreview] = useState<string | null>(null); // 미리보기 URL 저장
  const [imageFile, setImageFile] = useState<File | null>(null); // 업로드할 파일 저장

  // 파일 선택 핸들러
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Blob을 이용해 미리보기 URL 생성
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
      setImageFile(file); // 업로드할 파일 저장
    }
  };

  const handleInputChange = (name: string) => (value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.password !== formData.checkPwd) {
      alert("비밀번호가 일치하지 않습니다.");
    } else if (imageFile) {
      const formDatas = new FormData();
      formDatas.append("image", imageFile);
      formDatas.append("name", formData.name);
      formDatas.append("password", formData.password);

      console.log(formDatas); // 서버로 전송될 form 데이터 확인용
    }
  };

  return {
    inputRef,
    formData,
    setFormData,
    imagePreview,
    handleImageUpload,
    handleInputChange,
    handleSubmit,
  };
}

export default useEditPage;
