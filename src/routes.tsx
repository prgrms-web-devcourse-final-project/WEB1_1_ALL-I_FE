import { createBrowserRouter, Navigate } from "react-router-dom";

import RootLayout from "@/components/layout/RootLayout/RootLayout";

// Pages
import HomePage from "@/pages/home/HomePage";
import MainPage from "@/pages/main/MainPage";
import MyPage from "@/pages/mypage/MyPage";
import MyEditPage from "@/pages/mypage/edit/MyEditPage";
import ChatPage from "@/pages/chat/ChatPage";
import GroupNoData from "@/pages/group/noData/GroupNoData";
import GroupPage from "@/pages/group/GroupPage";
import GroupNewPage from "@/pages/group/new/GroupNewPage";
import GroupEditPage from "@/pages/group/edit/GroupEditPage";
import GroupTodoNewPage from "@/pages/group/todo/new/GroupTodoNewPage";
import GroupTodoEditPage from "@/pages/group/todo/edit/GroupTodoEditPage";
import GroupScheduleNewPage from "@/pages/group/schedule/new/GroupScheduleNewPage";
import GroupScheduleEditPage from "@/pages/group/schedule/edit/GroupScheduleEditPage";
import MainTodoNewPage from "@/pages/main/todo/new/MainTodoNewPage";
import MainTodoEditPage from "@/pages/main/todo/edit/MainTodoEditPage";
import MainScheduleNewPage from "@/pages/main/schedule/new/MainScheduleNewPage";
import MainScheduleEditPage from "@/pages/main/schedule/edit/MainScheduleEditPage";
import CategoriesPage from "@/pages/categories/CategoriesPage";
import CategoriesNewPage from "@/pages/categories/new/CategoriesNewPage";
import CategoriesEditPage from "@/pages/categories/edit/CategoriesEditPage";
import NotificationsPage from "@/pages/notifications/NotificationsPage";
import LoginPage from "@/pages/login/LoginPage";
import SignupPage from "@/pages/signup/SignupPage";
import ErrorPage from "@/pages/error/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/signup", element: <SignupPage /> },
      { path: "/login", element: <LoginPage /> },
      {
        path: "mypage",
        children: [
          { index: true, element: <MyPage /> },
          { path: "edit", element: <MyEditPage /> },
        ],
      },
      {
        path: "categories",
        children: [
          { index: true, element: <CategoriesPage /> },
          { path: "new", element: <CategoriesNewPage /> },
          { path: ":categoryId/edit", element: <CategoriesEditPage /> },
        ],
      },
      {
        path: "main",
        children: [
          { index: true, element: <MainPage /> },
          {
            path: "todo",
            children: [
              { index: true, element: <Navigate to="/" replace /> },
              { path: "new", element: <MainTodoNewPage /> },
              { path: ":todoId/edit", element: <MainTodoEditPage /> },
            ],
          },
          {
            path: "schedule",
            children: [
              { index: true, element: <Navigate to="/" replace /> },
              { path: "new", element: <MainScheduleNewPage /> },
              { path: ":scheduleId/edit", element: <MainScheduleEditPage /> },
            ],
          },
        ],
      },
      {
        path: "group",
        children: [
          // 이 부분 GroupPage에서
          // /group -> /group/:groupId 로 어떻게 전달해줄지 고민 및 수정 필요
          // group index: true를 없애고,
          // group 페이지로 이동 전에 어떤 아이디로 보낼지 결정해서 그 경로로 navigate 하는 방법도 있습니다.
          // /group 경로 - 그룹 없을 때 '새 그룹을 생성해 보세요' 페이지
          // /group으로 접근 시 속한 그룹이 있거나, 마지막 열람한 그룹 정보가 있으면 navigate
          // { index: true, element: <GroupNoData /> },
          { path: "", element: <GroupNoData /> },
          // group/schedule, group/todo 를 :groupId로 인식해서 생기는 버그 해결
          { path: "schedule/*", element: <Navigate to="/" replace /> },
          { path: "todo/*", element: <Navigate to="/" replace /> },
          { path: "new", element: <GroupNewPage /> },
          { path: ":groupId", element: <GroupPage /> },
          { path: ":groupId/edit", element: <GroupEditPage /> },
          {
            path: ":groupId/todo",
            children: [
              { index: true, element: <Navigate to="/" replace /> },
              { path: "new", element: <GroupTodoNewPage /> },
              { path: ":todoId/edit", element: <GroupTodoEditPage /> },
            ],
          },
          {
            path: ":groupId/schedule",
            children: [
              { index: true, element: <Navigate to="/" replace /> },
              { path: "new", element: <GroupScheduleNewPage /> },
              { path: ":scheduleId/edit", element: <GroupScheduleEditPage /> },
            ],
          },
        ],
      },
      { path: "notifications", element: <NotificationsPage /> },
      { path: "chat", element: <ChatPage /> },
    ],
  },
]);

export default router;
