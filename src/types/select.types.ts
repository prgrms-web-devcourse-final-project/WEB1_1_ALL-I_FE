// 그룹원 선택 드롭다운 interface
export interface GroupMember {
  groupSettingId: string;
  userId: string;
  nickname: string;
  role: string;
  // value: string; // 유저 id
  // label: string; // 유저 nickname
  // profileImage: string; // 유저 image_url
}

// 선택한 팀원이 변경될 때마다 props 주고받기
export interface GroupProps {
  groupId: string; // 그룹원 유저 데이터
  selectedMembersId: string[]; // 선택된 그룹원 유저 데이터
  onMemberChange: (selectedMembersId: string[]) => void;
}

// 카테고리 선택 드롭다운 interface
export interface OptionType {
  categoryId: string;
  name: string; // 카테고리 이름 name
  color: string; // 카테고리 색상 color
}

// 선택한 카테고리 바뀔 때마다 props
export interface CategoryProps {
  categoryId: string | null; // 선택한 카테고리 데이터
  // options: OptionType[]; // 카테고리 데이터
  onCategoryChange: (selectedCategory: string | null) => void;
}

// 그룹 리스트 선택 옵션
export interface GroupOption {
  groupId: string; // 그룹 ID
  groupName: string; // 그룹 이름
  description?: string; // 그룹 설명
}
