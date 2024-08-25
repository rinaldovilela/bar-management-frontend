// src/app/components/AddTableForm.tsx

import React, { useState } from "react";
import { addTable } from "../../lib/api";

interface AddTableFormProps {
  onTableAdded: () => void;
}

const AddTableForm: React.FC<AddTableFormProps> = ({ onTableAdded }) => {
  const [name, setName] = useState("");
  const [seats, setSeats] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await addTable({ name, seats });
      setName("");
      setSeats(0);
      setError(null);
      onTableAdded(); // Chama a função de callback para atualizar a lista de mesas
    } catch (err) {
      setError("Failed to add table");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a New Table</h2>
      <div>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Seats:
          <input
            type="number"
            value={seats}
            onChange={(e) => setSeats(Number(e.target.value))}
            required
          />
        </label>
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit">Add Table</button>
    </form>
  );
};

export default AddTableForm;
