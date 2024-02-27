import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa';
import './style.css';


const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formMode, setFormMode] = useState('login');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailRegister, setEmailReg] = useState('');
  const [passwordRegister, setPasswordReg] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  
  const handleLogin = () => {
    if (email === 'yourEmail@example.com' && password === 'yourPassword') {
      onLogin();
      navigate('/Dashboard');
    } else {
      alert('Vérifier votre email ou votre mot de passe.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md">
        {formMode === 'login' ? (
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-auto my-auto">
        
            <h1 className="text-2xl mb-4">Connexion</h1>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <div className="relative">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <FaUser className="absolute text-gray-500 right-2 top-3" />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Mot de passe
              </label>
              <div className="relative">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Mot de passe"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <FaLock className="absolute text-gray-500 right-2 top-3" />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="remember">
                <input className="mr-2 leading-tight" type="checkbox" id="remember" />
                <span className="text-sm">Se rappeler de moi</span>
              </label>
              <p className="text-xs">
                <Link to="/CheckEmail" className="text-blue-500 hover:underline">
                  Mot de passe oublié ?
                </Link>
              </p>
            </div>
            <button
              className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline wider-button"
              style={{ width: '40%'}} 
              type="button"
              onClick={handleLogin}
            >
              Connexion
            </button>
            <div className="mt-4">
             <p style={{ color: 'black' }}>
                Vous n’avez pas de compte ?{' '}
                <span className="cursor-pointer text-blue-500" onClick={() => setFormMode('signin')}>
                <Link> Register</Link>
                </span>
              </p>
            </div>
          </form>
        ) : (
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-auto my-auto">
            <h1 className="text-2xl mb-4">Inscription</h1>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                Prénom
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="firstName"
                type="text"
                placeholder="Prénom"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                Nom
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="lastName"
                type="text"
                placeholder="Nom"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="emailRegister">
                E-mail
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="emailRegister"
                type="email"
                placeholder="E-mail"
                value={emailRegister}
                onChange={(e) => setEmailReg(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="passwordRegister">
                Mot de passe
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="passwordRegister"
                type="password"
                placeholder="Mot de passe"
                value={passwordRegister}
                onChange={(e) => setPasswordReg(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
                Confirmer le mot de passe
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="confirmPassword"
                type="password"
                placeholder="Confirmer le mot de passe"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <button
              className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              style={{ width: '40%'}} 
            >
              S'inscrire
            </button>
            <div className="mt-4">
            {formMode !== 'login' && (
                <p style={{ color: 'black' }}>
                  Vous avez déjà un compte ?{' '}
                  <span className="cursor-pointer text-blue-500" onClick={() => setFormMode('login')}>
                    <Link>Connectez-vous</Link>
                  </span>
                </p>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;

