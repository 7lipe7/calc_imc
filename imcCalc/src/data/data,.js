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

function createTable(data) {
    data.forEach((item) => {
        const tableData = document.createElement("div");
        tableData.classList.add("table-data");
        const classification = document.createElement("p");
        classification.textContent = item.classification;
        const info = document.createElement("p");
        info.textContent = item.info;
        const obesity = document.createElement("p");
        obesity.textContent = item.obesity;

        tableData.appendChild(classification);
        tableData.appendChild(info);
        tableData.appendChild(obesity);
        imctable.appendChild(tableData);
    });
}

createTable(data);


function cleaninputs() {
    alturainput.value = "";
    pesoinput.value = "";
    imcnumber.classList = "";
    imcinfo.classList = "";
}


cleanBtn.addEventListener("click", (e) => {
    e.preventDefault();
    cleaninputs();
});

function clearClasses() {
    imcnumber.classList.remove("low", "good", "medium", "high");
}

function validardigitos(value) {
    return value.replace(/[^0-9.,]/g, "");
}

[alturainput, pesoinput].forEach((EL) => {
    EL.addEventListener("input", (e) => {
        const updatedValue = validardigitos(e.target.value);
        e.target.value = updatedValue;
    });
}
);

calcBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const altura = +alturainput.value.replace(",", ".");
    const peso = +pesoinput.value.replace(",", ".");

    if (!altura || !peso) return;

    const imc = calcularimc(altura, peso);

    let info;

    data.forEach((item) => {
        if (imc >= item.min && imc <= item.max) {
            info = item.info;
        }
    });

    if (!info) return;

    imcnumber.textContent = imc;
    imcinfo.textContent = info;

    showresult();
    clearClasses();

    switch (info) {
        case "Magreza":
            imcnumber.classList.add("low");
            imcinfo.classList.add("low");
            break;

        case "Normal":
            imcnumber.classList.add("good");
            imcinfo.classList.add("good");
            break;

        case "Sobrepeso":
            imcnumber.classList.add("medium");
            imcinfo.classList.add("medium");
            break;

        case "Obesidade":
            imcnumber.classList.add("alto");
            imcinfo.classList.add("alto");

            break;

        case "Obesidade grave":
            imcnumber.classList.add("high");
            imcinfo.classList.add("high");
            break;
    }
});
function calcularimc(altura, peso) {
    const imc = peso / (altura * altura);
    return parseFloat(imc.toFixed(1)); 
}

function showresult() {
    calcContainer.classList.toggle("hide");
    resultContainer.classList.toggle("hide");
}


backBtn.addEventListener("click", () => {
    showresult();
    cleaninputs();
    clearClasses();

});  
