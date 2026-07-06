import { useState } from 'react';
import './App.css';
import ImcCalc from './components/ImcCalc';
import ImcTable from './components/ImcTable';
import data from './data/data';

function App() {
  const [imc, setImc] = useState(null);
  const [info, setInfo] = useState(null);
  const [infoClass, setInfoClass] = useState(null);
  

  const calcImc = (imcValue) => {
    const imcNumber = Number(imcValue);
    setImc(imcNumber.toFixed(1));

    const match = data.find(
      (item) => imcNumber >= item.min && imcNumber <= item.max
    );

    if (match) {
      setInfo(match.info);
      setInfoClass(match.classification);
    }
  };

  const handleBack = () => {
    setImc(null);
    setInfo(null);
    setInfoClass(null);
  };

  return (
    <div className="container">
      {!imc ? (
        <ImcCalc calcImc={calcImc} />
      ) : (
        <ImcTable
          data={data}
          imc={imc}
          info={info}
          infoClass={infoClass}
          onBack={handleBack}
        />
      )}
    </div>
  );
}

export default App;



