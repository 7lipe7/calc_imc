import Buttons from "./Buttons";
import "./calc.css";
import { useState } from "react";
import imcData from "../data/data";

const ImcCalc = ({ calcImc }) => {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");

  const validDigits = (text) => text.replace(/[^0-9.,]/g, "");

  const validarAltura = (e) => setAltura(validDigits(e.target.value));
  const validarPeso = (e) => setPeso(validDigits(e.target.value));

  const limpaForm = (e) => {
    e.preventDefault();
    setAltura("");
    setPeso("");
  };

  
  const calcularImc = (e) => {
    e.preventDefault();

    if (!peso || !altura) return;

    const pesoFloat = +peso.replace(",", ".");
    const alturaFloat = +altura.replace(",", ".");

    if (!alturaFloat) return;

    const imcresult = (pesoFloat / (alturaFloat * alturaFloat)).toFixed(1);

    calcImc(imcresult);
  };


  const handleClickCalcular = (e) => {
    
    calcularImc(e);
  };

  return (
    <div id="calc-container">
      <h2>calculadora de imc</h2>
      <form id="imc-form">
        <div className="form-inputs">
          <div className="form-control">
            <label htmlFor="altura">altura: </label>
            <input
              type="text"
              name="altura"
              id="altura"
              placeholder="EX 1.65"
              onChange={validarAltura}
              value={altura}
            />
          </div>

          <div className="form-control">
            <label htmlFor="peso">peso: </label>
            <input
              type="text"
              name="peso"
              id="peso"
              placeholder="EX 65.5 KG"
              onChange={validarPeso}
              value={peso}
            />
          </div>

          <div className="action-Control">
            <Buttons id="calc-btn" text="calcular" action={calcularImc} />
            <Buttons id="limp-btn" text="limpar" action={limpaForm} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ImcCalc;
