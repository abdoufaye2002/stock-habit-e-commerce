import React from "react";
import "./Offers.css";
import exclusive_image from "../Assets/exclusive_image.png";

const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Offres</h1>
        <h1>Exclusives Pour Vous</h1>
        <p>UNIQUEMENT SUR LES MEILLEURS PRODUITS</p>
        <button>Voir maintenant</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  );
};

export default Offers;
