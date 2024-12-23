import { create } from "zustand";
import { Category } from "@/types";

interface CategoryWithFilter extends Category {
  isSelected: boolean;
}

/**
 * TODO:
 * 쿼리 훅에 추가, 삭제시 상태 관리 추가할 것
 *
 * useMutation?
 * useCatagory 쿼리 훅에서 요청 성공시 전역상태 변경 로직 추가
 *
 * React Query 캐시 무효화를 통해서 다시 패칭하게 되면
 * add, update, remove 따로 처리하지 않고, 의존성만 추가하면 되나?
 */
interface CategoryStore {
  isInitialized: boolean;
  setIsInitialized: (isInitialized: boolean) => void;

  categories: CategoryWithFilter[];
  setCategories: (categories: CategoryWithFilter[]) => void;

  toggleFilterCategory: (categoryId: string) => void;

  addCategory: (category: Category) => void;
  updateCategory: (category: Category) => void;
  removeCategory: (categoryId: string) => void;
}

export const useCategoryStore = create<CategoryStore>((set) => ({
  isInitialized: false,
  setIsInitialized: (isInitialized) => set({ isInitialized }),

  categories: [],
  setCategories: (categories) => set({ categories }),

  toggleFilterCategory: (categoryId) =>
    set((state) => ({
      categories: state.categories.map((c) =>
        c.categoryId === categoryId ? { ...c, isSelected: !c.isSelected } : c
      ),
    })),

  // 카테고리 생성 요청 시 전역상태에 필터링키 포함해서 추가
  addCategory: (category) =>
    set((state) => ({
      categories: [...state.categories, { ...category, isSelected: true }],
    })),

  // 카테고리 수정 요청 시 전역상태에 필터링키 포함해서 추가
  // 기존 필터링 키 유지
  updateCategory: (category) =>
    set((state) => ({
      categories: state.categories.map((c) =>
        c.categoryId === category.categoryId
          ? { ...category, isSelected: c.isSelected }
          : c
      ),
    })),

  // 카테고리 삭제 요청 시 전역상태에서 삭제
  removeCategory: (categoryId) =>
    set((state) => ({
      categories: state.categories.filter((c) => c.categoryId !== categoryId),
    })),
}));
