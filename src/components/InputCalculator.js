import React, { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleNum1Change = (e) => {
    setNum1(e.target.value);
  };

  const handleNum2Change = (e) => {
    setNum2(e.target.value);
  };

  const handleAdd = () => {
    if (!num1 || !num2) {
      setErrorMessage("Поля не должны быть пустыми");
      setResult("");
    } else {
      setErrorMessage("");
      setResult(parseFloat(num1) + parseFloat(num2));
    }
  };

  const handleSubtract = () => {
    if (!num1 || !num2) {
      setErrorMessage("Поля не должны быть пустыми");
      setResult("");
    } else {
      setErrorMessage("");
      setResult(parseFloat(num1) - parseFloat(num2));
    }
  };

  const handleMultiply = () => {
    if (!num1 || !num2) {
      setErrorMessage("Поля не должны быть пустыми");
      setResult("");
    } else {
      setErrorMessage("");
      setResult(parseFloat(num1) * parseFloat(num2));
    }
  };

  const handleDivide = () => {
    if (!num1 || !num2) {
      setErrorMessage("Поля не должны быть пустыми");
      setResult("");
    } else if (parseFloat(num2) === 0) {
      setErrorMessage("На ноль делить нельзя");
      setResult("");
    } else {
      setErrorMessage("");
      setResult(parseFloat(num1) / parseFloat(num2));
    }
  };

  return (
    <div>
      <h2>Калькулятор</h2>
      <input
        type="number"
        placeholder="Введите первое число"
        value={num1}
        onChange={handleNum1Change}
      />
      <input
        type="number"
        placeholder="Введите второе число"
        value={num2}
        onChange={handleNum2Change}
      />
      <div>
        <button onClick={handleAdd}>+</button>
        <button onClick={handleSubtract}>-</button>
        <button onClick={handleMultiply}>*</button>
        <button onClick={handleDivide}>/</button>
      </div>
      {errorMessage && <p className="error">{errorMessage}</p>}
      {result && <p>Результат: {result}</p>}
    </div>
  );
}

export default Calculator;






