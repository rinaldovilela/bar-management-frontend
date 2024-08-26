// src/lib/api.ts

const API_URL = "/api/tables"; // Caminho relativo à API do Next.js

// Atualize o tipo para corresponder aos dados que você está enviando
export interface Table {
  name: string;
  seats: number;
}

export async function fetchTables() {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error("Failed to fetch tables");
  return response.json();
}

export async function addTable(table: Table) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(table),
  });
  if (!response.ok) throw new Error("Failed to add table");
  return response.json();
}
