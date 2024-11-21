import styled from "styled-components";

export const ButtonContainer = styled.button<{
  $variant: string;
  $disabled: boolean;
}>`
  padding: 1rem;
  border-radius: 0.5rem;
  cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.$disabled ? 0.5 : 1)};

  ${(props) => {
    switch (props.$variant) {
      case "primary":
        return `
          background-color: #3b82f6;
          width: 10rem;
          color: white;
        `;
      case "secondary":
        return `
          background-color: #6b7280;
          width: 8rem;
          color: white;
        `;
      case "danger":
        return `
          background-color: #ef4444;
          width: 8rem;
          color: white;
        `;
      default:
        return `
          background-color: #3b82f6;
          width: 20rem;
          color: white;
        `;
    }
  }}
`;

export const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
`;

export const Description = styled.p`
  margin-top: 0.5rem;
`;
