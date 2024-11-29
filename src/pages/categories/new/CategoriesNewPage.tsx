import TextInput from "@/components/common/TextInput/TextInput";
import * as Styled from "./CategoriesEditPage.style";
import CircleInput from "@/components/common/Circle/CircleInput";
import Button from "@/components/common/Button/Button";
import useCategoryForm from "@/hooks/useCategoryForm";

function CategoriesNewPage() {
  const { formData, handleTextInputChange, handleColorChange, handleSubmit } =
    useCategoryForm();

  return (
    <Styled.Container onSubmit={handleSubmit}>
      <Styled.CategoryListContainer>
        <TextInput
          name="input"
          type="text"
          label="카테고리명"
          placeholder="카테고리명을 입력해주세요"
          required={true}
          maxLength={20}
          minLength={2}
          value={formData.categoryName}
          onChange={handleTextInputChange}
        />
        <CircleInput onChange={handleColorChange} />
      </Styled.CategoryListContainer>
      <Styled.ButtonWrapper>
        <Button
          children="카테고리 저장"
          buttonType="primaryLarge"
          type="submit"
          isHoverEffect={true}
        />
      </Styled.ButtonWrapper>
    </Styled.Container>
  );
}

export default CategoriesNewPage;
