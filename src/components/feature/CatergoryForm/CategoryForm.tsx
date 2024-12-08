import TextInput from "@/components/common/TextInput/TextInput";
import CircleInput from "@/components/common/Circle/CircleInput";
import Button from "@/components/common/Button/Button";
import * as Styled from "./CategoryForm.style";

interface CategoryFormProps {
  formData: { name: string; color: string };
  onTextInputChange: (value: string) => void;
  onColorChange: (value: string) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  buttonText: string;
}

function CategoryForm({
  formData,
  onTextInputChange,
  onColorChange,
  onSubmit,
  buttonText,
}: CategoryFormProps) {
  return (
    <Styled.Container onSubmit={onSubmit}>
      <Styled.CategoryListContainer>
        <TextInput
          name="input"
          type="text"
          label="카테고리명"
          placeholder="카테고리명을 입력해주세요"
          required={true}
          value={formData.name} // 필드 이름 변경
          onChange={onTextInputChange}
        />
        <CircleInput
          onChange={onColorChange}
          defaultColor={formData.color} // 필드 이름 변경
        />
      </Styled.CategoryListContainer>
      <Styled.ButtonWrapper>
        <Button
          children={buttonText}
          buttonType="primaryLarge"
          type="submit"
          isHoverEffect={true}
        />
      </Styled.ButtonWrapper>
    </Styled.Container>
  );
}

export default CategoryForm;
