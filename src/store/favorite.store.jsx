import { create } from 'zustand';

export const useStoreFavorite = create((set) => ({
  selectedFavoriteIds: [],

  toggleItemFavoriteId: (id) => {
    set((state) => {
      const isAlreadySelected = state.selectedFavoriteIds.includes(id);

      return {
        selectedFavoriteIds: isAlreadySelected
          ? state.selectedFavoriteIds.filter((item) => item !== id) // remove if present
          : [...state.selectedFavoriteIds, id], // add if not present
      };
    });
  },

  clearFavorite: () => {
    set(() => ({ selectedFavoriteIds: [] })); // ✅ lower-case set
  },
}));
