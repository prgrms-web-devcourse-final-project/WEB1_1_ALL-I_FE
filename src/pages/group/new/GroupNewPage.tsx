import useGroupNewForm from "@/hooks/useGroupNewForm";
import * as Styled from "./GroupNewPage.style";
// import MemberList from "@/components/feature/GroupNewPage/MemberList";
import TextInput from "@/components/common/TextInput/TextInput";
import CircleInput from "@/components/common/Circle/CircleInput";
import Button from "@/components/common/Button/Button";

function GroupNewPage() {
  const { formData, handleChange, handleSubmit } = useGroupNewForm({
    groupName: "",
    color: "",
    description: "",
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
      {/* <MemberList /> */}
      <CircleInput
        defaultColor="#000"
        onChange={(value) => handleChange("color")(value)}
      />
      <Button children="저장" buttonType="primaryLarge" type="submit" />
    </Styled.Wrapper>
  );
}

export default GroupNewPage;
