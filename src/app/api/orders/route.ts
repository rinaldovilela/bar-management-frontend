import { NextResponse } from "next/server";
import { connectToDatabase } from "@/utils/database"; // Certifique-se de que esta função exista e configure a conexão com o banco de dados

export async function POST(request: Request) {
  const { tableId, items, status } = await request.json();
  const db = await connectToDatabase();

  try {
    const newOrder = await db
      .collection("orders")
      .insertOne({ tableId, items, status });
    return NextResponse.json(newOrder);
  } catch (error) {
    return NextResponse.json(
      { error: "Error creating order" },
      { status: 500 }
    );
  }
}
