import './Button.css'

const Buttons = ({ id, text, action }) => {
  const handleAction = (e) =>{
    action(e)
  }
  return (
    <div>
      <button id={id} onClick={handleAction}>{text}</button>
    </div>
  )
}

export default Buttons