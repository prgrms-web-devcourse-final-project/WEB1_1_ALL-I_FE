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

  // group 정보를 추출하는 함수
  const extractGroupInfo = (groupStr: string) => {
    const groupId = groupStr.match(/groupId=([^,)]+)/)?.[1] || "";
    const groupName = groupStr.match(/groupName=([^,)]+)/)?.[1] || "";
    const description = groupStr.match(/description=([^,)]+)/)?.[1] || "";
    return { groupId, groupName, description };
  };

  // sender와 receiver 정보를 추출하는 함수
  const extractUserInfo = (userStr: string) => {
    const userId = userStr.match(/userId=([^,)]+)/)?.[1] || "";
    const nickname = userStr.match(/nickname=([^,)]+)/)?.[1] || "";
    const email = userStr.match(/email=([^,)]+)/)?.[1] || "";
    return { userId, nickname, email };
  };

  // 각 객체 문자열 추출
  const groupMatch = str.match(/group=GroupListRes\([^)]+\)/)?.[0] || "";
  const senderMatch = str.match(/sender=UserDTO\([^)]+\)/)?.[0] || "";
  const receiverMatch = str.match(/receiver=UserDTO\([^)]+\)/)?.[0] || "";

  const group = extractGroupInfo(groupMatch);
  const sender = extractUserInfo(senderMatch);
  const receiver = extractUserInfo(receiverMatch);

  return {
    groupInvitationId: extractValue(str, "groupInvitationId"),
    status: extractValue(str, "status"),
    groupId: group.groupId,
    groupName: group.groupName,
    description: group.description,
    senderId: sender.userId,
    senderName: sender.nickname,
    senderEmail: sender.email,
    receiverId: receiver.userId,
    receiverName: receiver.nickname,
    receiverEmail: receiver.email,
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
