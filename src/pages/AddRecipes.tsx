import React, { useState } from "react";
import apiClient from "../services/api";
import "../styles/recipeForm.css";

const AddRecipe: React.FC = () => {
    const [formData, setFormData] = useState({
        title: "",
        category: "",
        ingredients: "",
        instructions: "",
        image: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await apiClient.post("/api/recipes", formData);
            alert("Receta añadida exitosamente");
        } catch (error) {
            alert("Error al añadir la receta");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Añadir Nueva Receta</h1>
            <input
                type="text"
                placeholder="Título"
                onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                }
            />
            <input
                type="text"
                placeholder="Categoría"
                onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                }
            />
            <textarea
                placeholder="Ingredientes"
                onChange={(e) =>
                    setFormData({ ...formData, ingredients: e.target.value })
                }
            />
            <textarea
                placeholder="Instrucciones"
                onChange={(e) =>
                    setFormData({ ...formData, instructions: e.target.value })
                }
            />
            <input
                type="text"
                placeholder="URL de la imagen"
                onChange={(e) =>
                    setFormData({ ...formData, image: e.target.value })
                }
            />
            <button type="submit">Añadir Receta</button>
        </form>
    );
};

export default AddRecipe;
