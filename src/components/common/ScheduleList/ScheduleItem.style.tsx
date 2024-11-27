import styled from "styled-components";

export const Wrapper = styled.div`
  width: calc(100% - 2rem);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0.5rem;
  border-bottom: 1px solid #97cdbd;
`;

export const Explan = styled.div`
  width: 75%;
  display: flex;
  gap: 7px;
  align-items: center;
`;

export const ScheduleText = styled.p`
  width: 100%;
  font-size: 1rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
`;
