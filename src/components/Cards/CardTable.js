import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getAllUsers, deleteUserById } from "../../services/ApiUser";

export default function CardTable({ color }) {
  const [users, setUsers] = useState([]);

  // Récupérer les utilisateurs
  const getUsers = async () => {
    try {
      const res = await getAllUsers();
      console.log("Données reçues :", res.data); // 🔍 DEBUG
      setUsers(res.data || []); // Assure que users est toujours un tableau
    } catch (error) {
      console.error("Erreur lors de la récupération des utilisateurs :", error);
    }
  };

  // Supprimer un utilisateur
  const deleteUser = async (id) => {
    try {
      await deleteUserById(id);
      
    } catch (error) {
      console.error("Erreur lors de la suppression :", error);
    }
  };

  // Charger les utilisateurs au montage du composant
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div
      className={
        "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
        (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
      }
    >
      <div className="rounded-t mb-0 px-4 py-3 border-0">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full px-4 max-w-full flex-grow flex-1">
            <h3
              className={
                "font-semibold text-lg " +
                (color === "light" ? "text-blueGray-700" : "text-white")
              }
            >
              Liste des utilisateurs
            </h3>
          </div>
        </div>
      </div>
      <div className="block w-full overflow-x-auto">
        {/* Table */}
        <table className="items-center w-full bg-transparent border-collapse">
          <thead>
            <tr>
              {["Prénom",  "Email", "Rôle", "Créé le", "Actions"].map(
                (header, index) => (
                  <th
                    key={index}
                    className={
                      "px-6 py-3 text-xs uppercase font-semibold text-left border-l-0 border-r-0 whitespace-nowrap " +
                      (color === "light"
                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                    }
                  >
                    {header}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user,index) => (
                <tr key={user._id}>
                  <td className="px-6 py-4 border-t border-l-0 border-r-0 whitespace-nowrap">
                    {user.username}
                  </td>
               
                  <td className="px-6 py-4 border-t border-l-0 border-r-0 whitespace-nowrap">
                    {user.email}
                  </td>
                  <td className="px-6 py-4 border-t border-l-0 border-r-0 whitespace-nowrap">
                    {user.role}
                  </td>
                  <td className="px-6 py-4 border-t border-l-0 border-r-0 whitespace-nowrap">
                    {new Date(user.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 border-t border-l-0 border-r-0 whitespace-nowrap">
                    <button
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                      onClick={() => deleteUser(user._id)}
                    >
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-4">
                  Aucun utilisateur trouvé.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

CardTable.defaultProps = {
  color: "light",
};

CardTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
