// 공통으로 사용할 추출 함수
const extractValue = (str: string, key: string) => {
  const regex = new RegExp(`${key}=([^,\\)]+)`);
  const match = str.match(regex);
  return match ? match[1] : "";
};

// GroupEvent 파싱
export const parseGroupEventString = (str: string) => {
  if (!str.includes("GroupEventResDTO")) return null;

  return {
    groupEventId: extractValue(str, "groupEventId"),
    title: extractValue(str, "title"),
    startDate: extractValue(str, "startDate"),
    endDate: extractValue(str, "endDate"),
    startTime: extractValue(str, "startTime"),
    endTime: extractValue(str, "endTime"),
    groupId: extractValue(str, "groupId"),
    categoryId: extractValue(str, "categoryId"),
  };
};

// PersonalEvent 파싱
export const parsePersonalEventString = (str: string) => {
  if (!str.includes("PersonalEventResDTO")) return null;

  return {
    personalEventId: extractValue(str, "personalEventId"),
    title: extractValue(str, "title"),
    startDate: extractValue(str, "startDate"),
    endDate: extractValue(str, "endDate"),
    startTime: extractValue(str, "startTime"),
    endTime: extractValue(str, "endTime"),
    categoryId: extractValue(str, "categoryId"),
    userId: extractValue(str, "userId"),
  };
};

// GroupInvitation 파싱
export const parseGroupInvitationString = (str: string) => {
  if (!str.includes("GroupInvitationResDTO")) return null;

  return {
    groupInvitationId: extractValue(str, "groupInvitationId"),
    status: extractValue(str, "status"),
    groupId: extractValue(str, "groupId"),
    groupName: extractValue(str, "groupName"),
    receiverId: extractValue(str, "receiverId"),
    senderId: extractValue(str, "senderId"),
  };
};

// 통합 파서
export const parseNotificationDescription = (description: string) => {
  return {
    groupEvent: parseGroupEventString(description),
    personalEvent: parsePersonalEventString(description),
    groupInvitation: parseGroupInvitationString(description),
  };
};
