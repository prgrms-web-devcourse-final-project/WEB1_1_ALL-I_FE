import styled from "styled-components";

const ImgSize = {
  large: 120,
  medium: 30,
  small: 20,
};

export const StyledProfileImg = styled.img<{
  size: "large" | "medium" | "small";
}>`
  width: ${({ size }) => ImgSize[size]}px;
  height: ${({ size }) => ImgSize[size]}px;
  border-radius: 50%;
  object-fit: cover;
`;
