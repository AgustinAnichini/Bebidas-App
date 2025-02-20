import { Dialog, Transition } from '@headlessui/react';
import { Fragment, JSX } from 'react';
import { useAppStore } from '../Stores/useAppStore';
import { Recipi } from '../Types';

export default function Modal() {
    const modal = useAppStore((state) => state.modal)
    const closeModal = useAppStore((state) => state.closeModal)
    const recipiById = useAppStore((state) => state.recipiById)
    const handleClickFavorites = useAppStore((state) => state.handleClickFavorites)
    const favoritesExist = useAppStore((state) => state.favoritesExist)



    const renderIngredients = ()=>{
      const ingredients : JSX.Element[] = []
      // hay recetas que tienen menos o mas ingredientes y cantidades, pero son como maximo 6
      // creamos un array para llenarlo con los ingredientes de cada receta

      for (let index = 1; index < 6; index++) {
        const ingredient = recipiById[`strIngredient${index}` as keyof Recipi] // busca y machea por el nombre, si existe algo asi
        const measure = recipiById[`strMeasure${index}` as keyof Recipi]

        if (ingredient && measure) {
            ingredients.push(
              <li key={index} className='text-lg font-normal'>
                {ingredient} - {measure}
              </li>
            )
        }
      }
     return ingredients
    }

  return (
    <>
      <Transition appear show={modal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-70" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6" >
                  <Dialog.Title as="h3" className="text-gray-900 text-4xl font-extrabold my-5 text-center">
                      {recipiById.strDrink}
                  </Dialog.Title>
                  <img src={recipiById.strDrinkThumb} 
                      alt={`Imagen de ${recipiById.strDrink}`}
                      className='mx-auto w-96' 
                  />
                  <Dialog.Title as="h3" className="text-gray-900 text-2xl font-extrabold my-5">
                    Ingredientes y Cantidades
                  </Dialog.Title>
                    {renderIngredients()}
                  <Dialog.Title as="h3" className="text-gray-900 text-2xl font-extrabold my-5">
                    Instrucciones
                  </Dialog.Title>
                    <p className='text-lg'>{recipiById.strInstructions}</p>
                   
                    <div className='mt-5 flex justify-between gap-4'>

                      <button className='w-full rounded bg-orange-600 p-3 font-bold uppercase text-white shadow
                            hover:bg-orange-500'
                            onClick={() => {
                              handleClickFavorites(recipiById)
                              closeModal()  
                            }}>
                        {favoritesExist(recipiById.idDrink) ? (
                           'Eliminar de Favoritos'
                        ):(
                          'Agregar a Favoritos'
                        ) }</button>

                      <button className='w-full rounded bg-gray-600 p-3 font-bold uppercase text-white shadow
                            hover:bg-gray-500'
                            onClick={closeModal}
                      >Cerrar</button>
                    </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}