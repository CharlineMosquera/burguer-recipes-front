import React from "react";
import RecipeCard from "../components/RecipeCard";
import useFetchRecipes from "../hooks/useFetchRecipes";
import Banner from "../components/Banner";
import "../styles/home.css"

const Home: React.FC = () => {
    const { recipes, loading } = useFetchRecipes();

    if (loading) return <p>Cargando recetas...</p>;

    return (
        <div className="home">
            <Banner />
            <div className="recipes-list">
                {recipes.map((recipe) => (
                    <RecipeCard key={recipe._id} recipe={recipe} />
                ))}
            </div>
        </div>
    );
};

export default Home;
