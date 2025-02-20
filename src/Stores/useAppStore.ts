import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { RecipiesSliceType, createRecipeSlice } from "./recipeSlice";
import { FavoritesSliceType, createFavoriteSlice } from "./favoritesSlice";
import { NotificationSliceType, createNotificationSlice } from "./notificationSlice";


export const useAppStore = create<RecipiesSliceType & FavoritesSliceType & NotificationSliceType>()( devtools((...a)  => ({
    ...createRecipeSlice(...a),
    ...createFavoriteSlice(...a),
    ...createNotificationSlice(...a)
})))