import { NextResponse, NextRequest } from "next/server";
import { connectDB } from "@/db/index";
import { WebToonModule } from "@/db/webtoon.module";

export async function GET() {
  try {
    await connectDB();

    // Fetch the first 20 most recent WebToons
    const webToons = await WebToonModule.find({})
      .limit(20) // Limit the results to 20 documents
      .lean(); // Convert Mongoose documents to plain JavaScript objects

    return NextResponse.json(
      { success: true, data: webToons },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error fetching recent WebToons:", error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
