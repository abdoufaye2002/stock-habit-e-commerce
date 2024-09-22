import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="newsletter">
      <h1>Recevez des Offres Exclusives par Email</h1>
      <p>Abonnez-vous à notre newsletter et restez informé.</p>
      <div>
        <input type="email" placeholder="Votre adresse email" />
        <button>S'abonner</button>
      </div>
    </div>
  );
};

export default NewsLetter;
