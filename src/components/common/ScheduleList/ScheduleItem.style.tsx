import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  padding: 0.8rem;
  border-bottom: 1px solid #97cdbd;
`;

export const Explan = styled.div`
  width: 75%;
  display: flex;
  gap: 0.6rem;
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
