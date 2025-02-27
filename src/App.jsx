import './App.css';
import { useState } from 'react';


function App() {
  const [billAmount, setBillAmount] = useState(0);
  const [tipPercent, setTipPercent] = useState(1);
  const [people, setPeople] = useState(2);

  const tipAmount = billAmount * tipPercent / 100
  const total = billAmount + (billAmount * tipPercent) / 100
  const split = total / people
  
  const increaseTip = () => {
    setTipPercent(tipPercent + 1);
    console.log(tipPercent)
  };

  const decreaseTip = () => {
    if (tipPercent > 0) {
      setTipPercent(tipPercent - 1);
    }
  };

  return (
    <div className="App">
      <h1>Tip Calculator</h1>
      <label>Enter Bill Amount:</label>
      <input 
        placeholder='Bill Amount'
        type='number'
        value={billAmount}
        // use parseInt or parseFloat to convert to number
        onInput={(e) => setBillAmount(parseFloat(e.target.value))}
        // onInput changes the values right away as your typing
        // or use onChange={} only changes when you're done entering your input
      />
      <label>Enter Amount of People Splitting:</label>
      <input
        placeholder='Split'
        type='number'
        value={people}
        onInput={(e) => setPeople(parseFloat(e.target.value))}
      />
      <div>
        <div>
          <label>Enter Tip Amount: </label>
          <button onClick={increaseTip}>+</button>
          <input 
          placeholder='Tip'
          type='number'
          value={tipPercent}
          onInput={(e) => setTipPercent(parseFloat(e.target.value))}
          />
          <button onClick={decreaseTip}>-</button>
        </div>
        <p>Your Tip Total: ${tipAmount.toFixed(2)}</p>
        <p>Total for Each Person: ${split.toFixed(2)}</p>
      </div>
    </div>
  )
};

export default App;
