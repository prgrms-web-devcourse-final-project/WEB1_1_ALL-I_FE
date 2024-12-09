import { useState } from "react";
import { postGroup } from "@/apis/group/postGroup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

interface FormData {
  groupName: string;
  color: string;
  description: string;
}

function useGroupNewForm(initialState: FormData) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>(initialState);

  const handleChange = (name: keyof FormData) => (value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await postGroup({
      groupName: formData.groupName,
      description: formData.description,
      groupColor: formData.color,
    });

    // console.log(res);
    if (res.code == 201) {
      toast(res.message);
      navigate("/group/1"); // 생성 후 그룹 페이지 1로 이동
    } else {
      toast("그룹 생성에 실패했습니다.");
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
  };
}

export default useGroupNewForm;
