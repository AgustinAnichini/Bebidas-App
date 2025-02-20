import {z} from 'zod'
import { CategoriesResponseSchema, SearchRecipiesSchema, SearchRecipiesResponseSchema,SearchRecipiResponseSchema, RecipeAPIResponseSchema } from '../Schemas/recipies-schema'

export type Categories = z.infer<typeof CategoriesResponseSchema>
export type SearchRecipies = z.infer<typeof SearchRecipiesSchema>
export type Drinks = z.infer<typeof SearchRecipiesResponseSchema>
export type Drink = z.infer<typeof SearchRecipiResponseSchema>
export type Recipi = z.infer<typeof RecipeAPIResponseSchema>