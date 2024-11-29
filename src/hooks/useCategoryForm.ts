import { useState } from "react";

interface FormData {
  categoryName: string;
  categoryColor: string;
}

const defaultColor = "var(--color-category1)";

function useCategoryForm() {
  const [formData, setFormData] = useState<FormData>({
    categoryName: "",
    categoryColor: defaultColor,
  });

  // TextInput 변경 핸들러
  const handleTextInputChange = (value: string) => {
    setFormData((prev) => ({ ...prev, categoryName: value }));
  };

  // CircleInput 변경 핸들러
  const handleColorChange = (value: string) => {
    setFormData((prev) => ({ ...prev, categoryColor: value }));
  };

  // 폼 제출 핸들러
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // 기본 폼 제출 방지
    console.log(formData);
    // 나중에 API POST 코드 추가
  };

  return {
    formData,
    handleTextInputChange,
    handleColorChange,
    handleSubmit,
  };
}

export default useCategoryForm;
