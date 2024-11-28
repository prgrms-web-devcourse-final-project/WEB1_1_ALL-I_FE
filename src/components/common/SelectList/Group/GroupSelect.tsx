import Select from "react-select";
import * as Style from "./GroupSelect.style";
import ProfileImg from "../../ProfileImg/ProfileImg";

export interface GroupMember {
  value: string; // 유저 id
  label: string; // 유저 nickname
  profileImage: string; // 유저 image_url
}

interface GroupProps {
  groupMembers: GroupMember[];
  selectedMembers: GroupMember[];
  onMemberChange: (selectedMembers: GroupMember[]) => void;
}

function GroupSelect({
  groupMembers,
  selectedMembers,
  onMemberChange,
}: GroupProps) {
  const Options = (props: {
    data: GroupMember;
    innerRef: React.Ref<HTMLDivElement>;
    innerProps: JSX.IntrinsicElements["div"];
    isFocused: boolean;
    isSelected: boolean;
  }) => {
    const { data, innerRef, innerProps, isFocused, isSelected } = props;
    return (
      <Style.Option
        ref={innerRef}
        {...innerProps}
        isFocused={isFocused}
        isSelected={isSelected}
      >
        <ProfileImg size="small" src={data.profileImage} alt={data.label} />
        {data.label}
      </Style.Option>
    );
  };

  return (
    <div>
      <Select
        options={groupMembers}
        isMulti
        value={selectedMembers}
        components={{
          Option: Options,
        }}
        styles={{
          control: Style.customControl,
          valueContainer: Style.customContainer,
          multiValue: Style.custommultiValue,
          multiValueRemove: Style.customMultiValueRemove,
        }}
        placeholder={<Style.Placeholder>그룹원을 선택하세요</Style.Placeholder>}
        onChange={(newValue) => onMemberChange(newValue as GroupMember[])}
        closeMenuOnSelect={false}
        hideSelectedOptions={false}
      />
    </div>
  );
}

export default GroupSelect;
