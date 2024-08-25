// src/app/page.tsx
"use client";
import React, { useEffect, useState } from "react";
import { fetchTables } from "../lib/api";
import AddTableForm from "./components/AdicionarMesaForm";

const HomePage = () => {
  const [tables, setTables] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadTables = async () => {
      try {
        const tablesData = await fetchTables();
        setTables(tablesData);
      } catch (error) {
        setError("Error fetching tables");
      }
    };

    loadTables();
  }, []);

  // Função de callback para atualizar a lista de mesas
  const handleTableAdded = async () => {
    try {
      const tablesData = await fetchTables();
      setTables(tablesData);
    } catch (error) {
      setError("Error fetching tables");
    }
  };

  return (
    <div>
      <h1>Tables</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {tables.map((table, index) => (
          <li key={index}>
            {table.name} - {table.seats} seats
          </li>
        ))}
      </ul>
      <AddTableForm onTableAdded={handleTableAdded} />
    </div>
  );
};

export default HomePage;
