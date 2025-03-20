import axios from 'axios';

// URL de base de l'API
const apiUrl = 'http://localhost:5000/users/';

// Récupérer tous les utilisateurs
export async function getAllUsers() {
  try {
    const response = await axios.get(apiUrl); // Pas besoin de "/" supplémentaire
   console.log(response); return response;
  } catch (error) {
    console.error('Erreur lors de la récupération des utilisateurs :', error);
    throw error;
  }
}

// Supprimer un utilisateur par son ID
export async function deleteUserById(id) {
  try {
    const response = await axios.delete(`${apiUrl}/${id}`); // Utilisez directement l'ID
    return response;
  } catch (error) {
    console.error('Erreur lors de la suppression de l\'utilisateur :', error);
    throw error;
  }
}