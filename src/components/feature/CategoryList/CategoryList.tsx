import Circle from "@/components/common/Circle/Circle";
import * as Styled from "./CategoryList.style";
import { useNavigate } from "react-router-dom";
import EditDeleteIcon from "../EditDeleteIcon/EditDeleteIcon";

interface CategoryListProps {
  categoryId: number;
  color: string;
  name: string;
}

function CategoryList({ categoryId, color, name }: CategoryListProps) {
  const navigate = useNavigate();

  // 수정 버튼 클릭
  const handleEditClick = () => {
    navigate(`/categories/${categoryId}/edit`, {
      state: { categoryId, color, name },
    });
  };

  // 삭제 버튼 클릭
  const handleDeleteClick = () => {
    console.log(categoryId);
    // 실제 삭제 로직 추가
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
