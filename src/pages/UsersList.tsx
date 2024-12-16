import React from "react";
import "../styles/userCards.css";

interface UserCardProps {
    username: string;
    email: string;
}

const UserCard: React.FC<UserCardProps> = ({ username, email }) => {
    return (
        <div className="user-card">
            <h3>{username}</h3>
            <p className="email">{email}</p>
            <div className="actions">
                <button>Ver Perfil</button>
                <button>Eliminar</button>
            </div>
        </div>
    );
};

export default UserCard;
