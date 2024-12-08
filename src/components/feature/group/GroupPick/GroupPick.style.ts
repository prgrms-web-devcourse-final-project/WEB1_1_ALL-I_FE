import styled from "styled-components";
import { CSSObjectWithLabel } from "react-select";

export const Option = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  background-color: "white";
  z-index: 10px;
`;

export const CategoryValue = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  padding-left: 8px;
`;

export const Label = styled.span`
  font-size: var(--font-size-medium);
  color: var(--color-black);
  max-width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
  line-height: 1;
`;

export const Div = styled.div`
  marginbottom: "20px";
  width: 150px;
  position: relative;
  z-index: 2;
`;

export const IconWrapper = styled.div`
  cursor: pointer;
  opacity: 0.7;
  color: #ccc;
  &:hover {
    opacity: 1;
    color: var(--color-light-gray);
  }
`;

export const customsControl: (
  base: CSSObjectWithLabel,
  state: { isFocused: boolean }
) => CSSObjectWithLabel = (provided, state) => ({
  ...provided,
  border: state.isFocused
    ? "1px solid var(--color-primary-hover)"
    : "1px solid var(--color-primary)",
  boxShadow: "none",
  minHeight: "30px",
  borderRadius: "10px",
  transition: " 0.3s ease",
  "&:hover": {
    borderColor: "var(--color-primary-hover)",
  },
});

export const customContainer: (
  base: CSSObjectWithLabel
) => CSSObjectWithLabel = (provided) => ({
  ...provided,
  display: "flex",
  alignItems: "center",
  padding: "0 8px",
  overflow: "hidden",
});

export const customValue: (base: CSSObjectWithLabel) => CSSObjectWithLabel = (
  provided
) => ({
  ...provided,
  display: "flex",
  alignItems: "center",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

export const customMenu: (base: CSSObjectWithLabel) => CSSObjectWithLabel = (
  provided
) => ({
  ...provided,
  backgroundColor: "white",
  zIndex: 3,
  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
});

export const AddGroupButton = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 8px;
  cursor: pointer;
  color: var(--color-primary);
`;

export const AddGroupText = styled.span`
  font-size: var(--font-size-medium);
`;

export const Description = styled.div`
  font-size: var(--font-size-small);
  font-weight: var(--font-weight-bold);
  color: var(--color-gray-medium);
  margin-left: 4px;
  margin-top: 1rem;
`;
