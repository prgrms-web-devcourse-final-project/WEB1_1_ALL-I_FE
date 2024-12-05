import { Category } from "@/types";

const DEFAULT_COLOR = "#000000";

export const getCategoryColor = (
  categoryId: string,
  categories: Category[]
) => {
  return (
    categories.find((category) => category.categoryId === categoryId)?.color ||
    DEFAULT_COLOR
  );
};
