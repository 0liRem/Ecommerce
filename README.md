#  Librería Online - E-commerce de Libros React

![React](https://img.shields.io/badge/React-18.2.0-blue.svg)
![Storybook](https://img.shields.io/badge/Storybook-7.0.0-FF4785.svg)
![React Router](https://img.shields.io/badge/React_Router-6.14.2-CA4245.svg)

Ecommerce using React 

## Features
- **Interactive Catalog** File with test data 
- **Persistent cart** Using UseRef 
- **Favorite sistem** with useRef
- **Discounts** Implemented for a future database
- **Dynamic SearchBar** With favorite filter 
- **Rating**  
- **Responsive design** mobile y desktop

## Used Tech

| Tech | Use |
|------------|-----|
| React 18 | Core |
| React Router 6 | Nav |
| Context API | Global Status |
| useReducer + useMemo | Optimized |
| Storybook 7 | Component documentation |
| PropTypes | Props validation |

##  Structure

```bash
src/
├── components/
│   ├── BookCard/        
│   ├── Cart/              
│   ├── Rating/         
│   ├── SearchBar/        
│   └── Recommendations/   
├── context/
│   └── CartContext.js    
├── pages/
│   ├── Home/              
│   ├── BookDetails/      
│   └── CartPage/          
└── stories/              
