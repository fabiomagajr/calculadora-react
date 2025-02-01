import { useState } from "react";

function Calculadora() {
  const [valor1, setValor1] = useState("");
  const [valor2, setValor2] = useState("");
  const [operacao, setOperacao] = useState("+");
  const [resultado, setResultado] = useState(null);

  function calcular() {
    const num1 = parseFloat(valor1);
    const num2 = parseFloat(valor2);
    let res;

    switch (operacao) {
      case "+":
        res = num1 + num2;
        break;
      case "-":
        res = num1 - num2;
        break;
      case "*":
        res = num1 * num2;
        break;
      case "/":
        res = num2 !== 0 ? num1 / num2 : "Erro: divisão por zero";
        break;
      default:
        res = "Operação inválida";
    }

    setResultado(res);
  }

  return (
    <div>
      <h2>Calculadora</h2>
      <input 
        type="number" 
        value={valor1} 
        onChange={(e) => setValor1(e.target.value)} 
        placeholder="Valor 1" 
      />
      <select value={operacao} onChange={(e) => setOperacao(e.target.value)}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input 
        type="number" 
        value={valor2} 
        onChange={(e) => setValor2(e.target.value)} 
        placeholder="Valor 2" 
      />
      <button onClick={calcular}>Calcular</button>
      {resultado !== null && <h3>Resultado: {resultado}</h3>}
    </div>
  );
}

export default Calculadora;
