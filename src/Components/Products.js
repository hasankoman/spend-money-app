import { useContext } from "react";
import Product from "./Product";
import MainContext from "../MainContext";

function Products() {
  const { products } = useContext(MainContext);
  return (
    <div className="products-container container">
      {products.map((product) => {
        return <Product product={product} />;
      })}
    </div>
  );
}

export default Products;
