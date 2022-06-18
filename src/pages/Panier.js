import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allProduct, hommeProduct } from "../data/productData";
import { deleteCart, updateQuantity } from "../redux/redux";

const Panier = () => {
  const [panierData, setPanierData] = useState([]);
  const [, fctMiseAJour] = useState({});
  const miseAJour = useCallback(() => fctMiseAJour({}), []);
  const panier = useSelector((state) => state.panier);
  const dispatch = useDispatch();

  useEffect(() => {
    getDataPanier();
  }, []);

  const getDataPanier = async () => {
    let temp = [];
    panier.map((n, i) => {
      temp.push(allProduct.filter((j) => j.id === n.id)[0]);
      temp[i].size = n.size;
      temp[i].quantity = n.quantity;
    });

    setPanierData(temp);
  };

  const quantityUpdate = async (index, n) => {
    let quantity = n.quantity;
    if (n !== undefined) {
      if (index === "plus") {
        quantity++;
        dispatch(updateQuantity([n.id, quantity]));
        getDataPanier();
      } else {
        quantity--;
        dispatch(updateQuantity([n.id, quantity]));
        getDataPanier();
      }
    }
  };

  const handleDeleteCart = (n) => {
    dispatch(deleteCart(n.id));

    panierData.splice(panierData.indexOf(n), 1);
    miseAJour();
  };

  return (
    <div className="panier">
      <h1>Panier</h1>
      {panierData.length != 0 ? (
        panierData.map((n, i) => (
          <div key={i}>
            <p>{n.name}</p>
            <img src={n.img} alt="" />
            <p>Prix : {n.prix}</p>
            <div>
              <p>Quantité : {n.quantity}</p>
              {/* <button onClick={() => quantityUpdate("plus", n)}>-</button>
              <button onClick={() => quantityUpdate("moins", n)}>+</button> */}
              <button onClick={() => handleDeleteCart(n)}>X</button>
            </div>
            <p>Taille : {n.size}</p>
          </div>
        ))
      ) : (
        <>
          <h3>Votre panier est vide</h3>
        </>
      )}
    </div>
  );
};

export default Panier;
