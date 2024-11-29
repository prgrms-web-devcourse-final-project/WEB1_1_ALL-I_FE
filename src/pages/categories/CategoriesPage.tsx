import Button from "@/components/common/Button/Button";
import CategoryList from "@/components/feature/CategoryList/CategoryList";
import * as Styled from "./CategoriesPage.style";
import { Link } from "react-router-dom";

function CategoriesPage() {
  // 예시 데이터 나중에 삭제할 예정
  const categories = [
    { categoryId: 1, color: "#ffe3e1", name: "개발" },
    { categoryId: 2, color: "#fbffe1", name: "영어" },
    { categoryId: 3, color: "#e1edff", name: "스터디" },
    { categoryId: 4, color: "#ebffe1", name: "약속" },
  ];

  return (
    <Styled.Container>
      <Styled.CategoryListContainer>
        {categories.map((category) => (
          <CategoryList
            key={category.categoryId}
            categoryId={category.categoryId}
            color={category.color}
            name={category.name}
          />
        ))}
      </Styled.CategoryListContainer>
      <Styled.ButtonWrapper>
        <Link to="/categories/new">
          <Button
            children="카테고리 만들기"
            buttonType="primaryLarge"
            type="button"
            isHoverEffect={true}
          />
        </Link>
      </Styled.ButtonWrapper>
    </Styled.Container>
  );
}

export default CategoriesPage;
