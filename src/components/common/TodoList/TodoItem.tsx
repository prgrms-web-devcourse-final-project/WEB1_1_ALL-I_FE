import * as Styled from "./TodoItem.style";
import useTodoItem from "@/hooks/useTodoItem";
import TextDate from "../TextDate/TextDate";
import ListBar from "../ListBar/ListBar";

interface GroupMember {
  name: string; // 이름
  process: boolean; // todo 완료 상태
}
interface TodoItemProps {
  values: string[];
  color: string;
  todo: string;
  isComplete: boolean;
  isMember: GroupMember[];
}
function TodoItem({
  values = [],
  color = "#EBFFE1",
  todo = "기말고사기말고사기말고사기말기말고사기말고사기말고사기말",
  isComplete = false,
  isMember = [],
}: TodoItemProps) {
  const { isChecked, toggleChecked } = useTodoItem({ isComplete });

  return (
    <Styled.Wrapper>
      <Styled.ExplanContainer>
        {values.length > 0 ? <TextDate values={values} /> : ""}
        <ListBar color={color} />
        <Styled.TodoText isChecked={isChecked}>{todo}</Styled.TodoText>
      </Styled.ExplanContainer>
      <Styled.SetContainer>
        {isMember.length ? (
          <Styled.AssignWrapper>
            {isMember.map((people: GroupMember) => (
              <Styled.AssignPeople isMemDone={people.process}>
                {people.name}{" "}
              </Styled.AssignPeople>
            ))}
          </Styled.AssignWrapper>
        ) : (
          ""
        )}
        <Styled.CheckboxCustom
          type="checkbox"
          checked={isChecked}
          onChange={toggleChecked}
        />
        <span>(아이콘)</span>
      </Styled.SetContainer>
    </Styled.Wrapper>
  );
}

export default TodoItem;
