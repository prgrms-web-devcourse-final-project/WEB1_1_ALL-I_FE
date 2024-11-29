import { useState, useEffect, useRef } from "react";
import Circle from "@/components/common/Circle/Circle";
import DotsIcon from "@/assets/icons/dots.svg?react";
import * as Styled from "./CategoryList.style";
import EditDeleteModal from "@/components/common/EditDeleteModal/EditDeleteModal";

import { useNavigate } from "react-router-dom";
import DeleteConfirm from "@/components/common/DeleteConfirm/DeleteConfirm";

interface CategoryListProps {
  categoryId: number;
  color: string;
  name: string;
}

function CategoryList({ categoryId, color, name }: CategoryListProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const navigate = useNavigate();

  // DotsIcon 클릭 시 모달 열기
  const handleDotsClick = () => {
    setIsModalOpen((prev) => !prev); // 현재 상태를 반전시켜 모달 열거나 닫기
    setIsVisible(true);
  };

  // 모달 외부 클릭 시 모달 닫기 함수
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node) &&
        iconRef.current &&
        !iconRef.current.contains(event.target as Node)
      ) {
        setIsModalOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // 수정 버튼 클릭 시 해당 카테고리 수정 페이지로 이동
  const handleEditClick = () => {
    navigate(`/categories/${categoryId}/edit`, {
      state: { categoryId, color, name },
    });
    handleCloseModal();
  };

  // 삭제 버튼 클릭 시 삭제 확인 모달
  const handleDeleteClick = () => {
    handleCloseModal();
    setIsDeleteConfirmOpen(true); // 삭제 확인 모달 열기
  };

  // 삭제 취소로 모달 닫기
  const handleCloseDeleteConfirm = () => {
    setIsDeleteConfirmOpen(false);
  };

  // 삭제 확인 모달에서 진짜 삭제
  const handleConfirmDelete = () => {
    setIsDeleteConfirmOpen(false);
    // 실제 삭제 로직 추가
  };

  // 모달 닫기 함수
  const handleCloseModal = () => {
    setIsVisible(false); // 애니메이션 시작
    setTimeout(() => {
      setIsModalOpen(false);
    }, 300); // fadeOut 지속 시간과 동일
  };

  return (
    <>
      <Styled.CategoryContainer>
        <Styled.LeftSection>
          <Circle color={color} />
          {name}
        </Styled.LeftSection>
        <Styled.RightIcon ref={iconRef} onClick={handleDotsClick}>
          <DotsIcon
            width={20}
            height={20}
            fill="currentColor"
            stroke="currentColor"
          />
        </Styled.RightIcon>
        {isModalOpen && (
          <div
            ref={modalRef}
            style={{ position: "absolute", top: "100%", right: 0, zIndex: 999 }}
          >
            <EditDeleteModal
              top={-10}
              left={-55}
              onClickEdit={handleEditClick}
              onClickDelete={handleDeleteClick}
              isVisible={isVisible}
            />
          </div>
        )}
        {isDeleteConfirmOpen && (
          <DeleteConfirm
            text="정말로 삭제하시겠습니까?"
            onClickCancel={handleCloseDeleteConfirm}
            onClickDelete={handleConfirmDelete}
          />
        )}
      </Styled.CategoryContainer>
    </>
  );
}

export default CategoryList;
