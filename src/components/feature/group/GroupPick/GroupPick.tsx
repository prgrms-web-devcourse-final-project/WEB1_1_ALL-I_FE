import Select, { SingleValue } from "react-select";
import * as Style from "./GroupPick.style";
import { GroupOption } from "@/types/select.types";
import TrashIcon from "@/assets/icons/trashcan.svg?react";
import { useDeleteGroup } from "@/hooks/queries/useGroups";
import { useState } from "react";
import DeleteConfirm from "@/components/common/DeleteConfirm/DeleteConfirm";

// 그룹 선택 컴포넌트에서 사용할 프롭스 타입 정의
interface GroupPickProps {
  selectedGroup: GroupOption | null; // 현재 선택된 그룹
  options: GroupOption[]; // 선택 가능한 그룹 옵션 리스트
  onGroupChange: (group: GroupOption | null) => void; // 그룹 변경 핸들러
}

// 선택된 값 커스터마이징
const GroupValue = (props: { data: GroupOption }) => {
  const { data } = props;
  return (
    <Style.CategoryValue>
      <Style.Label>{data.groupName}</Style.Label>
    </Style.CategoryValue>
  );
};

// 옵션 렌더링 커스터마이징
const OptionGroup = (props: {
  data: GroupOption;
  innerRef: React.Ref<HTMLDivElement>;
  innerProps: JSX.IntrinsicElements["div"];
  isFocused: boolean;
}) => {
  const { data, innerRef, innerProps, isFocused } = props;
  const { mutate: quitGroup } = useDeleteGroup();
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  // 그룹 삭제
  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation(); // 이벤트 버블링 방지
    setShowDeleteConfirm(true);
  };

  const handleConfirmDelete = () => {
    quitGroup(data.groupId);
    setShowDeleteConfirm(false);
  };

  return (
    <>
      <Style.Option ref={innerRef} {...innerProps} $isFocused={isFocused}>
        <Style.Label>{data.groupName}</Style.Label>
        <Style.IconWrapper onClick={handleDelete}>
          <TrashIcon
            width="16px"
            height="16px"
            fill="none"
            stroke="currentColor"
          />
        </Style.IconWrapper>
      </Style.Option>
      {showDeleteConfirm && (
        <DeleteConfirm
          text="정말 이 그룹을 탈퇴하시겠습니까?"
          onClickCancel={() => setShowDeleteConfirm(false)}
          onClickDelete={handleConfirmDelete}
        />
      )}
    </>
  );
};

function GroupPick({ selectedGroup, options, onGroupChange }: GroupPickProps) {
  const handleGroupChange = (newValue: SingleValue<GroupOption>) => {
    if (newValue) {
      onGroupChange(newValue);
    } else {
      onGroupChange(null);
    }
  };

  return (
    <Style.Div>
      <Select
        value={selectedGroup}
        onChange={handleGroupChange}
        options={options}
        components={{
          SingleValue: GroupValue,
          Option: OptionGroup,
        }}
        styles={{
          control: Style.customsControl,
          valueContainer: Style.customContainer,
          singleValue: Style.customValue,
          menu: Style.customMenu,
        }}
        isMulti={false}
      />
    </Style.Div>
  );
}

export default GroupPick;
