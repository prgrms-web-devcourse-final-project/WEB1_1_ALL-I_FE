import styled from "styled-components";

export const Container = styled.button<{
  $size?: "small" | "medium" | "large";
}>`
  color: var(--color-gray-medium);
  ${(props) => {
    switch (props.$size) {
      case "small":
        return `
          font-size: var(--font-size-micro);
        `;
      case "medium":
        return `
          font-size: var(--font-size-small);
        `;
      case "large":
        return `
          font-size: var(--font-size-medium);
        `;
      default:
        return `
          font-size: var(--font-size-micro);
        `;
    }
  }}
`;
