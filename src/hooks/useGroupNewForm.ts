import { useState } from "react";

interface FormData {
  groupName: string;
  color: string;
  description: string;
}

function useGroupNewForm(initialState: FormData) {
  const [formData, setFormData] = useState<FormData>(initialState);

  const handleChange = (name: keyof FormData) => (value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit =
    (callback: (data: FormData) => void) =>
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      callback(formData); // formData를 전달해 콜백 실행
    };

  return {
    formData,
    handleChange,
    handleSubmit,
  };
}

export default useGroupNewForm;
