import React from "react";

// Components
import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import CardPageVisits from "components/Cards/CardPageVisits.js";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";
import NotificationDropdown from "components/Dropdowns/NotificationDropdown"; // Importez le composant

export default function Dashboard() {
  return (
    <>
      {/* Barre de navigation avec NotificationDropdown */}
      <nav className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold">Tableau de bord</h1>
        <div className="flex items-center">
          {/* Intégration de NotificationDropdown */}
          <NotificationDropdown />
        </div>
      </nav>

      {/* Contenu principal du tableau de bord */}
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardLineChart />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardBarChart />
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardPageVisits />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardSocialTraffic />
        </div>
      </div>
    </>
  );
}