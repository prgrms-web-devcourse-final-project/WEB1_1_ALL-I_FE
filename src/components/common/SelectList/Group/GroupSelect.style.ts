import styled from "styled-components";
import { CSSObjectWithLabel } from "react-select";

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Placeholder = styled.div`
  color: var(--color-gray-light);
  font-size: var(--font-size-medium);
`;

export const Option = styled.div<{
  $isFocused: boolean;
  $isSelected: boolean;
}>`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  background-color: ${(props) => (props.$isFocused ? "#F6F7F8" : "white")};
  color: ${(props) =>
    props.$isSelected ? "var(--color-primary-hover)" : "var(--color-black)"};
  font-weight: ${(props) =>
    props.$isSelected ? "var(  --font-weight-bold)" : "normal"};

  &:last-child {
    border-bottom: none;
  }
`;

export const customControl: (
  base: CSSObjectWithLabel,
  state: { isFocused: boolean }
) => CSSObjectWithLabel = (provided, state) => ({
  ...provided,
  border: "none",
  borderBottom: state.isFocused
    ? "1px solid var(--color-primary-hover)"
    : "1px solid var(--color-primary)",
  boxShadow: "none",
  minHeight: "40px",
  borderRadius: "0",
  transition: "0.3s ease",
  "&:hover": {
    borderBottom: "1px solid var(--color-primary-hover)",
  },
});

export const customContainer: (
  base: CSSObjectWithLabel
) => CSSObjectWithLabel = (provided) => ({
  ...provided,
  display: "flex",
  alignItems: "center",
  padding: "4px 8px",
  overflow: "hidden",
});

export const custommultiValue: (
  base: CSSObjectWithLabel
) => CSSObjectWithLabel = (provided) => ({
  ...provided,
  backgroundColor: "white",
  border: "1px solid var(--color-primary)",
  borderRadius: "24px",
  padding: "2px 4px",
  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
});

export const customMultiValueRemove: (
  base: CSSObjectWithLabel
) => CSSObjectWithLabel = (provided) => ({
  ...provided,
  cursor: "pointer",
  ":hover": {
    color: "var(--color-primary)",
  },
});
