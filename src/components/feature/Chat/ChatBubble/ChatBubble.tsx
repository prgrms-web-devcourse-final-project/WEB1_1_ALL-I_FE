import * as Styled from "./ChatBubble.style";

interface ChatBubbleProps {
  message: string;
  isUser: boolean;
}

function ChatBubble({ message, isUser }: ChatBubbleProps) {
  return (
    <Styled.BubbleContainer $isUser={isUser}>
      <Styled.Bubble $isUser={isUser}>{message}</Styled.Bubble>
    </Styled.BubbleContainer>
  );
}

export default ChatBubble;
