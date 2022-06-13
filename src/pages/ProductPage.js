import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { hommeProduct } from "../data/productData";
import { useDispatch } from "react-redux";
import { addToCart, updateQuantity } from "../redux/redux";

const ProductPage = () => {
  const [productData, setProductData] = useState();
  const [size, setSize] = useState();
  const [added, setAdded] = useState();
  let quantity = 0;
  let { slug } = useParams();
  const dispatch = useDispatch();

  const index = slug.split("-");
  useEffect(() => {
    if (index[0] == "homme")
      setProductData(hommeProduct.filter((n) => n.id == index[1]));
  }, []);

  const handleAddToCart = () => {
    quantity++;

    if (quantity > 1) dispatch(updateQuantity([index[1], quantity]));
    else dispatch(addToCart([index[1], size, quantity]));
  };

  return (
    <div className="displayProductPage">
      {productData && (
        <div className="productContainer">
          <div className="productImage">
            <img src={productData[0].img} alt="" />
          </div>
          <div className="productDescription">
            <h1>{productData[0].name}</h1>
            <p>Choisir la taille :</p>
            <select onChange={(e) => setSize(e.target.value)}>
              <option>38</option>
              <option>39</option>
              <option>40</option>
              <option>41</option>
              <option>42</option>
              <option>43</option>
              <option>44</option>
              <option>45</option>
              <option>46</option>
            </select>
            <button onClick={() => handleAddToCart()}>Ajouter au panier</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
