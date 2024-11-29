import Select, { SingleValue } from "react-select";
import * as Style from "./CategorySelect.style";
import Circle from "../../Circle/Circle";
import { OptionType, CategoryProps } from "@/types/select.types";

const CategoryValue = (props: { data: OptionType }) => {
  const { data } = props;
  return (
    <Style.CategoryValue>
      <Circle color={data.color} />
      <Style.Label>{data.name}</Style.Label>
    </Style.CategoryValue>
  );
};

const OptionCategory = (props: {
  data: OptionType;
  innerRef: React.Ref<HTMLDivElement>;
  innerProps: JSX.IntrinsicElements["div"];
  isFocused: boolean;
}) => {
  const { data, innerRef, innerProps, isFocused } = props;
  return (
    <Style.Option ref={innerRef} {...innerProps} $isFocused={isFocused}>
      <Circle color={data.color} />
      <Style.Label>{data.name}</Style.Label>
    </Style.Option>
  );
};

function CategorySelect({
  category,
  options,
  onCategoryChange,
}: CategoryProps) {
  const handleCategory = (newValue: SingleValue<OptionType>) => {
    if (newValue) {
      onCategoryChange(newValue);
    } else {
      onCategoryChange(null);
    }
  };

  return (
    <Style.Div>
      <Select
        value={category}
        onChange={handleCategory}
        options={options}
        placeholder={
          <Style.Placeholder>카테고리를 선택하세요</Style.Placeholder>
        }
        components={{
          SingleValue: CategoryValue,
          Option: OptionCategory,
        }}
        styles={{
          control: Style.customsControl,
          valueContainer: Style.customContainer,
          singleValue: Style.customValue,
        }}
        isMulti={false}
      />
    </Style.Div>
  );
}

export default CategorySelect;
