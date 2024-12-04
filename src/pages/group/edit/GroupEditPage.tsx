import * as Styled from "./GroupEditPage.style";
import Button from "@/components/common/Button/Button";
import CircleInput from "@/components/common/Circle/CircleInput";
import MemberList from "@/components/feature/GroupNewPage/MemberList";
import useGroupEditForm from "@/hooks/useGroupEditForm";

interface GroupEditPageProps {
  groupName?: string;
  color?: string;
}

// 수정 페이지에서는 color랑 description 만 변경됨.
// 데이터를 props를 통해 받게 되어있는데, useParam or useLocation에 맞춰 추후 수정 필요
function GroupEditPage({
  groupName = "DBDB DEEP",
  color = "#c9c9c9",
}: GroupEditPageProps) {
  const { formData, handleChange, handleSubmit } = useGroupEditForm({
    initialColor: color,
  });

  return (
    <Styled.Wrapper onSubmit={handleSubmit}>
      <Styled.GroupComtainer>
        <p>그룹명</p>
        <Styled.GroupNameBorder>{groupName}</Styled.GroupNameBorder>
      </Styled.GroupComtainer>
      <MemberList />
      <CircleInput
        defaultColor={formData}
        onChange={(value) => handleChange(value)}
      />
      <Button children="저장" buttonType="primaryLarge" type="submit" />
    </Styled.Wrapper>
  );
}

export default GroupEditPage;
