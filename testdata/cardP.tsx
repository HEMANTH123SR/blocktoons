export interface WebToonInterface {
  _id: string;
  title: string;
  author: string;
  coverImage: string;
  backgroundImage: string;
  tags: string[];
  status: "Ongoing" | "Completed" | "Cancelled";
  description: string;
  rating: number;
  viewCount: number;
  likeCount: number;
  isNew: boolean;
  isTrending: boolean;
  lastUpdated: string;
  chapters: Chapter[];
  createdBy: UserType;
}

type Chapter = {
  _id: string;
  chapterNumber: number;
  title: string;
  publishedDate: string;
  imageCount: number;
  imageUrls: string[];
};

type UserType = {
  _id: string;
  username: string;
  email: string;
  bio: string;
  profileImage: string;
};

export const webToons: WebToonInterface[] = [
  {
    _id: "1",
    title: "Mystery of the Lost Island",
    author: "John Doe",
    coverImage: "/path/to/image1.jpg",
    backgroundImage: "background1.jpg",
    tags: ["mystery", "adventure"],
    status: "Ongoing",
    description:
      "Solo Leveling follows Sung Jin-Woo, an E-rank hunter in a world where portals connect Earth to dangerous dungeons filled with monsters. After barely surviving a deadly double dungeon, Jin-Woo discovers a mysterious system that grants him the ability to level up infinitely, something unheard of in the hunter world. As he grows stronger, he transforms from the weakest hunter into a force capable of taking on the world's most powerful beings, uncovering dark secrets along the way.",
    rating: 4.5,
    viewCount: 1500,
    likeCount: 2,
    isNew: true,
    isTrending: false,
    lastUpdated: "2024-08-01",
    chapters: [
      {
        _id: "ch1",
        chapterNumber: 1,
        title: "The Beginning",
        publishedDate: "2024-07-10",
        imageCount: 3,
        imageUrls: ["/test.jpg", "/test.jpg", "/test.jpg"],
      },
    ],
    createdBy: {
      _id: "user1",
      username: "John Doe",
      email: "john@example.com",
      bio: "A passionate storyteller.",
      profileImage: "profile1.jpg",
    },
  },
  {
    _id: "2",
    title: "Legend of the Dragon King",
    author: "Jane Smith",
    coverImage: "/path/to/image2.png",
    backgroundImage: "background2.jpg",
    tags: ["fantasy", "action"],
    status: "Completed",
    description: `
Legend of the Dragon King is a popular webtoon adapted from the Chinese light novel of the same name. The story follows Tang Wulin, a young boy with a deep connection to the dragons of legend. Set in a world where humanity coexists with powerful martial spirits, Wulin dreams of becoming a powerful soul master. However, his journey is anything but ordinary, as he discovers an ancient bloodline within himself—the lineage of the Dragon King.`,
    rating: 4.8,
    viewCount: 200,
    likeCount: 2,
    isNew: false,
    isTrending: true,
    lastUpdated: "2024-07-15",
    chapters: [
      {
        _id: "ch2",
        chapterNumber: 1,
        title: "The Awakening",
        publishedDate: "2024-06-05",
        imageCount: 3,
        imageUrls: ["/test.jpg", "/test.jpg", "/test.jpg"],
      },
    ],
    createdBy: {
      _id: "user2",
      username: "Jane Smith",
      email: "jane@example.com",
      bio: "Lover of epic fantasies.",
      profileImage: "profile2.jpg",
    },
  },
];
