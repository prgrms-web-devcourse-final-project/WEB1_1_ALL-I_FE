import {
  createCategory,
  deleteCategory,
  editCategory,
  getCategories,
} from "@/apis/categories";
import { useCategoryStore } from "@/store/categoryStore";
import {
  CreateCategoryRequest,
  EditCategoryRequest,
} from "@/types/apiRequest.type";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Category } from "@/types/category.type";

// 카테고리 조회
export const useGetCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: () => getCategories(),
  });
};

// 개인 카테고리만 조회
export const useGetPersonalCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: () => getCategories(),
    select: (response) => ({
      ...response,
      data: response.data.filter((category: Category) => !category.groupId),
    }),
  });
};

// 카테고리 생성
export const useCreateCategory = () => {
  const queryClient = useQueryClient();
  const addCategory = useCategoryStore((state) => state.addCategory);

  const { mutate, isPending, error } = useMutation({
    mutationFn: (categoryData: CreateCategoryRequest) =>
      createCategory(categoryData),
    onSuccess: (response) => {
      addCategory(response.data);
      queryClient.refetchQueries({
        queryKey: ["categories"],
      });
    },
  });

  return { mutate, isPending, error };
};

// 카테고리 수정
export const useEditCategory = () => {
  const queryClient = useQueryClient();
  const updateCategory = useCategoryStore((state) => state.updateCategory);

  const { mutate, isPending, error } = useMutation({
    mutationFn: (categoryData: EditCategoryRequest) =>
      editCategory(categoryData),
    onSuccess: (response) => {
      updateCategory(response.data);
      queryClient.refetchQueries({
        queryKey: ["categories"],
      });
    },
  });

  return { mutate, isPending, error };
};

// 카테고리 삭제
export const useDeleteCategory = () => {
  const queryClient = useQueryClient();
  const removeCategory = useCategoryStore((state) => state.removeCategory);

  const { mutate, isPending, error } = useMutation({
    mutationFn: (categoryId: string) => deleteCategory(categoryId),
    onSuccess: (_, variables) => {
      removeCategory(variables);
      queryClient.invalidateQueries({
        queryKey: ["categories"],
      });
    },
  });

  return { mutate, isPending, error };
};
