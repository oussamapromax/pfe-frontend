import React, { useState } from "react";
import { FaSwimmer, FaFutbol, FaBasketballBall, FaTableTennis, FaMapMarkerAlt, FaSearch } from "react-icons/fa";

const SearchBar = () => {
    const [activity, setActivity] = useState("");
    const [location, setLocation] = useState("");
    const [date, setDate] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);
    const [showLocationDropdown, setShowLocationDropdown] = useState(false);

    const activities = [
        { value: "natation", label: "Natation", icon: <FaSwimmer className="text-blue-500" /> },
        { value: "football", label: "Football", icon: <FaFutbol className="text-green-500" /> },
        { value: "basketball", label: "Basketball", icon: <FaBasketballBall className="text-orange-500" /> },
        { value: "tennis", label: "Tennis", icon: <FaTableTennis className="text-red-500" /> },
    ];

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
        <div className="bg-transparent p-2 rounded-lg shadow-lg max-w-xs mx-auto flex flex-col gap-2 border border-white">
            {/* Sélecteur de localisation */}
            <div className="relative mt-4">
                <button
                    onClick={() => setShowLocationDropdown(!showLocationDropdown)}
                    className="bg-transparent border border-white p-2 pl-3 rounded-md w-full text-left text-white flex items-center justify-between text-sm"
                >
                    {location ? cities.find((city) => city.value === location).icon : <FaMapMarkerAlt className="text-gray-400" />}
                    <span className="ml-2">{location ? cities.find((city) => city.value === location).label : "Ville"}</span>
                </button>

                {showLocationDropdown && (
                    <ul className="absolute top-full left-0 w-full bg-white border rounded-md mt-1 shadow-md z-10 text-black text-sm">
                        {cities.map((city) => (
                            <li
                                key={city.value}
                                onClick={() => {
                                    setLocation(city.value);
                                    setShowLocationDropdown(false);
                                }}
                                className="p-2 flex items-center gap-2 cursor-pointer hover:bg-gray-100"
                            >
                                {city.icon} {city.label}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Sélecteur d'activité */}
            <div className="relative mt-4">
                <button
                    onClick={() => setShowDropdown(!showDropdown)}
                    className="bg-transparent border border-white p-2 pl-3 rounded-md w-full text-left text-white flex items-center justify-between text-sm"
                >
                    {activity ? activities.find((act) => act.value === activity).icon : <FaSearch className="text-gray-400" />}
                    <span className="ml-2">{activity ? activities.find((act) => act.value === activity).label : "Activité"}</span>
                </button>

                {showDropdown && (
                    <ul className="absolute top-full left-0 w-full bg-white border rounded-md mt-1 shadow-md z-10 text-black text-sm">
                        {activities.map((act) => (
                            <li
                                key={act.value}
                                onClick={() => {
                                    setActivity(act.value);
                                    setShowDropdown(false);
                                }}
                                className="p-2 flex items-center gap-2 cursor-pointer hover:bg-gray-100"
                            >
                                {act.icon} {act.label}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Sélecteur de date */}
           
<input
    type="date"
    value={date}
    onChange={(e) => setDate(e.target.value)}
    className="p-2 rounded-md w-full text-white text-sm mt-4"
    style={{
        backgroundColor: "transparent",
        border: "2px solid white",
    }}
/>

            {/* Bouton de recherche */}
            <button
                onClick={handleSearch}
                className="bg-yellow-500 px-3 py-2 rounded-md hover:bg-yellow-400 transition-all duration-200 w-full flex items-center justify-center text-sm mt-4"
            >
                <FaSearch className="mr-1" /> Rechercher
            </button>
        </div>
    );
};

export default SearchBar;
