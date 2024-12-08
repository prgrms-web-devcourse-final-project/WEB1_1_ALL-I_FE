import useCategoryForm from "@/hooks/useCategoryForm";
import CategoryForm from "@/components/feature/CatergoryForm/CategoryForm";
import { useLocation, useNavigate } from "react-router-dom";
import { useEditCategory } from "@/hooks/queries";

function CategoriesEditPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location as {
    state: { categoryId: string; color: string; name: string };
  };
  const { mutate: editCategory } = useEditCategory();

  const { formData, handleTextInputChange, handleColorChange, handleSubmit } =
    useCategoryForm({
      name: state.name,
      color: state.color,
    });

  // 카테고리 수정 핸들러
  const updateCategory = async (data: { name?: string; color?: string }) => {
    const payload = {
      categoryId: state.categoryId,
      ...data,
    };

    editCategory(payload, {
      onSuccess: () => {
        navigate(-1);
      },
    });
  };

  return (
    <CategoryForm
      formData={formData}
      onTextInputChange={handleTextInputChange}
      onColorChange={handleColorChange}
      onSubmit={(e) => handleSubmit(e, updateCategory)}
      buttonText="카테고리 수정"
    />
  );
}

export default CategoriesEditPage;
