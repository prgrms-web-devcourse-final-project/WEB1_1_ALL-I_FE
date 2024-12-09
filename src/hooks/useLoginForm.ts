import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { postLogin } from "@/apis/user/postLogin";
import useAuthStore from "@/store/useAuthStore";

interface FormData {
  email: string;
  password: string;
}
function useLoginForm() {
  const navigate = useNavigate();
  const setAccessToken = useAuthStore((state) => state.setAccessToken);
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await postLogin({
      email: formData.email,
      password: formData.password,
    });
    // console.log(res);
    if (res.message == "ok") {
      // 로그인 성공
      setAccessToken(res.access_token); // access_token 저장
      navigate("/main");
    } else {
      toast("아이디나 비밀번호를 확인해주세요.");
    }
  };

  return { formData, handleChange, handleSubmit };
}

export default useLoginForm;
