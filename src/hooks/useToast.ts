import { toast } from "react-toastify";

type ToastType = "error" | "success" | "warning" | "info";

export const useToast = () => {
  const showToast = (message: string, type: ToastType) => {
    switch (type) {
      case "error":
        toast.error(message, {
          position: "top-right",
        });
        break;
      case "success":
        toast.success(message, {
          position: "top-right",
        });
        break;
      case "warning":
        toast.warn(message, {
          position: "top-right",
        });
        break;
      case "info":
        toast.info(message, {
          position: "top-right",
        });
        break;
    }
  };

  return { showToast };
};
