import React from "react";
import { addToCart } from "../redux/redux";

const DisplayProduct = (props) => {
  const { nom, prix, img, id } = props;

  return (
    <div className="productDisplay">
      <img src={img} alt="" />
      <div className="productInner">
        <div className="textProduct">
          <p>{nom}</p>
          <p>{prix} €</p>
        </div>
        <i onClick={addToCart(id)} class="fa-solid fa-cart-plus fa-2x"></i>
      </div>
    </div>
  );
};

export default DisplayProduct;
