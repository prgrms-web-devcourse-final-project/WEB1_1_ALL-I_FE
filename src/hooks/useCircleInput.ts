import { useState } from "react";

function useCircleInput(defaultColor: string) {
  const [selectedColor, setSelectedColor] = useState<string>(
    defaultColor.startsWith("var")
      ? getComputedStyle(document.documentElement)
          .getPropertyValue(defaultColor.replace(/var\(|\)/g, "").trim())
          .trim()
      : defaultColor
  );

  // 현재는 값을 확인하기 위해 onChange로 해두었는데,
  // submit으로 변경하거나 useState를 추가하면 될 것 같습니다.
  const handleChange = (value: string) => {
    if (value.startsWith("var")) {
      const computedStyle = getComputedStyle(document.documentElement);
      const colorValue = computedStyle
        .getPropertyValue(value.replace(/var\(|\)/g, "").trim())
        .trim();
      setSelectedColor(colorValue); // CSS 변수 -> HEX 변환
    } else {
      setSelectedColor(value); // color picker 값 그대로 사용
    }
    // console.log(`Selected Color: ${selectedColor}`);
  };

  return { selectedColor, handleChange };
}

export default useCircleInput;
