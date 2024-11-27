import * as Styled from "./Circle.style";
import useCircleInput from "@/hooks/useCircleInput";

function CircleInput() {
  const { selectedColor, handleChange } = useCircleInput();

  return (
    <Styled.ColorWrapper>
      <Styled.ColorContainer>
        {[
          "var(--color-category1)",
          "var(--color-category2)",
          "var(--color-category3)",
          "var(--color-category4)",
          "var(--color-category5)",
        ].map((color, index) => (
          <Styled.CircleBtn
            key={index}
            name="color"
            type="radio"
            value={color}
            $color={color}
            checked={
              selectedColor ===
              getComputedStyle(document.documentElement)
                .getPropertyValue(color.replace(/var\(|\)/g, "").trim())
                .trim()
            }
            onChange={(e) => handleChange(e.target.value)} // 상태 변경
          />
        ))}
      </Styled.ColorContainer>
      <Styled.ColorContainer>
        {[
          "var(--color-category6)",
          "var(--color-category7)",
          "var(--color-category8)",
          "var(--color-category9)",
        ].map((color, index) => (
          <Styled.CircleBtn
            key={index}
            name="color"
            type="radio"
            value={color}
            $color={color}
            checked={
              selectedColor ===
              getComputedStyle(document.documentElement)
                .getPropertyValue(color.replace(/var\(|\)/g, "").trim())
                .trim()
            }
            onChange={(e) => handleChange(e.target.value)} // 상태 변경
          />
        ))}
        <Styled.CirclePicker
          type="color"
          value={selectedColor} // 상태와 동기화
          onChange={(e) => handleChange(e.target.value)} // color picker 선택
        />
      </Styled.ColorContainer>
    </Styled.ColorWrapper>
  );
}

export default CircleInput;
