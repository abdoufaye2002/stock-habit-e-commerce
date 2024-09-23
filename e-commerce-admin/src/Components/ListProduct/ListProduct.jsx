import React, { useEffect, useState } from "react";
import "./ListProduct.css";
import cross_icon from "../Assets/cross_icon.png";

const ListProduct = () => {
  const [allproducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchInfo = async () => {
    try {
      const res = await fetch("http://localhost:4000/allproducts");
      if (!res.ok) {
        throw new Error("Erreur lors de la récupération des produits");
      }
      const data = await res.json();
      setAllProducts(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const removeProduct = async (id) => {
    try {
      const response = await fetch("http://localhost:4000/removeproduct", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: id }),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de la suppression du produit");
      }

      fetchInfo(); // Rafraîchir la liste des produits
    } catch (error) {
      setError(error.message);
    }
  };

  if (loading) {
    return (
      <div className="listproduct">
        <p>Chargement...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="listproduct">
        <p>Erreur: {error}</p>
      </div>
    );
  }

  return (
    <div className="listproduct">
      <h1>Liste de tout les produits</h1>
      <table className="listproduct-table">
        <thead>
          <tr>
            <th>Produit</th>
            <th>Titre</th>
            <th>Ancien Prix</th>
            <th>Nouveau Prix</th>
            <th>Catégorie</th>
            <th>Supprimer</th>
          </tr>
        </thead>
        <tbody>
          {allproducts.map((e) => (
            <tr key={e.id}>
              <td>
                <img
                  className="listproduct-product-icon"
                  src={e.image}
                  alt={e.name}
                />
              </td>
              <td className="cartitems-product-title">{e.name}</td>
              <td>{e.old_price}frc</td>
              <td>{e.new_price}frc</td>
              <td>{e.category}</td>
              <td>
                <img
                  className="listproduct-remove-icon"
                  onClick={() => removeProduct(e.id)}
                  src={cross_icon}
                  alt="Supprimer"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListProduct;
