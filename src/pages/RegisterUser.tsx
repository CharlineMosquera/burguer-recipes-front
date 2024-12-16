import React, { useState } from "react";
import apiClient from "../services/api";
import "../styles/recipeForm.css";

const RegisterUser: React.FC = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await apiClient.post("/api/users/register", formData);
            alert("Usuario registrado exitosamente");
        } catch (error) {
            alert("Error al registrar el usuario");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Registrar Usuario</h1>
            <input
                type="text"
                placeholder="Nombre de usuario"
                onChange={(e) =>
                    setFormData({ ...formData, username: e.target.value })
                }
            />
            <input
                type="email"
                placeholder="Correo electrónico"
                onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                }
            />
            <input
                type="password"
                placeholder="Contraseña"
                onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                }
            />
            <button type="submit">Registrar Usuario</button>
        </form>
    );
};

export default RegisterUser;
