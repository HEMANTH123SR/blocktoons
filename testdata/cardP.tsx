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
  imageUrls:string[]
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
        imageCount: 2,
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
        imageCount: 2,
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
  {
    _id: "3",
    title: "Space Explorers",
    author: "Sam Lee",
    coverImage: "/path/to/image3.png",
    backgroundImage: "background3.jpg",
    tags: ["sci-fi", "adventure"],
    status: "Ongoing",
    description: "Journey through the cosmos with the brave Space Explorers.",
    rating: 4.7,
    viewCount: 1800,
    likeCount: 2,
    isNew: true,
    isTrending: true,
    lastUpdated: "2024-08-02",
    chapters: [
      {
        _id: "ch3",
        chapterNumber: 1,
        title: "To the Stars",
        publishedDate: "2024-07-11",
        imageCount: 3,
      },
    ],
    createdBy: {
      _id: "user3",
      username: "Sam Lee",
      email: "sam@example.com",
      bio: "Aspiring astronaut.",
      profileImage: "profile3.jpg",
    },
  },
  {
    _id: "4",
    title: "Vampire's Secret",
    author: "Emily Davis",
    coverImage: "/path/to/image4.png",
    backgroundImage: "background4.jpg",
    tags: ["romance", "supernatural"],
    status: "Ongoing",
    description: "A forbidden love between a human and a vampire.",
    rating: 4.6,
    viewCount: 2200,
    likeCount: 2,
    isNew: false,
    isTrending: false,
    lastUpdated: "2024-08-10",
    chapters: [
      {
        _id: "ch4",
        chapterNumber: 1,
        title: "The Encounter",
        publishedDate: "2024-06-20",
        imageCount: 2,
      },
    ],
    createdBy: {
      _id: "user4",
      username: "Emily Davis",
      email: "emily@example.com",
      bio: "Supernatural romance enthusiast.",
      profileImage: "profile4.jpg",
    },
  },
  {
    _id: "5",
    title: "Cyber City Chronicles",
    author: "Alex Brown",
    coverImage: "/path/to/image5.jpeg",
    backgroundImage: "background5.jpg",
    tags: ["cyberpunk", "thriller"],
    status: "Ongoing",
    description: "A futuristic city where secrets lurk in the shadows.",
    rating: 4.9,
    viewCount: 2500,
    likeCount: 2,
    isNew: false,
    isTrending: true,
    lastUpdated: "2024-08-01",
    chapters: [
      {
        _id: "ch5",
        chapterNumber: 1,
        title: "The Hacker",
        publishedDate: "2024-07-05",
        imageCount: 2,
      },
    ],
    createdBy: {
      _id: "user5",
      username: "Alex Brown",
      email: "alex@example.com",
      bio: "Living in the future.",
      profileImage: "profile5.jpg",
    },
  },
  {
    _id: "6",
    title: "Ninja Warrior",
    author: "Chris Green",
    coverImage: "/path/to/image6.jpg",
    backgroundImage: "background6.jpg",
    tags: ["action", "martial arts"],
    status: "Completed",
    description: "Follow the journey of a young ninja mastering his skills.",
    rating: 4.4,
    viewCount: 3000,
    likeCount: 2,
    isNew: false,
    isTrending: false,
    lastUpdated: "2024-08-05",
    chapters: [
      {
        _id: "ch6",
        chapterNumber: 1,
        title: "The Training",
        publishedDate: "2024-06-15",
        imageCount: 2,
      },
    ],
    createdBy: {
      _id: "user6",
      username: "Chris Green",
      email: "chris@example.com",
      bio: "Martial arts expert.",
      profileImage: "profile6.jpg",
    },
  },
  {
    _id: "7",
    title: "Guardian of the Forest",
    author: "Anna White",
    coverImage: "/path/to/image7.png",
    backgroundImage: "background7.jpg",
    tags: ["fantasy", "drama"],
    status: "Ongoing",
    description: "A young girl destined to protect the ancient forest.",
    rating: 4.7,
    viewCount: 1700,
    likeCount: 2,
    isNew: true,
    isTrending: false,
    lastUpdated: "2024-08-01",
    chapters: [
      {
        _id: "ch7",
        chapterNumber: 1,
        title: "The Calling",
        publishedDate: "2024-07-01",
        imageCount: 2,
      },
    ],
    createdBy: {
      _id: "user7",
      username: "Anna White",
      email: "anna@example.com",
      bio: "Protector of nature.",
      profileImage: "profile7.jpg",
    },
  },
];

export const newWebToons: WebToonInterface[] = [];
