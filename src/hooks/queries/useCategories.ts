import {
  createCategory,
  deleteCategory,
  editCategory,
  getCategories,
} from "@/apis/categories";
import {
  CreateCategoryRequest,
  EditCategoryRequest,
} from "@/types/apiRequest.type";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// 카테고리 조회
export const useGetCategories = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["categories"], // 키값은 필요하면 바꾸시면 됩니다.
    queryFn: () => getCategories(),
  });

  return { data, isLoading, error };
};

// 카테고리 생성
export const useCreateCategory = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending, error } = useMutation({
    mutationFn: (categoryData: CreateCategoryRequest) =>
      createCategory(categoryData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["categories"],
      });
    },
  });

  return { mutate, isPending, error };
};

// 카테고리 수정
export const useEditCategory = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending, error } = useMutation({
    mutationFn: (categoryData: EditCategoryRequest) =>
      editCategory(categoryData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["categories"],
      });
    },
  });

  return { mutate, isPending, error };
};

// 카테고리 삭제
export const useDeleteCategory = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending, error } = useMutation({
    mutationFn: (categoryId: string) => deleteCategory(categoryId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["categories"],
      });
    },
  });

  return { mutate, isPending, error };
};
