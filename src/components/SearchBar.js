import React, { useState } from "react";
import { FaSwimmer, FaFutbol, FaBasketballBall, FaTableTennis, FaMapMarkerAlt, FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const [activity, setActivity] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);

  // Liste des activités avec leurs icônes
  const activities = [
    { value: "natation", label: "Natation", icon: <FaSwimmer className="text-blue-500" /> },
    { value: "football", label: "Football", icon: <FaFutbol className="text-green-500" /> },
    { value: "basketball", label: "Basketball", icon: <FaBasketballBall className="text-orange-500" /> },
    { value: "tennis", label: "Tennis", icon: <FaTableTennis className="text-red-500" /> },
  ];

  // Liste des villes disponibles
  const cities = [
    { value: "tunis", label: "Tunis", icon: <FaMapMarkerAlt className="text-gray-500" /> },
    { value: "ariana", label: "Ariana", icon: <FaMapMarkerAlt className="text-gray-500" /> },
    { value: "ben_arous", label: "Ben Arous", icon: <FaMapMarkerAlt className="text-gray-500" /> },
    { value: "mannouba", label: "Manouba", icon: <FaMapMarkerAlt className="text-gray-500" /> },
  ];

  const handleSearch = () => {
    console.log("Recherche effectuée avec :", { activity, location, date });
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-xl max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Rechercher un terrain</h2>

      {/* Sélecteur d'activité */}
      <div className="mb-4">
        <label className="block font-semibold mb-2">Activité</label>
        <div className="relative">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="border p-3 pl-4 pr-8 rounded-lg w-full text-left focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer flex items-center justify-between"
          >
            {activity
              ? activities.find((act) => act.value === activity).icon
              : <FaSearch className="text-gray-400" />}
            <span className="ml-2">
              {activity
                ? activities.find((act) => act.value === activity).label
                : "Sélectionner une activité"}
            </span>
          </button>

          {showDropdown && (
            <ul className="absolute top-full left-0 w-full bg-white border rounded-lg mt-2 shadow-lg z-10">
              {activities.map((act) => (
                <li
                  key={act.value}
                  onClick={() => {
                    setActivity(act.value);
                    setShowDropdown(false);
                  }}
                  className="p-3 flex items-center gap-2 cursor-pointer hover:bg-gray-100"
                >
                  {act.icon} {act.label}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Sélecteur de localisation */}
      <div className="mb-4">
        <label className="block font-semibold mb-2">Localisation</label>
        <div className="relative">
          <button
            onClick={() => setShowLocationDropdown(!showLocationDropdown)}
            className="border p-3 pl-4 pr-8 rounded-lg w-full text-left focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer flex items-center justify-between"
          >
            {location
              ? cities.find((city) => city.value === location).icon
              : <FaMapMarkerAlt className="text-gray-400" />}
            <span className="ml-2">
              {location
                ? cities.find((city) => city.value === location).label
                : "Sélectionner une localisation"}
            </span>
          </button>

          {showLocationDropdown && (
            <ul className="absolute top-full left-0 w-full bg-white border rounded-lg mt-2 shadow-lg z-10">
              {cities.map((city) => (
                <li
                  key={city.value}
                  onClick={() => {
                    setLocation(city.value);
                    setShowLocationDropdown(false);
                  }}
                  className="p-3 flex items-center gap-2 cursor-pointer hover:bg-gray-100"
                >
                  {city.icon} {city.label}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Sélecteur de date */}
      <div className="mb-4">
        <label className="block font-semibold mb-2">Date</label>
        <div className="relative">
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border p-3 pl-10 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
          />
     
        </div>
      </div>

      {/* Bouton de recherche */}
      <button
        onClick={handleSearch}
        className="bg-emerald-600  px-6 py-3 rounded-lg hover: bg-emerald-500 transition-all duration-200 w-full flex items-center justify-center"
      >
        <FaSearch className="mr-2" /> Rechercher
      </button>
    </div>
  );
};

export default SearchBar;