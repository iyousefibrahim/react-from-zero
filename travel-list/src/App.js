import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "headphones", quantity: 1, packed: true },
];

function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>Far Away ✈️</h1>
}


function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, Id: Date.now() };

    // Clear Form
    setDescription("");
    setQuantity(1);


  }
  return <div className="add-form">
    <h3>What do you need for your trip?</h3>
    <form onSubmit={handleSubmit}>

      <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => {
          return <option value={num} key={num}>{num}</option>
        })}
      </select>

      <input type="text" placeholder="Item.." value={description} onChange={(e) => { setDescription(e.target.value) }} />
      <button>Add</button>
    </form>
  </div>
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems && initialItems.map((item) => {
          return <Item item={item} key={item.id} />
        })}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>{item.description} {item.quantity}</span>
      <button>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>You have X item on your list, and you have already packed X (X%)</em>
    </footer>
  );
}

export default App;