import * as Style from "./ProfileImg.style";

interface ProfileImgProps {
  size: "large" | "medium" | "small"; // 이미지 크기별 옵션
  src: string; // 프로필 이미지 소스
  alt?: string;
}

function ProfileImg({ size, src, alt = "Profile Image" }: ProfileImgProps) {
  return <Style.StyledProfileImg size={size} src={src} alt={alt} />;
}

export default ProfileImg;
