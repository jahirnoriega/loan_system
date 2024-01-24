import { useState, useEffect } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import { moneyFormat, totalPayment } from "./helpers";

function App() {
  const [quantity, setQuantity] = useState(10000);
  const [months, setMonths] = useState(6);
  const [total, setTotal] = useState(0);
  const [payMonth, setPayMonth] = useState(0);

  useEffect(() => {
    const reultTotalPayment = totalPayment(quantity, months);
    setTotal(reultTotalPayment);
  }, [quantity, months]);

  useEffect(() => {
    setPayMonth(total / months);
  }, [months, total]);

  const MIN = 0;
  const MAX = 20000;
  const STEP = 100;

  function handleChange(e) {
    //Con el '+' se convierte el string a un numero
    setQuantity(+e.target.value);
  }
  function handleClickMinus() {
    const value = quantity - STEP;
    if (value < 0) {
      alert("The quantity has reached the minimum.");
      return;
    }
    setQuantity(value);
  }
  function handleClickPlus() {
    const value = quantity + STEP;
    if (value > 20000) {
      alert("The quantity has reached the maximum.");
      return;
    }
    setQuantity(value);
  }

  return (
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10 rounded-lg">
      <Header />
      <div className="flex justify-between my-14">
        <Button operator="-" fn={handleClickMinus} />
        <Button operator="+" fn={handleClickPlus} />
      </div>
      <input
        type="range"
        name="money-range"
        id="money-range"
        className="w-full h-6 my-10 bg-gray-200 accent-orange-500 hover:accent-orange-600"
        onChange={handleChange}
        min={MIN}
        max={MAX}
        step={STEP}
        value={quantity}
      />

      <p className="text-center my-8 text-5xl font-extrabold text-blue-600">
        {moneyFormat(quantity)}
      </p>
      <h2 className="text-2xl font-extrabold text-gray-500 text-center">
        Choose a <span className="text-blue-600">payment</span> term.
      </h2>

      <select
        className="mt-5 w-full p-2 bg-white border-gray-200 rounded-lg text-center text-xl font-bold text-gray-700"
        value={months}
        onChange={(e) => setMonths(+e.target.value)}
      >
        <option value="6">6 Months</option>
        <option value="12">12 Months</option>
        <option value="24">24 Months</option>
      </select>

      <div className="my-5 space-y-3 bg-gray-50 p-5 rounded-lg">
        <h2 className="text-2xl font-extrabold text-gray-500 text-center">
          <span className="text-blue-600">Payment </span> summary
        </h2>
        <p className="text-xl text-gray-500 text-center font-bold">
          {months} Months
        </p>
        <p className="text-xl text-gray-500 text-center font-bold">
          {moneyFormat(total)} Total Payment
        </p>
        <p className="text-xl text-gray-500 text-center font-bold">
          {moneyFormat(payMonth)} Monthly
        </p>
      </div>
    </div>
  );
}

export default App;
