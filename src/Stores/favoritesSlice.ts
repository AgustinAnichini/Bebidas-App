import { StateCreator } from "zustand";
import { Recipi } from "../Types";
import { createNotificationSlice, NotificationSliceType } from "./notificationSlice";


export type FavoritesSliceType ={
    favorites: Recipi[]
    handleClickFavorites: (recipi: Recipi) => void
    favoritesExist: (id : Recipi['idDrink']) => boolean
    loadFavoritesStorage: () => void
}

export const createFavoriteSlice : StateCreator<FavoritesSliceType 
                                    & NotificationSliceType,[],[],FavoritesSliceType> = (set, get,api) => ({
    favorites: [],
    handleClickFavorites: (recipi) =>{
        if (get().favoritesExist(recipi.idDrink)) {
            set((state)=>({
                favorites: state.favorites.filter(favorite => favorite.idDrink !== recipi.idDrink)
            }))
            createNotificationSlice(set,get,api).showNotification({
                text: 'Se elimino de favoritos',
                error: false
            })
        }else{
            set((state)=>({
                favorites: [...state.favorites, recipi]
            }))
            createNotificationSlice(set,get,api).showNotification({
                text: 'Se agrego a favotitos',
                error: false
            })
        }
        localStorage.setItem('favorites', JSON.stringify(get().favorites))
    },
    favoritesExist: (id)=>{
        return get().favorites.some(favorite => favorite.idDrink === id)
    },
    loadFavoritesStorage: ()=>{
       const storageFavorites = localStorage.getItem('favorites')
        if (storageFavorites) {
            set({
                favorites: JSON.parse(storageFavorites)
            })
        }
    } 
})
