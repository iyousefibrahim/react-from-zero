import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(Id) {
    setItems((items) => items.filter((item) => item.Id !== Id));
  }

  function handleToggleItem(Id) {
    setItems((items) => items.map(item => item.Id === Id ? { ...item, packed: !item.packed } : item));
  }

  function handleClearItems() {
    if (items.length >= 1) {
      const confirmed = window.confirm('Are you sure you want to delete all of your items?')
      if (confirmed) setItems([]);
    }
  }


  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearItems={handleClearItems} />
      <Stats items={items} />
    </div>
  );
}

export default App;