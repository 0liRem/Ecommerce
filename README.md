#  Librería Online - E-commerce de Libros React

![React](https://img.shields.io/badge/React-18.2.0-blue.svg)
![Storybook](https://img.shields.io/badge/Storybook-7.0.0-FF4785.svg)
![React Router](https://img.shields.io/badge/React_Router-6.14.2-CA4245.svg)
![Context API](https://img.shields.io/badge/Context_API-Yes-yellow.svg)

Un e-commerce de libros completo desarrollado con React que incluye carrito de compras, favoritos y sistema de recomendaciones inteligentes.

## 🖥️ Capturas de Pantalla

| Vista Principal | Detalles de Libro | Carrito |
|-----------------|------------------|---------|
| ![Home](screenshots/home.png) | ![Details](screenshots/details.png) | ![Cart](screenshots/cart.png) |

## Características Principales

- **Catálogo interactivo** con 10+ libros de ejemplo
- **Carrito persistente** (guarda en localStorage)
- **Sistema de favoritos** con useRef
- **Descuentos aleatorios** al iniciar la aplicación
- **Búsqueda en tiempo real** con filtro por favoritos
- **Rating visual** por estrellas (1-5)
- **Recomendaciones inteligentes** basadas en historial
- **Responsive design** para móviles y desktop

##  Tecnologías Utilizadas

| Tecnología | Uso |
|------------|-----|
| React 18 | Core de la aplicación |
| React Router 6 | Navegación entre páginas |
| Context API | Estado global |
| useReducer + useMemo | Gestión de estado optimizada |
| CSS Modules | Estilos componentizados |
| Storybook 7 | Documentación de componentes |
| PropTypes | Validación de props |

##  Estructura del Proyecto

```bash
src/
├── components/
│   ├── BookCard/          # Tarjeta de libro con descuentos
│   ├── Cart/              # Componentes del carrito
│   ├── Rating/            # Sistema de 5 estrellas
│   ├── SearchBar/         # Búsqueda con filtros
│   └── Recommendations/   # Libros recomendados
├── context/
│   └── CartContext.js     # Lógica global del e-commerce
├── pages/
│   ├── Home/              # Vista principal
│   ├── BookDetails/       # Página de detalles
│   └── CartPage/          # Checkout del carrito
└── stories/              # Documentación de componentes
