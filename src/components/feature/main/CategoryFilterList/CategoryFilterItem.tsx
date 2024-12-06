import ListBar from "@/components/common/ListBar/ListBar";
import Toggle from "@/components/common/Toggle/Toggle";
import { Category } from "@/types";

import * as Styled from "./CategoryFilterItem.style";
import { useCategoryStore } from "@/store/categoryStore";

interface CategoryFilterItemProps {
  category: Category & { isSelected: boolean };
}

function CategoryFilterItem({ category }: CategoryFilterItemProps) {
  const { toggleFilterCategory } = useCategoryStore();

  return (
    <Styled.CategoryFilterItemWrapper>
      <Styled.LeftWrapper>
        <ListBar color={category.color} />
        <Styled.TextWrapper>
          <Styled.CategoryText>{category.name}</Styled.CategoryText>
          <Styled.GroupText>
            {category.groupId && <span>그룹</span>}
          </Styled.GroupText>
        </Styled.TextWrapper>
      </Styled.LeftWrapper>
      <Styled.RightWrapper>
        <Toggle
          type="alarm"
          isOn={category.isSelected}
          onClick={() => toggleFilterCategory(category.categoryId)}
        />
      </Styled.RightWrapper>
    </Styled.CategoryFilterItemWrapper>
  );
}

export default CategoryFilterItem;
