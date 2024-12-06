import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 85vh;
`;

export const ChatContainer = styled.div`
  width: 100%;
  flex: 1;
  padding: 16px;
  margin-bottom: 1rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 8px;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;

export const InputSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const OptionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: flex-start;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
`;

export const ChatButton = styled.button<{ isAccept?: boolean }>`
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;

  background-color: ${({ isAccept }) =>
    isAccept ? "var(--color-primary)" : "var(--color-primary)"};
  color: white;

  &:hover {
    background-color: ${({ isAccept }) =>
      isAccept ? "var(--color-primary-hover)" : "var(--color-primary-hover)"};
  }

  &:active {
    background-color: ${({ isAccept }) => (isAccept ? "#1e7e34" : "#bd2130")};
    transform: scale(0.95);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px ${({ isAccept }) => (isAccept ? "#28a745" : "#dc3545")};
  }
`;

export const ActionContainer = styled.div`
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 16px;
  margin: 12px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ActionMessage = styled.p`
  font-size: 14px;
  color: #333;
  margin-bottom: 8px;
  text-align: center;
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;

export const LoadingMessage = styled.div`
  font-size: 50px;
  color: #888;
  display: flex;
  gap: 4px;

  span {
    animation: bounce 1.4s infinite;
  }

  span:nth-child(1) {
    animation-delay: 0s;
  }

  span:nth-child(2) {
    animation-delay: 0.2s;
  }

  span:nth-child(3) {
    animation-delay: 0.4s;
  }

  @keyframes bounce {
    0%,
    80%,
    100% {
      transform: scale(0);
    }
    40% {
      transform: scale(1);
    }
  }
`;
