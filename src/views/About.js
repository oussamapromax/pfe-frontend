import React from "react";



// components

import Navbar from "components/Navbars/AboutNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function About() {
    const agencies = [
        {
          name: "X25 Minutes Lac 2",
          address: "Lac 2, Tunis, Tunisie",
          img: "../assets/img/sportelite.png",
          mapEmbed:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9992437825194!2d10.232292615674543!3d36.85837357928744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x123456789abcdef!2sX25+Minutes+Lac+2!5e0!3m2!1sen!2stn!4v1616161616161!5m2!1sen!2stn",
        },
        {
          name: "Urban Foot Tunis",
          address: "Centre Urbain Nord, Tunis",
          img: "/agency_urban_foot.jpg",
          mapEmbed:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9992437825194!2d10.192292615674543!3d36.80237357928744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xabcdef123456789!2sUrban+Foot+Tunis!5e0!3m2!1sen!2stn!4v1616161616161!5m2!1sen!2stn",
        },
      ];
    
    return (
      <>
        <Navbar transparent />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://recreanice.fr/sites/default/files/node_images/foot2_0.jpg')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12 mt-8">
                  <h1 className="text-white font-semibold text-5xl">
                  choisir notre plateforme!
                  </h1>
              
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
       
           </div>
         </div>
  
          {/* Section Sports Disponibles */}
         <section
        className="py-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("../assets/img/image3d.jpg")`,
        }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-1">
            Nos Agences Partenaires
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {agencies.map((agency, index) => (
              <div
                key={index}
                className="w-full md:w-1/3 bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
              >
                {/* Détails de l'agence */}
                <div className="p-4 text-center">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {agency.name}
                  </h3>
                  <p className="text-sm text-gray-600 flex items-center justify-center gap-2 mt-2">
                    <span role="img" aria-label="Map Pin">
                    
                    </span>
                    {agency.address}
                  </p>
                </div>

                {/* Google Maps intégré (Carré 300x300px) */}
                <div className="p-4 flex justify-center">
                  <iframe
                    src={agency.mapEmbed}
                    width="300"
                    height="300"
                    style={{ border: "1px solid #ddd", borderRadius: "10px" }}
                    allowFullScreen=""
                    loading="lazy"
                    className="shadow-md"
                    title={`Carte de ${agency.name}`}
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Build Something avec Google Maps en arrière-plan */}
      <section className="relative py-24 bg-blueGray-800">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("https://www.google.com/maps/d/thumbnail?mid=1QeW1ZQZQZQZQZQZQZQZQZQZQZQZQZQ")`,
            opacity: 0.2,
          }}
        ></div>
        <div className="container mx-auto px-4 lg:pt-24 lg:pb-64 relative">
          <div className="flex flex-wrap text-center justify-center">
            <div className="w-full lg:w-6/12 px-4">
            
              <h2 className="text-4xl font-semibold text-white mb-4">
        Pourquoi choisir notre plateforme ?
      </h2>
      <ul className="text-left list-disc list-inside text-blueGray-400 mb-6">
        <li>Facilité d'utilisation : Réservez en quelques clics.</li>
        <li>Large choix de terrains : Trouvez le terrain parfait près de chez vous.</li>
        <li>Transparence : Pas de frais cachés.</li>
        <li>Flexibilité : Annulez ou modifiez votre réservation facilement.</li>
      </ul>
      <h2 className="text-4xl font-semibold text-white ">
              Contactez-nous
              </h2>
              <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400">
              Notre mission est de simplifier la planification de vos matchs et entraînements en mettant à votre disposition une plateforme intuitive et fiable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Contact */}
      <section className="relative block py-24 lg:pt-5 bg-blueGray-800 ">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
            <div className="w-full lg:w-6/12 px-4 ">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                <div className="flex-auto p-5 lg:p-10">
                  <h4 className="text-2xl font-semibold">
                    Want to work with us?
                  </h4>
                  <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">
                    Complete this form and we will get back to you in 24 hours.
                  </p>
                  <div className="relative w-full mb-3 mt-8">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="full-name"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Full Name"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      rows="4"
                      cols="80"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                      placeholder="Type a message..."
                    />
                  </div>
                  <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
 
      </main>
      <Footer />
    </>
  );
}