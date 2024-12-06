import { useRef, useEffect } from "react";
import { useCategoryStore } from "@/store/categoryStore";
import CategoryFilterItem from "../CategoryFilterList/CategoryFilterItem";

import * as Styled from "./CategoryFilter.style";

interface CategoryFilterProps {
  onClose: () => void;
}

function CategoryFilter({ onClose }: CategoryFilterProps) {
  const filterRef = useRef<HTMLDivElement>(null);
  const categories = useCategoryStore((state) => state.categories);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <>
      <Styled.Overlay onClick={onClose} />
      <Styled.ModalContainer ref={filterRef}>
        {categories.map((category) => (
          <CategoryFilterItem key={category.categoryId} category={category} />
        ))}
      </Styled.ModalContainer>
    </>
  );
}

export default CategoryFilter;
