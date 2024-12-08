export interface Category {
  categoryId: string;
  name: string;
  color: string;
  userId?: string;
  groupId?: string | null;
}

export interface GroupCategory {
  categoryId: string;
  name: string;
  color: string;
  leaderUserId: string;
  groupId: string;
}
