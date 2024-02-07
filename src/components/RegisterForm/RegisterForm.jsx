import React from 'react';
import './RegisterForm.css';
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';
  
export const RegisterForm = () => {
  return (
    <div className='wrapper'>
        <form action=''>
            <h1>Créer un compte</h1>
            <div className="input-box">
                <input type="text" placeholder='entrer Email' required />
                <FaUser className='icon' />
            </div>
            <div className="input-box">
                <input type="password" placeholder='entrer Mot de passe' required />
                <FaLock className='icon' />
            </div>
            <div className="input-box">
                <input type="password" placeholder='confirmer Mot de passe' required />
                <FaLock className='icon' />
            </div>
            <button type="submit">OK</button>
            <div className="register-link">
                <p>Vous avez Déja un compte ?<a> <Link to="/login">Login</Link></a></p>
            </div>
        </form>
    
    </div>
  );
};

export default RegisterForm;

