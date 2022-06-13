import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { hommeProduct } from "../data/productData";

const Panier = () => {
  const [panierData, setPanierData] = useState([]);
  const panier = useSelector((state) => state.panier);

  useEffect(() => {
    getDataPanier();
  }, []);

  const getDataPanier = async () => {
    let temp = [];
    panier.map((n) => {
      temp.push(hommeProduct.filter((j) => j.id == n.id)[0]);
      temp[0].size = n.size;
    });
    console.log(temp);

    setPanierData(temp);
  };

  console.log(panierData);
  return (
    <div className="panier">
      <h1>Panier</h1>
      {panierData &&
        panierData.map((n, i) => (
          <div key={i}>
            <p>{n.name}</p>
            <img src={n.img} alt="" />
            <p>Prix : {n.prix}</p>
            <p>Taille : {n.size}</p>
          </div>
        ))}
    </div>
  );
};

export default Panier;
