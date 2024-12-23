import styled from "styled-components";

export const ScheduleItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 0.3rem;
  margin-bottom: 0.7rem;
  border-bottom: 1px solid var(--color-primary);
`;

export const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

export const RightWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const ScheduleTitle = styled.div`
  font-size: var(--font-size-medium);
  font-weight: var(--font-weight-regular);
`;

export const AssignWrapper = styled.div`
  display: flex;
  gap: 0.3rem;
`;

export const AssignPeople = styled.span`
  font-size: var(--font-size-small);
  color: var(--color-gray);
`;
