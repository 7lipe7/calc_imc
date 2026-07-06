import './Button.css'

const Buttons = ({ id, text, action }) => {
  const handleAction = (e) => {
    if (typeof action === 'function') action(e);
  };

  return (
    <div>
      <button id={id} onClick={handleAction} type="button">
        {text}
      </button>
    </div>
  );
};


export default Buttons