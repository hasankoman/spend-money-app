import Money from "./Components/Money";
import Products from "./Components/Products";
import ProductsData from "./products.json";
import { useEffect, useState } from "react";
import MainContext from "./MainContext";
import ShoppingDetail from "./Components/ShoppingDetail";
import { moneyFormat } from "./helpers";

function App() {
  const productsArray = [];
  Object.keys(ProductsData).map((key) => {
    productsArray.push(ProductsData[key]);
  });

  const [products, setProducts] = useState(productsArray);
  const [currentMoney, setCurrentMoney] = useState(126000000000);
  const [startedMoney, setStartedMoney] = useState(126000000000);
  const [currentShoppingAmount, setCurrentShoppingAmount] = useState(
    moneyFormat(0)
  );
  const [productAmount, setProductAmount] = useState([]);

  useEffect(() => {
    setCurrentShoppingAmount(
      productAmount.reduce((acc, item) => {
        return (
          acc +
          item.amount * products.find((product) => product.id === item.id).price
        );
      }, 0)
    );
  }, [productAmount]);

  const data = {
    products,
    currentMoney,
    currentShoppingAmount,
    setCurrentShoppingAmount,
    setCurrentMoney,
    startedMoney,
    productAmount,
    setProductAmount,
  };
  return (
    <>
      <MainContext.Provider value={data}>
        <main className="main">
          <Money />
          <Products />
          <ShoppingDetail productAmount={productAmount} products={products} />
        </main>
      </MainContext.Provider>
    </>
  );
}

export default App;
