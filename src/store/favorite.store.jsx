

import { create } from 'zustand'


export const useStoreFavorite = create((set) => ({
    selectedFavoriteIds: [],
    toggleItemFavoriteId: (id) => {
        set((state) => {
            const isAlreadySelected = state.selectedFavoriteIds.includes(id);
            return {
                ...state,
                selectedFavoriteIds: isAlreadySelected
                ? state.selectedFavoriteIds.filter((item) => item !== id) //remove if not there
                : [...state.selectedFavoriteIds, id], // add if not exist
            };
        });
    },
    clearfavorite: () => {
        Set(() =>({ selectedFavoriteIds: [] }));
    },
}));