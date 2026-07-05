// IMC DATA
const data = [
  {
    min: 0,
    max: 18.4,
    classification: "Menor que 18,5",
    info: "Magreza",
    obesity: "0",
  },
  {
    min: 18.5,
    max: 24.9,
    classification: "Entre 18,5 e 24,9",
    info: "Normal",
    obesity: "0",
  },
  {
    min: 25,
    max: 29.9,
    classification: "Entre 25,0 e 29,9",
    info: "Sobrepeso",
    obesity: "I",
  },
  {
    min: 30,
    max: 39.9,
    classification: "Entre 30,0 e 39,9",
    info: "Obesidade",
    obesity: "II",
  },
  {
    min: 40,
    max: 99,
    classification: "Maior que 40,0",
    info: "Obesidade grave",
    obesity: "III",
  },
];

const imctable = document.querySelector("#imc-table");
const alturainput = document.querySelector("#altura");
const pesoinput = document.querySelector("#peso");
const calcBtn = document.querySelector("#calc-btn");
const imcnumber = document.querySelector("#imc-number span");
const imcinfo = document.querySelector("#imc-info span");
const cleanBtn = document.querySelector("#clean-btn");
const backBtn = document.querySelector("#back-btn");
const calcContainer = document.querySelector("#calc-container");
const resultContainer = document.querySelector("#result-container");

export default data;
