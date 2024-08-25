// src/lib/api.ts

const API_BASE_URL = "http://localhost:5000/api"; // URL do backend

export async function fetchTables() {
  const response = await fetch(`${API_BASE_URL}/tables`);
  if (!response.ok) {
    throw new Error("Failed to fetch tables");
  }
  return response.json();
}

export async function addTable(table: { name: string; seats: number }) {
  const response = await fetch(`${API_BASE_URL}/tables`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(table),
  });
  if (!response.ok) {
    throw new Error("Failed to add table");
  }
  return response.json();
}

// Adicione outras funções conforme necessário
