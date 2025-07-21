import { useState } from "react";

export default function Form({ onAddItems }) {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);

    function handleSubmit(e) {
        e.preventDefault();

        if (!description) return;

        const newItem = { description, quantity, packed: false, Id: Date.now() };

        // Clear Form
        setDescription("");
        setQuantity(1);

        // Add item
        onAddItems(newItem);

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
