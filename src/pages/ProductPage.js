import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { hommeProduct } from "../data/productData";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/redux";

const ProductPage = () => {
  const [productData, setProductData] = useState();
  let { slug } = useParams();
  const dispatch = useDispatch();

  const index = slug.split("-");
  useEffect(() => {
    if (index[0] == "homme") {
      setProductData(hommeProduct.filter((n) => n.id == index[1]));
    }
  }, []);

  return (
    <div>
      {productData && (
        <div>
          <img src={productData[0].img} alt="" />
          <h1>{productData[0].name}</h1>
          <button onClick={() => dispatch(addToCart(index[1]))}>
            Ajouter au panier
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
