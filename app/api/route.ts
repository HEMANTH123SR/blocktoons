import { NextResponse, NextRequest } from "next/server";
import { connectDB } from "@/db/index";
import { WebToonModule } from "@/db/webtoon.module";

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = await request.json();
    const {
      title,
      author,
      coverImage,
      backgroundImage,
      tags,
      status,
      description,
      isNew,
      isTrending,
      lastUpdated,
      chapters,
      createdBy,
    } = body;

    const newWebToon = new WebToonModule({
      title,
      author,
      coverImage,
      backgroundImage,
      tags,
      status,
      description,
      isNew,
      isTrending,
      lastUpdated,
      chapters,
      createdBy,
    });

    const savedWebToon = await newWebToon.save();

    return NextResponse.json(
      { success: true, data: savedWebToon },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error creating WebToon:", error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 400 }
    );
  }
}
