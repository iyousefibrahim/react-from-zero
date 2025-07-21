import { useState } from "react";


function App() {
  return <Counter />;
}

function Counter() {
  const [count, setcount] = useState(0);
  const [step, setStep] = useState(1);
  const date = new Date("may 21 2030");
  date.setDate(date.getDate() + count);

  // function handleP() {
  //   if (count >= 1) {
  //     setcount(s => s - 1);
  //   }
  // }

  // function handleN() {
  //   setcount(s => s + 1);
  // }
  return (
    <>

      <div>
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>

      <div>
        <button onClick={() => setcount((c) => c - step)}>-</button>
        <span>Count: {count}</span>
        <button onClick={() => setcount((c) => c + step)}>+</button>
      </div>
      <p>
        <span>{count === 0 ? "Today is " : count > 0 ? `${count} days from today is ` : `${Math.abs(count)} days ago was `}</span>
        <span>{date.toDateString()}</span>
      </p>
    </>
  );
}

export default App;