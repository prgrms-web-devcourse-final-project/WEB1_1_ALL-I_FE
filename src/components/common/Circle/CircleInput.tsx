import * as Styled from "./Circle.style";

// 카테고리 설정에서 보여주는 색상
// 선택 가능 하지만, radio와 color를 선택했을 때 어떤 것을 보낼지는 설정 필요
function CircleInput() {
  return (
    <Styled.ColorWrapper>
      <Styled.ColorContainer>
        <Styled.CircleBtn name="color" $color="var(--color-category1)" />
        <Styled.CircleBtn name="color" $color="var(--color-category2)" />
        <Styled.CircleBtn name="color" $color="var(--color-category3)" />
        <Styled.CircleBtn name="color" $color="var(--color-category4)" />
        <Styled.CircleBtn name="color" $color="var(--color-category5)" />
      </Styled.ColorContainer>
      <Styled.ColorContainer>
        <Styled.CircleBtn name="color" $color="var(--color-category6)" />
        <Styled.CircleBtn name="color" $color="var(--color-category7)" />
        <Styled.CircleBtn name="color" $color="var(--color-category8)" />
        <Styled.CircleBtn name="color" $color="var(--color-category9)" />
        <Styled.CirclePicker />
      </Styled.ColorContainer>
    </Styled.ColorWrapper>
  );
}

export default CircleInput;
