// src/app/api/tables/route.ts

import { NextResponse } from "next/server";
import axios from "axios";

const API_URL = "http://localhost:5000/api/tables";

// Função para buscar mesas
export async function GET() {
  try {
    const response = await axios.get(API_URL);
    return NextResponse.json(response.data);
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}

// Função para adicionar mesa
export async function POST(request: Request) {
  try {
    const data = await request.json();
    await axios.post(API_URL, data);
    return NextResponse.json({ message: "Table added" });
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}
