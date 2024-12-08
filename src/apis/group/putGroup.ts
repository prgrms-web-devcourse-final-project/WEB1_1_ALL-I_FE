import { updateRequest } from "../apiService";

interface FormDataProps {
  formData: {
    groupId: string;
    groupName: string;
    description: string;
    initialColor: string;
  };
}

// 그룹 조회
export const putGroup = async ({ formData }: FormDataProps) => {
  try {
    const res = await updateRequest(`/groups/${formData.groupId}`, {
      name: formData.groupName,
      description: formData.description,
      color: formData.initialColor,
    });
    return res;
  } catch (error) {
    return error;
  }
};
