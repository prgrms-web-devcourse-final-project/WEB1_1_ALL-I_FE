import SettingIcon from "@/assets/icons/setting.svg?react";
import FilterIcon from "@/assets/icons/filtering.svg?react";
import * as Styled from "./MainCategoryButton.style";
import { useNavigate } from "react-router-dom";

function MainCategoryButton() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/categories");
  };
  return (
    <Styled.Container>
      <Styled.Button onClick={handleClick}>
        <SettingIcon width={20} height={20} fill="none" stroke="currentColor" />
      </Styled.Button>
      <Styled.Button>
        <FilterIcon width={20} height={20} fill="none" stroke="currentColor" />
      </Styled.Button>
    </Styled.Container>
  );
}

export default MainCategoryButton;
