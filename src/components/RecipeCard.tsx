import React from "react";
import "../styles/recipeCard.css"

interface Recipe {
    title: string;
    category: string;
    ingredients: string[];
    instructions: string;
    image?: string;
}

interface RecipeCardProps {
    recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
    const { title, category, ingredients, instructions, image } = recipe;

    return (
        <div className="recipe-card">
            <img src={image || "default.jpg"} alt={title} />
            <h3>{title}</h3>
            <p>
                <strong>Categoria:</strong> {category}
            </p>
            <h4>Ingredientes:</h4>
            <ul>
                {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <h4>Instrucciones:</h4>
            <p>{instructions}</p>
        </div>
    );
};

export default RecipeCard;
