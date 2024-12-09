import * as Styled from "./GroupEditPage.style";
import { useLocation } from "react-router-dom";
import Button from "@/components/common/Button/Button";
import CircleInput from "@/components/common/Circle/CircleInput";
import MemberList from "@/components/feature/GroupNewPage/MemberList";
import TextInput from "@/components/common/TextInput/TextInput";
import useGroupEditForm from "@/hooks/useGroupEditForm";

// 수정 페이지에서는 color랑 description 만 변경됨.
// 데이터를 props를 통해 받게 되어있는데, useParam or useLocation에 맞춰 추후 수정 필요

// **가장 중요** -> 그룹 수정 api 연동해야 함
function GroupEditPage() {
  const location = useLocation();
  // console.log(location.state); //
  const { formData, handleChange, handleSubmit } = useGroupEditForm({
    groupName: location.state.groupName || "",
    initialColor: location.state.color || "#FFFFFF",
    description: location.state.description || "",
    groupId: location.state.groupId,
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
      <MemberList groupId={location.state.groupId} />
      <CircleInput
        defaultColor={formData.initialColor}
        onChange={(value) => handleChange("initialColor")(value)}
      />
      <Button children="저장" buttonType="primaryLarge" type="submit" />
    </Styled.Wrapper>
  );
}

export default GroupEditPage;
