import React from "react";
import DisplayProduct from "../components/DisplayProduct";
import { hommeProduct, promotionHomme } from "../data/productData";

const Homme = () => {
  return (
    <div className="hommePage">
      <div className="promotionListing">
        <h3>Meilleures ventes</h3>

        <div className="promotionContainer">
          {promotionHomme &&
            promotionHomme.map((n, i) => (
              <DisplayProduct
                nom={n.name}
                prix={n.prix}
                img={n.img}
                id={n.id}
                genre={n.genre}
                key={i}
              />
            ))}
        </div>
      </div>
      <div className="productListing">
        <h3>Produit Homme</h3>
        <div className="productHommeContainer">
          {hommeProduct &&
            hommeProduct.map((n, i) => (
              <DisplayProduct
                nom={n.name}
                prix={n.prix}
                img={n.img}
                genre={n.genre}
                id={n.id}
                key={i}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Homme;
