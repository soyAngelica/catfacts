import { catApiService } from "@/services/catApiService";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await catApiService.getCatFacts();
    if (response?.error) {
      return NextResponse.json({
        error: response.error,
      });
    }
    return NextResponse.json(response);
  } catch (err: unknown) {
    if (err instanceof Error) {
      return NextResponse.json({
        error: err.message,
      });
    }
    return NextResponse.json({
      error: "Unknown error occurred",
    });
  }
}
