import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginForm.css';  // Importez le fichier CSS ici
import { FaUser, FaLock } from 'react-icons/fa';

const LoginForm = ({ onLogin }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Replace the following condition with your actual login verification logic
    if (email === 'yourEmail@example.com' && password === 'yourPassword') {
      // Call the onLogin prop to update the authentication state in the parent component
      onLogin();

      // After successful login, navigate to the Dashboard page
      navigate('/Dashboard');
    } else {
      // Show an alert for verification if email and password don't match
      alert('Vérifier votre email ou votre mot de passe.');
    }
  };

  return (
    <div className="wrapper">
      <form>
        <h1>Connexion</h1>
        <div className="input-box">
          <input
            type="text"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Mot de passe"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaLock className="icon" />
        </div>
        <div className="remember-forgot">
          <label>
            <input type="checkbox" />Se rappeler de moi
          </label>
          <button type="button">Mot de passe oublié ?</button>
        </div>
        <button type="button" onClick={handleLogin}>
          Connexion
        </button>

        <div className="register-link">
          <p>
            Vous n’avez pas de compte <Link to="/register">Registre</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
