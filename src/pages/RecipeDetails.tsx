import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

interface Recipe {
    _id: string;
    title: string;
    category: string;
    ingredients: string[];
    instructions: string;
    image?: string;
}

const RecipeDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [recipe, setRecipe] = useState<Recipe | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const response = await axios.get(`/api/recipes/${id}`);
                setRecipe(response.data);
            } catch (err) {
                setError("Error fetching the recipe. Please try again.");
            } finally {
                setLoading(false);
            }
        };

        fetchRecipe();
    }, [id]);

    if (loading) {
        return <p>Cargando detalles de la receta...</p>;
    }

    if (error) {
        return <p className="error">{error}</p>;
    }

    return (
        <div className="recipe-details">
            {recipe ? (
                <>
                    <h1>{recipe.title}</h1>
                    <p>
                        <strong>Categoria:</strong> {recipe.category}
                    </p>
                    {recipe.image && (
                        <img src={recipe.image} alt={recipe.title} />
                    )}
                    <h3>Ingredientes:</h3>
                    <ul>
                        {recipe.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                    <h3>Instrucciones:</h3>
                    <p>{recipe.instructions}</p>
                </>
            ) : (
                <p>No se encontró ninguna receta</p>
            )}
        </div>
    );
};

export default RecipeDetails;
