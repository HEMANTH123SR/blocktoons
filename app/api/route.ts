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


    console.log("the data recived is ",body);

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

export async function GET() {
  try {
    await connectDB();

    const webToon = await WebToonModule.find({});
    console.log(webToon);
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


export async function PUT(request: NextRequest) {
  try {
    await connectDB();

    const body = await request.json();
    const { webToonId, chapters } = body;

    if (!webToonId || !chapters) {
      return NextResponse.json(
        { success: false, message: "WebToon ID and chapters are required" },
        { status: 400 }
      );
    }

    const updatedWebToon = await WebToonModule.findByIdAndUpdate(
      webToonId,
      { $push: { chapters: { $each: chapters } } },
      { new: true, runValidators: true }
    );

    if (!updatedWebToon) {
      return NextResponse.json(
        { success: false, message: "WebToon not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, data: updatedWebToon },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error updating WebToon chapters:", error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}