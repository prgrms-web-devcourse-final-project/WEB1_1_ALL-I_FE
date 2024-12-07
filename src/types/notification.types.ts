export interface UserDTO {
  userId: string;
  nickname: string;
  email: string;
}

export interface GroupListRes {
  groupId: string;
  groupName: string;
  description: string;
}

export interface PersonalEventResDTO {
  personalEventId: string;
  title: string;
  startDate: string;
  endDate: string;
  startTime: string | null;
  endTime: string | null;
  isAlarmed: boolean;
  createdAt: string;
  categoryId: string;
  userId: string;
}

export interface GroupEventResDTO {
  groupEventId: string;
  title: string;
  startDate: string;
  endDate: string;
  startTime: string | null;
  endTime: string | null;
  isAlarmed: boolean;
  createdAt: string;
  groupId: string;
  categoryId: string;
  assignedUserIds: string[];
}

export interface GroupInvitationResDTO {
  groupInvitationId: string;
  status: "PENDING" | "ACCEPTED" | "REJECTED";
  group: GroupListRes;
  receiver: UserDTO;
  sender: UserDTO;
}

export interface EventResDTO {
  personalEvent?: PersonalEventResDTO;
  groupEvent?: GroupEventResDTO;
  groupInvitation?: GroupInvitationResDTO;
}

export interface AlarmResDTO {
  alarmId: string;
  type: "EVENT";
  description: string;
  userId: string;
  isRead: boolean;
}
