import { useState } from "react";
import { putGroup } from "@/apis/group/putGroup";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface UseGroupEditProps {
  groupName: string;
  initialColor: string;
  description: string;
  groupId: string;
}

function useGroupEditForm(initialState: UseGroupEditProps) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);

  const handleChange = (name: keyof UseGroupEditProps) => (value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await putGroup({ formData });
    if (res.code == 200) {
      // 토스트 메세지를 띄우지 않는 이유는 navigate시 변경되어 있기 때문
      navigate("/group/1");
    } else {
      toast.error("잠시후 다시 시도해주세요.");
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
  };
}

export default useGroupEditForm;
