import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { addToCart } from "../redux/redux";

const DisplayProduct = (props) => {
  const { nom, prix, img, id, genre } = props;

  const dispatch = useDispatch();

  return (
    <NavLink to={`/product/${genre}-${id}`}>
      <div className="productDisplay">
        <img src={img} alt="" />

        <div className="productInner">
          <div className="textProduct">
            <p>{nom}</p>
            <p>{prix} €</p>
          </div>
          {/* <i
            onClick={() => dispatch(addToCart(id))}
            className="fa-solid fa-cart-plus fa-2x"
          ></i> */}
        </div>
      </div>
    </NavLink>
  );
};

export default DisplayProduct;
