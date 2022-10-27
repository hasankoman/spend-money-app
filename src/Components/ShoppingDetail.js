import { useContext } from "react";
import MainContext from "../MainContext";
import { moneyFormat } from "../helpers";
import { useEffect } from "react";

function ShoppingDetail({ productAmount, products }) {
  const {
    setProductAmount,
    currentShoppingAmount,
    setCurrentMoney,
    startedMoney,
  } = useContext(MainContext);

  const resetProductAmount = () => {
    setProductAmount([]);
  };

  useEffect(() => {
    console.log("xd");
    setCurrentMoney(startedMoney - currentShoppingAmount);
  }, [currentShoppingAmount]);

  return (
    <div className=" container">
      <div className="shopping-detail">
        <header>
          <h5>Alışveriş Detayları</h5>
        </header>
        <section className="shopping">
          {productAmount.map((product, index) => {
            const onProduct = products.find((p) => p.id === product.id);
            return (
              <div key={index}>
                <p>
                  {onProduct.name}{" "}
                  <span className="amount">x{product.amount}</span>
                </p>
              </div>
            );
          })}
        </section>
        <footer className="summary">
          <button className="reset" onClick={resetProductAmount}>
            Sepeti Sıfırla
          </button>
          <p>Toplam: $ {moneyFormat(currentShoppingAmount)}</p>
        </footer>
      </div>
    </div>
  );
}
export default ShoppingDetail;
