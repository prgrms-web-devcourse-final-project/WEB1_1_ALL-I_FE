import { useState } from "react";

interface UseTodoItemProps {
  isComplete: boolean;
}

function useTodoItem({ isComplete }: UseTodoItemProps) {
  const [isChecked, setIsChecked] = useState(isComplete);

  const toggleChecked = () => {
    setIsChecked((prev: boolean) => !prev);
  };

  return { isChecked, toggleChecked };
}

export default useTodoItem;
