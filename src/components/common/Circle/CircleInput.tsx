import * as Styled from "./Circle.style";
import useCircleInput from "@/hooks/useCircleInput";

interface CircleInputProps {
  defaultColor: string; // 초기 색상
  onChange: (value: string) => void; // 선택된 색상을 상위 컴포넌트로 전달
}

function CircleInput({ defaultColor, onChange }: CircleInputProps) {
  const { selectedColor, handleChange } = useCircleInput(defaultColor);

  // 상태 변경 시 상위 컴포넌트로 전달
  const handleCircleChange = (value: string) => {
    handleChange(value); // 내부 상태 업데이트
    onChange(value); // 상위 컴포넌트로 전달
  };

  return (
    <Styled.ColorWrapper>
      <Styled.Label>색상</Styled.Label>
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
            onChange={(e) => handleCircleChange(e.target.value)} // 상태 변경
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
            onChange={(e) => handleCircleChange(e.target.value)} // 상태 변경
          />
        ))}
        <Styled.CirclePicker
          type="color"
          value={selectedColor} // 상태와 동기화
          onChange={(e) => handleCircleChange(e.target.value)} // color picker 선택
        />
      </Styled.ColorContainer>
    </Styled.ColorWrapper>
  );
}

export default CircleInput;
