import "./ImcTable.css";

const ImcTable = ({ data, imc, info, infoClass, onBack }) => {
  return (
    <div className="result-container">
      <p id="imc-num">seu imc: <span className="imc-class">{imc}</span></p>
      <p id="imc-info">situacao atual: <span>{info}</span></p>
      <h3>sua classificacao atual: <span>{infoClass}</span></h3>

      <div className="imc-table">
        <div className="table-header">
          <h4>IMC</h4>
          <h4>Classificação</h4>
          <h4>Obesidade</h4>
        </div>

        {data.map((item) => (
          <div className="table-data" key={item.classification}>
            <p>{item.min} - {item.max}</p>
            <p>{item.classification}</p>
            <p>{item.obesity}</p>
          </div>
        ))}
      </div>

      <button id="back-btn" onClick={onBack}>
        voltar
      </button>
    </div>
  );
};

export default ImcTable;


