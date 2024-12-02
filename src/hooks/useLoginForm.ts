import { useState } from "react";

interface FormData {
  email: string;
  password: string;
}
function useLoginForm() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const handleChange = (name: string) => (value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 버튼 클릭시 입력 값 확인
    console.log(formData);
  };

  return { formData, handleChange, handleSubmit };
}

export default useLoginForm;
