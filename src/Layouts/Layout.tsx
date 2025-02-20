import {Outlet} from 'react-router-dom'
import Header from '../Components/Header'
import Modal from '../Components/Modal'
import { useEffect } from 'react'
import { useAppStore } from '../Stores/useAppStore'
import Notification from '../Components/Notificacion'

export default function Layout() {
  const storageFavorites = useAppStore((state) => state.loadFavoritesStorage)

  useEffect(()=> storageFavorites(),[])
  
  return (
    <>
      <Header/>

      <main className='container mx-auto py-16'>
        <Outlet/>
      </main>
      <Modal></Modal>
      <Notification/>
    </>
    )
}


/*
Outlet 
sirve para que fijemos un/unos compenente/s comun/es a todos, 
pero dentro de ese componente inyectemos el codigo segun la pagina

Ej: el Header es comun a todos, pero cada pagina tiene un contenido distinto
Entonces Outlet los separa

Donde pongas Outlet, ese codigo va a ser comun a todos y ademas le suma el codigo de cada page
El contenido de cada pagina se inyecta en el Outlet
*/
