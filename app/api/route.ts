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

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    
    // Pagination
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const skip = (page - 1) * limit;

    // Filtering
    const status = searchParams.get('status');
    const tag = searchParams.get('tag');
    const search = searchParams.get('search');

    let query: any = {};

    if (status) {
      query.status = status;
    }

    if (tag) {
      query.tags = tag;
    }

    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { author: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ];
    }

    const total = await WebToonModule.countDocuments(query);
    const webtoons = await WebToonModule.find(query)
      .sort({ lastUpdated: -1 })
      .skip(skip)
      .limit(limit)
      .select('title author coverImage tags status description rating viewCount likeCount lastUpdated');

    return NextResponse.json({
      success: true,
      count: webtoons.length,
      total,
      page,
      totalPages: Math.ceil(total / limit),
      data: webtoons
    }, { status: 200 });

  } catch (error: any) {
    console.error("Error fetching WebToons:", error);
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}