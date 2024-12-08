import * as Styled from "./ProfileSlider.style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NewButton from "@/components/common/NewButton/NewButton";
import { useNavigate } from "react-router-dom";

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
}

const ProfileSlider = ({
  profiles,
  groupId,
  groupName,
  color,
  description,
  members,
}: ProfileSliderProps) => {
  const navigate = useNavigate();

  if (profiles.length === 0) {
    return;
  }
  const slidesToShow = Math.min(profiles.length, 4);

  const settings = {
    dots: false,
    infinite: profiles.length > slidesToShow,
    speed: 500,
    slidesToShow,
    swipeToSlide: true,
    draggable: true,
  };

  return (
    <>
      <NewButton
        label="그룹 멤버"
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
      />
      <Styled.SliderContainer {...settings}>
        {profiles.map((profile) => (
          <div key={profile.id}>
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
