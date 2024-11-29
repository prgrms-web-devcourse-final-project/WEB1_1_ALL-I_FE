import Button from "@/components/common/Button/Button";
import CategoryList from "@/components/feature/CategoryList/CategoryList";
import * as Styled from "./CategoriesPage.style";
import { Link } from "react-router-dom";

function CategoriesPage() {
  // 예시 데이터 나중에 삭제할 예정
  const categories = [
    { categoryId: 1, color: "red", name: "수학" },
    { categoryId: 2, color: "blue", name: "과학" },
    { categoryId: 3, color: "green", name: "영어" },
    { categoryId: 4, color: "yellow", name: "역사" },
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
