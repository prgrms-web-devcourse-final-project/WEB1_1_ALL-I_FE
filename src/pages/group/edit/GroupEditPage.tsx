import * as Styled from "./GroupEditPage.style";
import Button from "@/components/common/Button/Button";
import CircleInput from "@/components/common/Circle/CircleInput";
import MemberList from "@/components/feature/GroupNewPage/MemberList";
import TextInput from "@/components/common/TextInput/TextInput";
import useGroupEditForm from "@/hooks/useGroupEditForm";

interface GroupEditPageProps {
  groupName?: string;
  color?: string;
  description?: string;
}

// 수정 페이지에서는 color랑 description 만 변경됨.
// 데이터를 props를 통해 받게 되어있는데, useParam or useLocation에 맞춰 추후 수정 필요

// **가장 중요** -> 그룹 수정 api 연동해야 함
function GroupEditPage({
  groupName = "DBDB DEEP",
  color = "#c9c9c9",
  description = "설명설명~",
}: GroupEditPageProps) {
  const { formData, handleChange, handleSubmit } = useGroupEditForm({
    groupName,
    initialColor: color,
    description,
    groupId: "a85e5db7-593f-429a-bc80-385408f0b934",
  });

  return (
    <Styled.Wrapper onSubmit={handleSubmit}>
      <TextInput
        name="groupName"
        type="text"
        label="그룹명"
        placeholder="그룹명을 작성해주세요."
        required
        value={formData.groupName}
        onChange={handleChange("groupName")}
      />

      <TextInput
        name="description"
        type="text"
        label="그룹 설명"
        placeholder="그룹 설명을 작성해주세요."
        required
        value={formData.description}
        onChange={handleChange("description")}
      />
      <MemberList />
      <CircleInput
        defaultColor={formData.initialColor}
        onChange={(value) => handleChange("initialColor")(value)}
      />
      <Button children="저장" buttonType="primaryLarge" type="submit" />
    </Styled.Wrapper>
  );
}

export default GroupEditPage;
