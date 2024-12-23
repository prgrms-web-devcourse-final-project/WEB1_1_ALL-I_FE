import { useState, useEffect, useRef } from "react";
import DotsIcon from "@/assets/icons/dots.svg?react";
import EditDeleteModal from "@/components/common/EditDeleteModal/EditDeleteModal";
import DeleteConfirm from "@/components/common/DeleteConfirm/DeleteConfirm";
import * as Styled from "./EditDelete.style";

interface EditDeleteIconProps {
  onEdit: () => void; // 수정 동작
  onDelete: () => void; // 삭제 동작
}

function EditDeleteIcon({ onEdit, onDelete }: EditDeleteIconProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false); // 삭제 확인 모달 상태
  const modalRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  // 아이콘 클릭 시 모달 열기/닫기
  const handleIconClick = () => {
    setIsModalOpen((prev) => !prev);
  };

  // 수정 버튼 클릭
  const handleEditClick = () => {
    onEdit(); // 상위 컴포넌트로 수정 동작 전달
    setIsModalOpen(false); // 수정 후 모달 닫기
  };

  // 삭제 버튼 클릭
  const handleDeleteClick = () => {
    setIsModalOpen(false); // 수정 모달 닫기
    setIsDeleteConfirmOpen(true); // 삭제 확인 모달 열기
  };

  // 삭제 확인 모달 닫기
  const handleCloseDeleteConfirm = () => {
    setIsDeleteConfirmOpen(false);
  };

  // 삭제 확인 모달에서 실제 삭제
  const handleConfirmDelete = () => {
    onDelete(); // 상위 컴포넌트로 삭제 동작 전달
    setIsDeleteConfirmOpen(false); // 삭제 확인 모달 닫기
  };

  // 모달 외부 클릭 시 모달 닫기
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

  return (
    <div style={{ position: "relative" }}>
      <Styled.RightIcon ref={iconRef} onClick={handleIconClick}>
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
            top={0}
            left={-55}
            onClickEdit={handleEditClick}
            onClickDelete={handleDeleteClick}
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
    </div>
  );
}

export default EditDeleteIcon;
