import { useContext } from "react";
import MainContext from "../MainContext";
import { moneyFormat } from "../helpers";

function Product({ product }) {
  const {
    productAmount,
    setProductAmount,
    setCurrentMoney,
    currentMoney,
    startedMoney,
    currentShoppingAmount,
  } = useContext(MainContext);

  const onProduct = productAmount.find((p) => p.id === product.id);

  const addBasket = () => {
    const checkBasket = productAmount.find((p) => p.id === product.id);
    if (checkBasket) {
      checkBasket.amount += 1;

      setProductAmount([
        ...productAmount.filter((p) => p.id !== product.id),
        checkBasket,
      ]);
    } else {
      setProductAmount([
        ...productAmount,
        {
          id: product.id,
          amount: 1,
        },
      ]);
    }
  };

  const removeBasket = () => {
    const currentBasket = productAmount.find((p) => p.id === product.id);
    const basketWithoutCurrent = productAmount.filter(
      (p) => p.id !== product.id
    );
    console.log(basketWithoutCurrent);
    console.log(currentBasket);
    currentBasket.amount -= 1;
    if (currentBasket.amount === 0) {
      setProductAmount([...basketWithoutCurrent]);
    } else {
      setProductAmount([...basketWithoutCurrent, currentBasket]);
    }
  };

  return (
    <div className="product" key={product.name}>
      <div className="image">
        <img src={product.image} alt="" />
      </div>
      <div className="name">
        <h5>{product.name}</h5>
      </div>

      <div className="price">
        <span>$ {moneyFormat(product.price)}</span>
      </div>

      <div className="product-buttons">
        <button className="sell" onClick={removeBasket}>
          Sat
        </button>
        <span className="count">{(onProduct && onProduct.amount) || 0}</span>
        <button className="buy" onClick={addBasket}>
          Satın Al
        </button>
      </div>
    </div>
  );
}
export default Product;
