import * as Styled from "./ProfileSlider.style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import SettingIcon from "@/assets/icons/setting.svg?react";
import { useGetMyInfo } from "@/hooks/queries/useUser";

interface Profile {
  id: string;
  name: string;
}

interface ProfileSliderProps {
  profiles: Profile[];
  groupId: string;
  groupName: string;
  color: string;
  description: string;
  members: Profile[];
  leaderUserId: string;
  onMemberSelect: (userId: string | null) => void;
}

const ProfileSlider = ({
  profiles,
  groupId,
  groupName,
  color,
  description,
  members,
  leaderUserId,
  onMemberSelect,
}: ProfileSliderProps) => {
  const navigate = useNavigate();
  const { data: myInfo } = useGetMyInfo();

  if (profiles.length === 0) {
    return;
  }

  const settings = {
    dots: false,
    infinite: false,
    speed: 700,
    slidesToScroll: 1,
    swipeToSlide: true,
    draggable: true,
    variableWidth: true,
    centerMode: false,
  };

  return (
    <>
      <Styled.HeaderContainer>
        <Styled.Text>그룹 멤버</Styled.Text>
        {myInfo?.userId === leaderUserId && (
          <Styled.IconWrapper
            onClick={() =>
              navigate(`/group/${groupId}/edit`, {
                state: {
                  groupId,
                  groupName,
                  color,
                  description,
                  members,
                },
              })
            }
          >
            <SettingIcon
              width="100%"
              height="100%"
              fill="none"
              stroke="currentColor"
            />
          </Styled.IconWrapper>
        )}
      </Styled.HeaderContainer>
      <Styled.SliderContainer {...settings}>
        {profiles.map((profile) => (
          <div key={profile.id} onClick={() => onMemberSelect(profile.id)}>
            <Styled.Div>
              <Styled.ProfileCircle>
                {profile.name.charAt(0)}
              </Styled.ProfileCircle>
            </Styled.Div>
            <Styled.ProfileName>{profile.name}</Styled.ProfileName>
          </div>
        ))}
      </Styled.SliderContainer>
    </>
  );
};

export default ProfileSlider;
