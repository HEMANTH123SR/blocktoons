import { NextResponse, NextRequest } from "next/server";
import { connectDB } from "@/db/index";
import { WebToonModule } from "@/db/webtoon.module";

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    // Fetch the 20 most popular WebToons based on viewCount
    const webToons = await WebToonModule.find({})
      .sort({ viewCount: -1 }).limit(8) // Sort by viewCount in descending order // Convert Mongoose documents to plain JavaScript objects

    return NextResponse.json(
      { success: true, data: webToons },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error fetching popular WebToons:", error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
