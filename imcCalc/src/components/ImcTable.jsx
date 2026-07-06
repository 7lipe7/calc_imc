import "./ImcTable.css";

const ImcTable = ({ data, imc, info, infoClass, onBack }) => {
  const imcNumber = Number(imc);
  const matched = data.find(
    (item) => !Number.isNaN(imcNumber) && imcNumber >= item.min && imcNumber <= item.max
  );
  const levelClass = matched ? matched.colorClass : "";

  return (
    <div className="result-container">
      <p id="imc-num">
        seu imc: <span className={`imc-class ${levelClass}`}>{imc}</span>
      </p>
      <p id="imc-info">
        situacao atual: <span className={levelClass}>{info}</span>
      </p>
      <h3>
        sua classificacao atual: <span className={levelClass}>{infoClass}</span>
      </h3>

      <div className="imc-table">
        <div className="table-header">
          <h4>IMC</h4>
          <h4>Classificação</h4>
          <h4>Obesidade</h4>
        </div>

        {data.map((item) => (
          <div className={`table-data ${item.colorClass}`} key={item.classification}>
            <p>{item.min} - {item.max}</p>
            <p>{item.classification}</p>
            <p className="obesity">{item.obesity}</p>
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


