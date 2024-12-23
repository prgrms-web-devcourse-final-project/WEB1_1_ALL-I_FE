import { useState } from "react";
import { useNavigate } from "react-router-dom";

import SettingIcon from "@/assets/icons/setting.svg?react";
import FilterIcon from "@/assets/icons/filtering.svg?react";
import CategoryFilter from "../CategoryFilter/CategoryFilter";

import * as Styled from "./CategoryButtons.style";

function MainCategoryButton() {
  const navigate = useNavigate();
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleFilterClick = () => {
    setIsFilterOpen(true);
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

      {isFilterOpen && (
        <CategoryFilter onClose={() => setIsFilterOpen(false)} />
      )}
    </Styled.Container>
  );
}

export default MainCategoryButton;
