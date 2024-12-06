import { useRef, useEffect } from "react";
import * as Styled from "./CategoryFilter.style";

interface CategoryFilterProps {
  onClose: () => void;
}

const CategoryFilter = ({ onClose }: CategoryFilterProps) => {
  const filterRef = useRef<HTMLDivElement>(null);

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
        <div>카테고리 필터 내용</div>
      </Styled.ModalContainer>
    </>
  );
};

export default CategoryFilter;
