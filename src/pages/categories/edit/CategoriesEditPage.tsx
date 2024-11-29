import useCategoryForm from "@/hooks/useCategoryForm";
import CategoryForm from "@/components/feature/CatergoryForm/CategoryForm";
import { useLocation } from "react-router-dom";

function CategoriesEditPage() {
  const location = useLocation();
  const { state } = location as {
    state: { categoryId: number; color: string; name: string };
  };
  const { formData, handleTextInputChange, handleColorChange, handleSubmit } =
    useCategoryForm({
      categoryName: state.name,
      categoryColor: state.color,
    });

  const updateCategory = async (data: {
    categoryName: string;
    categoryColor: string;
  }) => {
    console.log(data);
    // PATCH
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
