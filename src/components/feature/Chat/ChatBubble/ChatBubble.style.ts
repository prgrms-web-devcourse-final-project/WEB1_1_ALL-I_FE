import styled from "styled-components";

export const BubbleContainer = styled.div<{ $isUser: boolean }>`
  display: flex;
  justify-content: ${({ $isUser }) => ($isUser ? "flex-end" : "flex-start")};
  margin-bottom: 8px;
`;

export const Bubble = styled.div<{ $isUser: boolean }>`
  max-width: 90%;
  padding: 12px;
  white-space: pre-wrap;
  border-radius: 1rem;
  background-color: ${({ $isUser }) =>
    $isUser ? "var(--color-primary)" : "white"};
  border: 1px solid var(--color-primary);
  color: ${({ $isUser }) => ($isUser ? "white" : "black")};
`;
