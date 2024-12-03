import { useState } from "react";

interface UseGroupEditProps {
  initialColor: string;
}

function useGroupEditForm({ initialColor }: UseGroupEditProps) {
  const [formData, setFormData] = useState(initialColor);

  const handleChange = (value: string) => {
    setFormData(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return {
    formData,
    handleChange,
    handleSubmit,
  };
}

export default useGroupEditForm;
