import useCategoryForm from "@/hooks/useCategoryForm";
import CategoryForm from "@/components/feature/CatergoryForm/CategoryForm";

function CategoriesNewPage() {
  const { formData, handleTextInputChange, handleColorChange, handleSubmit } =
    useCategoryForm();

  const createCategory = async (data: {
    categoryName: string;
    categoryColor: string;
  }) => {
    console.log(data);
    // POST
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
