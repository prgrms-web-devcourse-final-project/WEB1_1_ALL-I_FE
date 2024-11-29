import { useState } from "react";

interface FormData {
  categoryName: string;
  categoryColor: string;
}

const defaultColor = "var(--color-category1)";

function useCategoryForm(defaultData?: FormData) {
  // 초기값 설정 (defaultData 없으면 기본값 사용)
  const [formData, setFormData] = useState<FormData>({
    categoryName: defaultData?.categoryName || "",
    categoryColor: defaultData?.categoryColor || defaultColor,
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
  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>,
    onSave: (data: FormData) => void
  ) => {
    event.preventDefault();
    onSave(formData); // 상위 컴포넌트로 데이터 전달
  };

  return {
    formData,
    handleTextInputChange,
    handleColorChange,
    handleSubmit,
  };
}

export default useCategoryForm;
