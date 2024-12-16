import React, { useState, useEffect } from "react";
import RecipeCard from "../components/RecipeCard";
import "../styles/favorites.css";

interface Recipe {
    _id: string;
    title: string;
    category: string;
    ingredients: string[];
    instructions: string;
    image?: string;
}

const Favorites: React.FC = () => {
    const [favorites, setFavorites] = useState<Recipe[]>([]);

    useEffect(() => {
        // Cargar recetas favoritas desde el almacenamiento local
        const storedFavorites = localStorage.getItem("favorites");
        if (storedFavorites) {
            setFavorites(JSON.parse(storedFavorites));
        }
    }, []);

    const removeFromFavorites = (id: string) => {
        const updatedFavorites = favorites.filter(
            (recipe) => recipe._id !== id
        );
        setFavorites(updatedFavorites);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    };

    return (
        <div className="favorites">
            <h1>Mis Recetas Favoritas</h1>
            {favorites.length > 0 ? (
                <div className="favorites-list">
                    {favorites.map((recipe) => (
                        <div key={recipe._id} className="favorite-item">
                            <RecipeCard recipe={recipe} />
                            <button
                                onClick={() => removeFromFavorites(recipe._id)}
                                className="remove-btn"
                            >
                                Eliminar
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Aún no tienes recetas favoritas. ¡Empieza a añadir algunas!</p>
            )}
        </div>
    );
};

export default Favorites;
