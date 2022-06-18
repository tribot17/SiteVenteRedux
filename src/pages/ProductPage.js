import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { femmeProduct, hommeProduct } from "../data/productData";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateQuantity } from "../redux/redux";

const ProductPage = () => {
  const [productData, setProductData] = useState();
  const [size, setSize] = useState();
  const [added, setAdded] = useState(false);
  const [sizeError, setSizeError] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const panier = useSelector((state) => state.panier);
  let { slug } = useParams();
  const dispatch = useDispatch();

  const index = slug.split("-");
  useEffect(() => {
    if (index[0] == "homme")
      setProductData(hommeProduct.filter((n) => n.id == index[1]));
    else setProductData(femmeProduct.filter((n) => n.id == index[1]));

    panier.map((n) => {
      if (n.id === index[1]) setQuantity(n.quantity);
    });
  }, []);

  const handleAddToCart = () => {
    let temp = quantity + 1;
    setQuantity(quantity + 1);

    if (size != undefined) {
      if (temp > 1) dispatch(updateQuantity([index[1], temp]));
      else dispatch(addToCart([index[1], size, temp]));

      setAdded(true);
      setTimeout(() => {
        setAdded(false);
      }, 5000);

      setSizeError(false);
    } else {
      setSizeError(true);
    }
  };

  return (
    <div className="displayProductPage">
      {added && (
        <div className="addToCartPopUp">
          <p>Prduit ajouté</p>
          <p>Quantité : {quantity}</p>
          <p>Taille : {size}</p>
        </div>
      )}
      {productData && (
        <div className="productContainer">
          <div className="productImage">
            <img src={productData[0].img} alt="" />
          </div>
          <div className="productDescription">
            <h1>{productData[0].name}</h1>
            <br />
            <p>Genre : {productData[0].genre}</p>
            <br />
            <p>Choisir la taille :</p>
            <select onChange={(e) => setSize(e.target.value)}>
              <option>Taille</option>
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
            {sizeError && <p>Vous devez entrer une taille</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
