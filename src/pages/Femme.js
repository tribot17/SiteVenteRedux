import React from "react";
import DisplayProduct from "../components/DisplayProduct";
import { femmeProduct, promotionFemme } from "../data/productData";

const Femme = () => {
  return (
    <div className="hommePage">
      <div className="promotionListing">
        <h3>Meilleures ventes</h3>

        <div className="promotionContainer">
          {promotionFemme &&
            promotionFemme.map((n, i) => (
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
        <h3>Produit Femme</h3>
        <div className="productHommeContainer">
          {femmeProduct &&
            femmeProduct.map((n, i) => (
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

export default Femme;
