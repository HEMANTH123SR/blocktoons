
export interface Chapter {
  chapterNumber: number;
  title: string;
  publishedDate: string;
  imageCount: number;
  imageUrls?: string[];  // Optional property
}



  
  export type UserType = {
    userName: String;
    userEmail: String;
    userBio: String;
    userId: String;
    UserProfileImage: String;
  };
  
  export interface WebToonInterface {
    likes: {
      likedBy: string[];
      likeCount: number;
    };
    _id: string;
    webToonName: string;
    author: string;
    backgroundImage: string;
    coverImage: string;
    tags: string;
    status: "Ongoing" | "Completed" | "Cancelled";
    description: string;
    views: {
      count: number;
      viewedBy: string[];
    };
    reviews: {
      review: number;
      reviewBy: string;
    }[];
    comments: {
      comment: string;
      commentBy: string;
      createdAt: Date;
    }[];
    thanksReceives: [{ userId: String; amount: number }];
    savedBy: string[];
    chapters: Chapter[];
    createdAt: string;
    updatedAt: string;
    createdBy: UserType;
    __v: number;
  }