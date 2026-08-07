# Recipe Finder App
A responsive recipe search application built with React.js using the Spoonacular API.
Users can search recipes by keyword, filter by cuisine, browse paginated results, and view detailed cooking information for each recipe.

🔗 **Live Demo:** [recipefy-app-portfolioproject.vercel.app](https://recipefy-app-portfolioproject.vercel.app/)

<img width="1100" height="907" alt="recipefy" src="https://github.com/user-attachments/assets/34e7c4fb-86c9-475c-a97d-c7fdbc03fb49" />


## Features
### Home Page
- Search recipes by keyword
- If no keyword is entered, the app displays popular/all recipes
- Filter recipes by cuisine
- Pagination support (5 recipes per page)
- Recipe cards with:
  - Recipe name
  - Recipe image
- Search triggered by:
  - Search button click
  - Enter key press
- Responsive layout for mobile and desktop

### Recipe Detail Page
- Recipe name
- Recipe image
- Health information:
  - Vegan
  - Vegetarian
  - Ketegonic
  - Dairy-free
  - Gluten-free
  - Whole 30 
  - Very Healthy
- Ready In Minutes
- Display recipe servings information (e.g. serves 2 people)
  
- Ingredients list with:
  - Ingredient name
  - Ingredient measure
- Step-by-step cooking instructions
- Navigation back to search results

## Technologies Used
- React 19 + Vite
- Tailwind CSS
- React Router DOM
- Axios
- PrimeReact / PrimeIcons
- Spoonacular API

## Getting started
1. Clone the repo
2. Run `npm install`
3. Copy `.env.example` to `.env` and add your Spoonacular API key
4. Run `npm run dev`
