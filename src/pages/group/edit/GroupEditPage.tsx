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
function GroupEditPage({
  groupName = "DBDB DEEP",
  color = "#c9c9c9",
  description = "설명설명~",
}: GroupEditPageProps) {
  const { formData, handleChange, handleSubmit } = useGroupEditForm({
    initialColor: color,
    description,
  });

  return (
    <Styled.Wrapper onSubmit={handleSubmit}>
      <Styled.GroupComtainer>
        <p>그룹명</p>
        <Styled.GroupNameBorder>{groupName}</Styled.GroupNameBorder>
      </Styled.GroupComtainer>
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
