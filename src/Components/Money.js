import MainContext from "../MainContext";
import { useContext } from "react";
import { moneyFormat } from "../helpers";

function Money() {
  const { currentMoney, currentShoppingAmount, setCurrentMoney } =
    useContext(MainContext);

  // setCurrentMoney(currentMoney - currentShoppingAmount);
  return (
    <div className="money-info">
      <p>
        Harcayacak <strong>{moneyFormat(currentMoney)}</strong> paranız kaldı!
      </p>
    </div>
  );
}
export default Money;
