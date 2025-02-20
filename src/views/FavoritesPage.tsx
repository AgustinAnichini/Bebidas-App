import { useMemo } from "react"
import DrinkCard from "../Components/DrinkCard"
import { useAppStore } from "../Stores/useAppStore"

export default function FavoritesPage() {
    const favoriteList = useAppStore((state)=> state.favorites)

    const hasFavorites =useMemo(()=> favoriteList.length ,[favoriteList])

  return (
    <>
      <h1 className="text-6xl font-extrabold">Favoritos</h1>
      {hasFavorites ? (
          <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 my-10 gap-10">
          {favoriteList.map((drink) => (
            <DrinkCard
            key={drink.idDrink}
            drink={drink}
            />
          ))}
          </div>
      ) : (
        <p className=" my-10 text-2xl text-center">No hay favoritos aún, agregalos desde inicio.</p>
      )}
    </>  
    )
}
