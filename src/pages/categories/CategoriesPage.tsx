import Button from "@/components/common/Button/Button";
import CategoryList from "@/components/feature/CategoryList/CategoryList";
import * as Styled from "./CategoriesPage.style";
import { Link } from "react-router-dom";
import { useGetPersonalCategories } from "@/hooks/queries";
import { Category } from "@/types/category.type";

function CategoriesPage() {
  const { data } = useGetPersonalCategories();

  const categories: Category[] = data?.data || [];

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
            children="카테고리 생성"
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
