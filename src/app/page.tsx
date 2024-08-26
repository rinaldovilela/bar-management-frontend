// src/app/page.tsx
"use client";
import React, { useState, useEffect } from "react";
import { fetchTables } from "../lib/api";
import AddTableForm from "./components/AdicionarMesaForm";

const Page: React.FC = () => {
  const [tables, setTables] = useState<any[]>([]);

  const fetchData = async () => {
    try {
      const data = await fetchTables();
      setTables(data);
    } catch (err) {
      console.error("Failed to fetch tables", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleTableAdded = async () => {
    await fetchData(); // Atualiza a lista após a adição de uma nova mesa
  };

  return (
    <div>
      <h1>Tables</h1>
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

export default Page;
