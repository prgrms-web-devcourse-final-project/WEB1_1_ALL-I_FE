import CategorySelect from "@/components/common/SelectList/Category/CategorySelect";
import ChatBubble from "@/components/feature/Chat/ChatBubble/ChatBubble";
import OptionSelect from "@/components/feature/Chat/ChatOption/ChatOption";
import * as Styled from "./ChatPage.style";
import InputField from "@/components/feature/Chat/InputField/InputField";
import { useChat } from "@/hooks/useChat";

const options = ["투두 작성", "일정 작성", "계획 추천"];

export default function ChatPage() {
  const {
    selectedOption,
    selectedCategoryId,
    inputValue,
    messages,
    isLoading,
    chatEndRef,
    handleOptionClick,
    handleCategoryChange,
    handleInputChange,
    handleKeyDown,
    handleSubmit,
    handleButtonClick,
  } = useChat();

  return (
    <Styled.Container>
      <Styled.ChatContainer>
        {messages.map((msg) => (
          <div key={msg.id}>
            <ChatBubble message={msg.message} isUser={msg.isUser} />
            {msg.buttons?.length ? (
              <Styled.ActionContainer>
                <Styled.ActionMessage>
                  {msg.actionMessage || "투두 또는 일정을 저장할까요?"}
                </Styled.ActionMessage>
                <Styled.ButtonContainer>
                  {msg.buttons.map((button) => (
                    <Styled.ChatButton
                      key={button}
                      onClick={() =>
                        handleButtonClick(button as "수락" | "거절", msg.token!)
                      }
                    >
                      {button}
                    </Styled.ChatButton>
                  ))}
                </Styled.ButtonContainer>
              </Styled.ActionContainer>
            ) : msg.actionMessage ? (
              <Styled.ActionContainer>
                <Styled.ActionMessage>{msg.actionMessage}</Styled.ActionMessage>
              </Styled.ActionContainer>
            ) : null}
          </div>
        ))}
        {isLoading && (
          <Styled.LoadingContainer>
            <Styled.LoadingMessage>
              <span>.</span>
              <span>.</span>
              <span>.</span>
            </Styled.LoadingMessage>
          </Styled.LoadingContainer>
        )}
        <div ref={chatEndRef} />
      </Styled.ChatContainer>
      <Styled.InputSection>
        <Styled.OptionsContainer>
          <OptionSelect
            options={options}
            onOptionClick={handleOptionClick}
            selectedOption={selectedOption}
          />
          <CategorySelect
            categoryId={selectedCategoryId}
            onCategoryChange={handleCategoryChange}
            menuPlacement="top"
          />
        </Styled.OptionsContainer>
        <InputField
          inputValue={inputValue}
          onInputChange={handleInputChange}
          onSubmit={handleSubmit}
          onKeyDown={handleKeyDown}
        />
      </Styled.InputSection>
    </Styled.Container>
  );
}
