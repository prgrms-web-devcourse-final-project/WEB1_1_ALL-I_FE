import { create } from "zustand";
import { ParsedAlarm, AlarmResDTO } from "@/types/notification.types";
import { parseNotificationDescription } from "@/utils/alarm";

interface AlarmState {
  notifications: ParsedAlarm[];
  unreadCount: number;
  addNotification: (notification: AlarmResDTO) => void;
  setNotifications: (notifications: ParsedAlarm[]) => void;
  updateUnreadCount: (count: number) => void;
  removeNotification: (index: number) => void;
}

export const useAlarmStore = create<AlarmState>((set) => ({
  notifications: [],
  unreadCount: 0,
  addNotification: (notification) => {
    const parsed = parseNotificationDescription(notification.description);
    const newNotification = {
      ...notification,
      ...parsed,
    };
    set((state) => ({
      notifications: [newNotification, ...state.notifications],
    }));
  },
  setNotifications: (notifications) => set({ notifications }),
  updateUnreadCount: (count) => set({ unreadCount: count }),
  removeNotification: (index) =>
    set((state) => ({
      notifications: state.notifications.filter((_, i) => i !== index),
    })),
}));
