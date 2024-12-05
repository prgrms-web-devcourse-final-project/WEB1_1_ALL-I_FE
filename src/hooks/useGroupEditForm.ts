import { useState } from "react";

interface UseGroupEditProps {
  initialColor: string;
  description: string;
}

function useGroupEditForm(initialState: UseGroupEditProps) {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (name: keyof UseGroupEditProps) => (value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit =
    (callback: (data: UseGroupEditProps) => void) =>
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

export default useGroupEditForm;
