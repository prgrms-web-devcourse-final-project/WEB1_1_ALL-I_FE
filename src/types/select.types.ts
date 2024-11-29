// 그룹원 선택 드롭다운 interface
export interface GroupMember {
  value: string; // 유저 id
  label: string; // 유저 nickname
  profileImage: string; // 유저 image_url
}

// 선택한 팀원이 변경될 때마다 props 주고받기
export interface GroupProps {
  groupMembers: GroupMember[]; // 그룹원 유저 데이터
  selectedMembers: GroupMember[]; // 선택된 그룹원 유저 데이터
  onMemberChange: (selectedMembers: GroupMember[]) => void;
}

// 카테고리 선택 드롭다운 interface
export interface OptionType {
  name: string; // 카테고리 이름 name
  color: string; // 카테고리 색상 color
}

// 선택한 카테고리 바뀔 때마다 props
export interface CategoryProps {
  category: OptionType | null; // 선택한 카테고리 데이터
  options: OptionType[]; // 카테고리 데이터
  onCategoryChange: (selectedCategory: OptionType | null) => void;
}
