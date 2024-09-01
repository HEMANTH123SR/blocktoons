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
