import Select, { SingleValue } from "react-select";
import * as Style from "./CategorySelect.style";
import Circle from "../../Circle/Circle";
import { OptionType, CategoryProps } from "@/types/select.types";
import { useGetPersonalCategories } from "@/hooks/queries";
import { Category } from "@/types/category.type";

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
  categoryId,
  onCategoryChange,
  menuPlacement = "bottom", // 기본값: 아래로 출력
}: CategoryProps & { menuPlacement?: "top" | "bottom" }) {
  const { data, isLoading } = useGetPersonalCategories();
  const category = data?.data.find(
    (category: Category) => category.categoryId === categoryId
  );

  const handleCategory = (newValue: SingleValue<Category>) => {
    if (newValue) {
      onCategoryChange(newValue.categoryId);
    } else {
      onCategoryChange(null);
    }
  };

  return (
    <>
      {!isLoading && (
        <Style.Div>
          <Select<Category>
            value={category}
            onChange={handleCategory}
            options={data.data}
            placeholder={
              <Style.Placeholder>카테고리를 선택하세요</Style.Placeholder>
            }
            components={{
              SingleValue: CategoryValue,
              Option: OptionCategory,
              IndicatorSeparator: () => null,
            }}
            styles={{
              control: Style.customsControl,
              valueContainer: Style.customContainer,
              singleValue: Style.customValue,
            }}
            isMulti={false}
            menuPlacement={menuPlacement}
          />
        </Style.Div>
      )}
    </>
  );
}

export default CategorySelect;
