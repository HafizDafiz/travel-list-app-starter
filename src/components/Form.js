import { useState } from "react";
export default function Form(f) {
    const [description, setDescription] = useState("")
    const [quantity, setQuantity] = useState(1)
  
    function handleSubmit(e){
      e.preventDefault();
  
      if (!description) return;
      const newItem = {
        id: Date.now(),
        description,
        quantity,
        packed: false,
      }
      f.onAddItem(newItem);
      setDescription("");
      setQuantity(1);
    }
  
    return (
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you need to pack?</h3>
  
        <select
          name="quantity"
          className="quantity-dropdown"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
  
        <input
          type="text"
          placeholder="Item…"
          className="item-input"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
  
        <button type="submit" className="add-button">
          Add
        </button>
      </form>
    );
  }