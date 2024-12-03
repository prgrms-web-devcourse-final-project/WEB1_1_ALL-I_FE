// 날짜
export const FormatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return `${date.getMonth() + 1}월 ${date.getDate()}일`;
};

// 시간
export const FormatTime = (timeString: string | null): string => {
  if (!timeString) return "-";
  return `${timeString.slice(0, 2)}시 ${timeString.slice(3, 5)}분`;
};
