import { NextResponse, NextRequest } from "next/server";
import { connectDB } from "@/db/index";
import { WebToonModule } from "@/db/webtoon.module";
import mongoose from "mongoose";

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);

    const id = searchParams.get("id");
console.log("the id is",id);
    if (id) {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return NextResponse.json(
          { success: false, message: "Invalid WebToon ID" },
          { status: 400 }
        );
      }
    }

    const webToon = await WebToonModule.findById(id).lean();
console.log(webToon)
    if (!webToon) {
      return NextResponse.json(
        { success: false, message: "WebToon not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: webToon }, { status: 200 });
  } catch (error: any) {
    console.error("Error fetching WebToons:", error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
