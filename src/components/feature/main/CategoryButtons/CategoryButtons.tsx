import { useNavigate } from "react-router-dom";

import SettingIcon from "@/assets/icons/setting.svg?react";
import FilterIcon from "@/assets/icons/filtering.svg?react";

import * as Styled from "./CategoryButtons.style";

function MainCategoryButton() {
  const navigate = useNavigate();

  const handleFilterClick = () => {
    console.log("filter");
  };
  const handleSettingClick = () => {
    navigate("/categories");
  };

  return (
    <Styled.Container>
      <Styled.Button onClick={handleFilterClick}>
        <FilterIcon
          width="100%"
          height="100%"
          fill="none"
          stroke="currentColor"
        />
      </Styled.Button>
      <Styled.Button onClick={handleSettingClick}>
        <SettingIcon
          width="100%"
          height="100%"
          fill="none"
          stroke="currentColor"
        />
      </Styled.Button>
    </Styled.Container>
  );
}

export default MainCategoryButton;
