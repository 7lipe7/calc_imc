 import Buttons from "./Buttons"
 import "./calc.css"
 import { useState } from "react"



const ImcCalc = () => {

  const [peso ,setpeso] = useState(" ");
  const [altura ,setaltura] = useState(" ");

  const limpaForm = (e) =>{
    e.preventDefault()
    setaltura(" ")
     setpeso(" ")
  }
   
   

  return (
    <div id="calc-container">
      <h2>
        calculadora de imc
      </h2>
      <form  id="imc-form">
        <div className="form-inputs">

          <div className="form-control">
            <label htmlFor="altura" >altura: </label>
            <input type="text" name="altura"  id="altura"   placeholder="EX 1.65" onChange={(e) => setaltura(e.target.value)} value={altura}/>
          </div>

           <div className="form-control">
            <label htmlFor="peso" >peso: </label>
            <input type="text" name="peso"  id="peso"   placeholder="EX 65.5 KG" onChange={(e) => setpeso(e.target.value)} value={peso}/>
          </div>
         <div className="action-Control">
          
          <Buttons id="calc-btn" text="calcular" />
            <Buttons id="limp-btn" text="limpar" action={limpaForm} />

         </div>
          
        </div>

      </form>
    
    </div>
  )
}

export default ImcCalc
