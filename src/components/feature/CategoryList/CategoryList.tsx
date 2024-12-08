import Circle from "@/components/common/Circle/Circle";
import * as Styled from "./CategoryList.style";
import { useNavigate } from "react-router-dom";
import EditDeleteIcon from "../EditDeleteIcon/EditDeleteIcon";
import { Category } from "@/types";
import { useDeleteCategory } from "@/hooks/queries/useCategories";
import { useToast } from "@/hooks/useToast";

function CategoryList({ categoryId, color, name }: Category) {
  const navigate = useNavigate();
  const { mutate: deleteCategory } = useDeleteCategory();
  const { showToast } = useToast();

  // 수정 버튼 클릭
  const handleEditClick = () => {
    navigate(`/categories/${categoryId}/edit`, {
      state: { categoryId, color, name },
    });
  };

  // 삭제 버튼 클릭
  const handleDeleteClick = () => {
    deleteCategory(categoryId, {
      onSuccess: () => {
        showToast("카테고리가 삭제되었습니다.", "success");
      },
      onError: () => {
        showToast("카테고리 삭제에 실패했습니다.", "error");
      },
    });
  };

  return (
    <>
      <Styled.CategoryContainer>
        <Styled.LeftSection>
          <Circle color={color} />
          {name}
        </Styled.LeftSection>
        <EditDeleteIcon onEdit={handleEditClick} onDelete={handleDeleteClick} />
      </Styled.CategoryContainer>
    </>
  );
}

export default CategoryList;
