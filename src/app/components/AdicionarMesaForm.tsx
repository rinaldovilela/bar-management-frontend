// src/app/components/AddTableForm.tsx

import React, { useState } from "react";
import { addTable } from "../../lib/api";

interface AddTableFormProps {
  onTableAdded: () => void; // Define o tipo da prop onTableAdded
}

const AddTableForm: React.FC<AddTableFormProps> = ({ onTableAdded }) => {
  const [name, setName] = useState<string>("");
  const [seats, setSeats] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await addTable({ name, seats });
      setName("");
      setSeats(0);
      setError(null);
      // Chame onTableAdded após adicionar a mesa com sucesso
      onTableAdded();
    } catch (err) {
      setError("Failed to add table");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="seats">Seats</label>
        <input
          id="seats"
          type="number"
          value={seats}
          onChange={(e) => setSeats(Number(e.target.value))}
        />
      </div>
      <button type="submit">Add Table</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default AddTableForm;
