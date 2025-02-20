import axios from "axios";
import { CategoriesResponseSchema, RecipeAPIResponseSchema, SearchRecipiesResponseSchema } from "../Schemas/recipies-schema";
import { Drink, SearchRecipies } from "../Types";

export async function getCategories() {
    const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
    const { data } = await axios(url)
    const result = CategoriesResponseSchema.safeParse(data) 
    // si esto es true es porque cumple con la estructura
    if(result.success){
        return result.data
    }else {
        throw new Error("Invalid API response");
    }
}

export async function getRecipi(search: SearchRecipies) {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${search.category}&i=${search.ingredient}`
    const { data } = await axios(url)
    const result = SearchRecipiesResponseSchema.safeParse(data)

    if (result.success) {
        return result.data
    }else {
        throw new Error("Invalid API response");
    }
}

export async function getRecipiById(id: Drink['idDrink']) {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    const { data } = await axios(url)
    const result = RecipeAPIResponseSchema.safeParse(data.drinks[0])
    console.log(result) 

    if (result.success) {
        return result.data
    }else {
        throw new Error("Invalid API response");
    }
}