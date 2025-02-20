# 🍸 **Cocktail** 🍸

### **Aplicación para búsqueda y gestión de recetas de cócteles**

---

**"Cocktail"** es una aplicación web desarrollada con **React** y **TypeScript**, diseñada para ayudar a los usuarios a encontrar recetas de cócteles. La app utiliza una API externa que proporciona información sobre recetas, categorías, ingredientes, y permite buscar por nombre, ingrediente o categoría. Los usuarios también tienen la posibilidad de **guardar sus recetas favoritas** para acceder a ellas en cualquier momento.

---

## 🚀 **Tecnologías utilizadas:**

- **React**: Librería para la construcción de interfaces de usuario reactivas y dinámicas.
- **TypeScript**: Lenguaje que extiende JavaScript con tipado estático, mejorando la calidad del código.
- **Vite**: Herramienta de construcción rápida y optimizada para el desarrollo de aplicaciones React.
- **Axios**: Cliente HTTP para realizar solicitudes a la API y obtener datos sobre cócteles.
- **React Router DOM**: Librería para la gestión de rutas en la aplicación.
- **TailwindCSS**: Framework de CSS para un diseño rápido, flexible y responsivo.
- **Zustand**: Librería para la gestión del estado global de la aplicación. Se ha implementado un **Slice del Store** dividido en secciones: **principal**, **favoritos**, **notificaciones** y **home**, para optimizar la gestión de funcionalidades.
- **Zod**: Librería para la validación de datos y esquemas en tiempo de ejecución.
- **@headlessui/react** y **@heroicons/react**: Componentes UI accesibles para mejorar la experiencia del usuario.

---

## 📋 **Flujo de trabajo:**

1. **Búsqueda de recetas**:  
   Los usuarios pueden buscar recetas de cócteles por nombre, ingrediente o categoría utilizando la API externa. La interfaz es interactiva y fácil de usar, mostrando los resultados de búsqueda en tiempo real.

2. **Guardar recetas favoritas**:  
   Los usuarios pueden agregar las recetas que más les gustan a una lista de favoritos. Las recetas se almacenan en el estado global, gracias a **Zustand**, permitiendo al usuario acceder rápidamente a ellas en cualquier momento.

3. **Explorar categorías**:  
   Además de la búsqueda por nombre o ingrediente, la app permite filtrar recetas por categorías (como "Cócteles clásicos", "Cócteles sin alcohol", etc.), mejorando la experiencia de navegación.
   
---

## Instalación y ejecución del proyecto

Para comenzar a trabajar con este proyecto, sigue estos pasos:

```cmd
git clone <url-del-repositorio>
cd <nombre-del-directorio-del-proyecto>
npm install
npm run dev

---

### ¡Gracias por visitar el proyecto! 🍹

