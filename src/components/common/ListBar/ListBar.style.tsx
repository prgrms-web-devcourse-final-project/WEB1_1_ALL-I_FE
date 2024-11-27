import styled from "styled-components";

export const Bar = styled.div<{
  $color: string;
}>`
  width: 6px;
  height: 25px;
  border-radius: 3px;
  background-color: ${(props) => props.$color};
`;
