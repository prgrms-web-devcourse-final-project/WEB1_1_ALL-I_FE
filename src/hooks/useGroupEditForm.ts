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
