import useCategoryForm from "@/hooks/useCategoryForm";
import CategoryForm from "@/components/feature/CatergoryForm/CategoryForm";
import { useCreateCategory } from "@/hooks/queries/useCategories";
import { useNavigate } from "react-router-dom";
import { CreateCategoryRequest } from "@/types/apiRequest.type";
import { useToast } from "@/hooks/useToast";

function CategoriesNewPage() {
  const navigate = useNavigate();
  const { mutate: createCategoryMutation } = useCreateCategory();
  const { showToast } = useToast();
  const { formData, handleTextInputChange, handleColorChange, handleSubmit } =
    useCategoryForm();

  const createCategory = async (data: { name: string; color: string }) => {
    const categoryData: CreateCategoryRequest = {
      name: data.name,
      color: data.color,
    };

    createCategoryMutation(categoryData, {
      onSuccess: () => {
        showToast("카테고리가 생성되었습니다.", "success");
        navigate("/categories");
      },
      onError: (error) => {
        console.error("카테고리 생성 에러:", error);
        showToast("카테고리 생성에 실패했습니다.", "error");
      },
    });
  };

  return (
    <CategoryForm
      formData={formData}
      onTextInputChange={handleTextInputChange}
      onColorChange={handleColorChange}
      onSubmit={(e) => handleSubmit(e, createCategory)}
      buttonText="카테고리 저장"
    />
  );
}

export default CategoriesNewPage;
