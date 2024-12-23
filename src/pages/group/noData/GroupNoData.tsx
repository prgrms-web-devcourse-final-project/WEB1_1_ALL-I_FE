import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as Styled from "./GroupNoData.style";
import Button from "@/components/common/Button/Button";
import { getGroup } from "@/apis/group/getGroup";

function GroupNoData() {
  const navigate = useNavigate();

  useEffect(() => {
    // 여기서 사용자의 그룹이 있는지 확인 (그룹 조회 api)
    // 그룹이 있다면 ->그룹 페이지로 렌더링
    getGroup()
      .then((res) => {
        // console.log(res);
        if (res.data.length > 0) {
          // navigate(`/group/${res.data[0].groupId}`);
          navigate(`/group/1`);
        }
        // /group/1 이 경로로 그룹 캘린더가 생길지도 모르겠음
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Styled.Wrapper>
      <Styled.Explan>
        <p>그룹이 없습니다.</p>
        <p>그룹을 만들고 함께 목표를 달성해보세요!</p>
      </Styled.Explan>
      <Button
        children="그룹 만들기"
        buttonType="primaryLarge"
        type="button"
        onClick={() => navigate("./new")}
      />
    </Styled.Wrapper>
  );
}

export default GroupNoData;
