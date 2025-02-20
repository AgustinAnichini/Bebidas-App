import { StateCreator } from "zustand"
import { getCategories, getRecipi, getRecipiById } from "../Services/RecipiService"
import { Categories, Drink, Drinks, Recipi, SearchRecipies } from "../Types"

export type RecipiesSliceType = {
    categories: Categories;
    drinks: Drinks; 
    recipiById: Recipi;
    modal: boolean
    fetchCategories: () => Promise<void>;
    searchRecipies: (search: SearchRecipies) => Promise<void>;
    viewRecipi: (id: Drink['idDrink']) => Promise<void>
    closeModal: () => void
  };
export const createRecipeSlice : StateCreator<RecipiesSliceType> = (set) => ({
    categories: {
        drinks: [] // dentro del Array todas las categorias
     },

    drinks: {
        drinks: []
      },
    recipiById:{
          
    } as Recipi,
    modal:false,
    
    fetchCategories: async () => {
       const categories = await getCategories()
       set({
        categories
       })
    },

    searchRecipies: async (search) => {
        // consulta a la API para obtener una receta a partir de 2 parametros
        const drinks = await getRecipi(search) 
      set({
        drinks:drinks
      })   
    },
    viewRecipi: async (id) =>{
        const recipiById = await getRecipiById(id)
        set({
            recipiById,
            modal: true
        })
    },
    closeModal: () =>{
       set({
        modal: false,
        recipiById:{} as Recipi
       })
    }
})