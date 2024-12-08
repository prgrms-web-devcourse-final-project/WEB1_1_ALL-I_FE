import { useState } from "react";

interface FormData {
  name: string;
  color: string;
}

const defaultColor = "var(--color-category1)";

function useCategoryForm(defaultData?: FormData) {
  // 초기값 설정 (defaultData 없으면 기본값 사용)
  const [formData, setFormData] = useState<FormData>({
    name: defaultData?.name || "", // 빈 문자열로 초기화
    color: defaultData?.color || defaultColor, // 기본 색상 사용
  });

  // TextInput 변경 핸들러
  const handleTextInputChange = (value: string) => {
    setFormData((prev) => ({ ...prev, name: value }));
  };

  // CircleInput 변경 핸들러
  const handleColorChange = (value: string) => {
    setFormData((prev) => ({ ...prev, color: value }));
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
