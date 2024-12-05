const DEFAULT_COLOR = "#000000";

export const getCategoryColor = (
  categoryId: string,
  categoryColorMap: Record<string, string>
) => {
  return categoryColorMap[categoryId] || DEFAULT_COLOR;
};
