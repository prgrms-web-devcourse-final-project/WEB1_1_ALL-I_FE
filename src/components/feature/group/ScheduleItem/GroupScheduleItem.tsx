import * as Styled from "./GroupScheduleItem.style";

import EditDeleteIcon from "@/components/feature/EditDeleteIcon/EditDeleteIcon";
import { useNavigate } from "react-router-dom";
import { FormatDate, FormatTime } from "@/utils/format";
import TextDate from "@/components/common/TextDate/TextDate";
import ListBar from "@/components/common/ListBar/ListBar";
import { useEffect, useState, useCallback } from "react";
import { getRequest } from "@/apis/apiService";

interface ScheduleItemProps {
  groupEventId: string; // 일정 ID
  groupId: string; // 그룹아이디
  title: string; // 일정 제목
  startDate: string; // 시작 날짜
  endDate: string; // 종료 날짜
  startTime?: string | null; // 시작 시간
  endTime?: string | null; // 종료 시간
  isAlarmed: boolean; // 알림 여부
  categoryId: string; // 카테고리 ID
  color: string; // 카테고리 색상
  assignedUserIds: string[];
  onDelete: (id: string) => void; // 삭제 핸들러
}

function GroupScheduleItem({
  groupEventId,
  groupId,
  title,
  startDate,
  endDate,
  startTime,
  endTime,
  isAlarmed,
  categoryId,
  assignedUserIds,
  color,
  onDelete,
}: ScheduleItemProps) {
  const navigate = useNavigate();
  const [userNames, setUserNames] = useState<Record<string, string>>({});

  // 사용자 이름 데이터를 가져오는 함수
  const fetchUserNames = useCallback(async () => {
    try {
      const promises = assignedUserIds.map(async (userId) => {
        const url = `/user/${userId}`;
        const response = await getRequest(url);
        const userName = response?.data;
        return { userId, userName };
      });

      const results = await Promise.all(promises);
      const userNameMap = results.reduce(
        (acc, { userId, userName }) => {
          acc[userId] = userName || "Unknown User";
          return acc;
        },
        {} as Record<string, string>
      );

      setUserNames(userNameMap);
    } catch (error) {
      console.error("사용자 이름 데이터를 가져오는 중 오류 발생:", error);
    }
  }, [assignedUserIds]);

  useEffect(() => {
    fetchUserNames();
  }, [fetchUserNames]);

  // 수정 버튼 클릭
  const handleEditClick = () => {
    navigate(`/group/${groupId}/schedule/${groupEventId}/edit`, {
      state: {
        groupEventId,
        groupId,
        title,
        startDate,
        endDate,
        startTime,
        endTime,
        isAlarmed,
        categoryId,
        assignedUserIds,
      },
    });
  };

  // values 설정 (날짜 또는 시간)
  const values =
    startDate === endDate && startTime && endTime
      ? [FormatTime(startTime), FormatTime(endTime)]
      : [FormatDate(startDate), FormatDate(endDate)];

  return (
    <Styled.ScheduleItemWrapper>
      <Styled.LeftWrapper>
        <ListBar color={color} />
        <TextDate values={values} />
        <Styled.ScheduleTitle>{title}</Styled.ScheduleTitle>
      </Styled.LeftWrapper>
      <Styled.RightWrapper>
        <Styled.AssignWrapper>
          {assignedUserIds.map((userId) => (
            <Styled.AssignPeople key={userId}>
              {userNames[userId] || "불러오는 중..."}
            </Styled.AssignPeople>
          ))}
        </Styled.AssignWrapper>
        <EditDeleteIcon
          onEdit={handleEditClick}
          onDelete={() => onDelete(groupEventId)}
        />
      </Styled.RightWrapper>
    </Styled.ScheduleItemWrapper>
  );
}

export default GroupScheduleItem;
