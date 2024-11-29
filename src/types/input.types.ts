// 텍스트 입력 interface (기본 텍스트, 이메일, 비밀번호)
export interface TextInputProps {
  name: string; // 입력 필드 이름
  type: "text" | "email" | "password"; // 입력 필드 형식
  label?: string; // 입력 필드 라벨
  placeholder?: string; // 입력 필드 플레이스홀더
  required?: boolean; // 필수 입력 여부
  maxLength?: number; // 최대 입력 길이
  minLength?: number; // 최소 입력 길이
  value: string; // 입력 필드의 현재 값
  onChange: (value: string) => void; // 상위 컴포넌트로 상태를 전달할 함수
}

// 시간 입력 interface (시작, 종료 시간 입력)
export interface TimeInputProps {
  startTime: string; // default 시작시간
  endTime?: string; // default 종료시간
  withEndTime?: boolean; // 종료시간 옵션 (true: 사용, false: 사용하지 않음)
  onChange: (startTime: string, endTime?: string) => void; // 시간 바뀔때마다 호출해서 바뀐 시간 전달
}

// 날짜 입력 interface
export interface DateProps {
  startDate: Date; // 시작 날짜와 종료 날짜의 기본값 (메인페이지 달력 날짜 기준으로 받아와야함)
  endDate?: Date; // 종료 날짜의 기본값
  onChange: (startDate: Date, endDate?: Date) => void; // 날짜 변경될 때마다 호출해서 변경된 날짜 전달
  withEndDate?: boolean; // 종료날짜 입력 옵션
}
