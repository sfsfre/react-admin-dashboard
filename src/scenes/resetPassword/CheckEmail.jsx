// CheckEmail.js
import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../../components/Login/style.css'; // Assurez-vous d'importer le même fichier style.css utilisé pour le formulaire de connexion

const CheckEmail = () => {
  const [email, setEmail] = useState('');

  const handleVerify = () => {
    // Implémentez votre logique de vérification de l'e-mail ici
    console.log(`Vérification de l'e-mail : ${email}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="w-full max-w-md">
   <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-auto my-auto">
 <div style={{ width: '100%' }}>
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Vérification de l'E-mail</h2>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              E-mail
            </label>
            <div className="relative">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <FaUser className="absolute text-gray-500 right-2 top-3" />
            </div>
          </div>
          <Link to="/ResetPassword">
            <button
              className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline wider-button"
              style={{ width: '40%' }}
              type="button"
              onClick={handleVerify}
            >
              Vérifier
            </button>
          </Link>
          </div>
        </form>
        
      </div>
    </div>
  );
};

export default CheckEmail;
