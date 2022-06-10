import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { hommeProduct } from "../data/productData";

const Panier = () => {
  const [panierData, setPanierData] = useState();
  const panier = useSelector((state) => state.panier);

  useEffect(() => {
    getDataPanier();
  }, []);

  const getDataPanier = async () => {
    let temp = [];

    panier.map((n) => {
      temp.push(hommeProduct.filter((j) => j.id == n.id)[0]);
    });
    console.log(temp);
    setPanierData(temp);
  };

  console.log(panierData);
  return (
    <div className="Panier">
      <h1>Panier</h1>
      {panierData &&
        panierData.map((n, i) => (
          <div key={i}>
            <p>{n.name}</p>
          </div>
        ))}
    </div>
  );
};

export default Panier;
