import { WebToonInterface } from "@/lib/types";
export const webToons: WebToonInterface[] = [
  {
    likes: {
      likedBy: ["user1", "user2"],
      likeCount: 2,
    },
    _id: "1",
    webToonName: "Mystery of the Lost Island",
    author: "John Doe",
    backgroundImage: "background1.jpg",
    coverImage: "/path/to/image1.jpg",
    tags: "mystery, adventure",
    status: "Ongoing",
    description:
      "Solo Leveling follows Sung Jin-Woo, an E-rank hunter in a world where portals connect Earth to dangerous dungeons filled with monsters. After barely surviving a deadly double dungeon, Jin-Woo discovers a mysterious system that grants him the ability to level up infinitely, something unheard of in the hunter world. As he grows stronger, he transforms from the weakest hunter into a force capable of taking on the world's most powerful beings, uncovering dark secrets along the way..",
    views: {
      count: 1500,
      viewedBy: ["user1", "user3", "user5"],
    },
    reviews: [
      {
        review: 5,
        reviewBy: "user4",
      },
    ],
    comments: [
      {
        comment: "Amazing story!",
        commentBy: "user2",
        createdAt: new Date("2024-07-21"),
      },
    ],
    thanksReceives: [{ userId: "user1", amount: 10 }],
    savedBy: ["user2", "user3"],
    chapters: [
      {
        chapterName: "The Beginning",
        chapterImages: ["chapter1_img1.jpg", "chapter1_img2.jpg"],
        chapterPublishedDate: "2024-07-10",
        chapterNumber: 1,
      },
    ],
    createdAt: "2024-07-01",
    updatedAt: "2024-08-01",
    createdBy: {
      userName: "John Doe",
      userEmail: "john@example.com",
      userBio: "A passionate storyteller.",
      userId: "user1",
      UserProfileImage: "profile1.jpg",
    },
    __v: 0,
  },
  {
    likes: {
      likedBy: ["user2", "user3"],
      likeCount: 2,
    },
    _id: "2",
    webToonName: "Legend of the Dragon King",
    author: "Jane Smith",
    backgroundImage: "background2.jpg",
    coverImage: "/path/to/image2.png",
    tags: "fantasy, action",
    status: "Completed",
    description: "A tale of a hero's rise to become the Dragon King.",
    views: {
      count: 2000,
      viewedBy: ["user4", "user5", "user6"],
    },
    reviews: [
      {
        review: 4,
        reviewBy: "user1",
      },
    ],
    comments: [
      {
        comment: "Epic battles!",
        commentBy: "user3",
        createdAt: new Date("2024-08-12"),
      },
    ],
    thanksReceives: [{ userId: "user2", amount: 20 }],
    savedBy: ["user1", "user4"],
    chapters: [
      {
        chapterName: "The Awakening",
        chapterImages: ["chapter2_img1.jpg", "chapter2_img2.jpg"],
        chapterPublishedDate: "2024-06-05",
        chapterNumber: 1,
      },
    ],
    createdAt: "2024-06-01",
    updatedAt: "2024-07-15",
    createdBy: {
      userName: "Jane Smith",
      userEmail: "jane@example.com",
      userBio: "Lover of epic fantasies.",
      userId: "user2",
      UserProfileImage: "profile2.jpg",
    },
    __v: 0,
  },
  {
    likes: {
      likedBy: ["user3", "user4"],
      likeCount: 2,
    },
    _id: "3",
    webToonName: "Space Explorers",
    author: "Sam Lee",
    backgroundImage: "background3.jpg",
    coverImage: "/path/to/image3.png",
    tags: "sci-fi, adventure",
    status: "Ongoing",
    description: "Journey through the cosmos with the brave Space Explorers.",
    views: {
      count: 1800,
      viewedBy: ["user2", "user3", "user6"],
    },
    reviews: [
      {
        review: 5,
        reviewBy: "user5",
      },
    ],
    comments: [
      {
        comment: "Out of this world!",
        commentBy: "user4",
        createdAt: new Date("2024-07-22"),
      },
    ],
    thanksReceives: [{ userId: "user3", amount: 15 }],
    savedBy: ["user4", "user5"],
    chapters: [
      {
        chapterName: "To the Stars",
        chapterImages: ["chapter3_img1.jpg", "chapter3_img2.jpg"],
        chapterPublishedDate: "2024-07-11",
        chapterNumber: 1,
      },
    ],
    createdAt: "2024-07-02",
    updatedAt: "2024-08-02",
    createdBy: {
      userName: "Sam Lee",
      userEmail: "sam@example.com",
      userBio: "Aspiring astronaut.",
      userId: "user3",
      UserProfileImage: "profile3.jpg",
    },
    __v: 0,
  },
  {
    likes: {
      likedBy: ["user1", "user4"],
      likeCount: 2,
    },
    _id: "4",
    webToonName: "Vampire's Secret",
    author: "Emily Davis",
    backgroundImage: "background4.jpg",
    coverImage: "/path/to/image4.png",
    tags: "romance, supernatural",
    status: "Ongoing",
    description: "A forbidden love between a human and a vampire.",
    views: {
      count: 2200,
      viewedBy: ["user1", "user4", "user5"],
    },
    reviews: [
      {
        review: 4,
        reviewBy: "user2",
      },
    ],
    comments: [
      {
        comment: "So romantic!",
        commentBy: "user1",
        createdAt: new Date("2024-08-05"),
      },
    ],
    thanksReceives: [{ userId: "user4", amount: 25 }],
    savedBy: ["user2", "user3"],
    chapters: [
      {
        chapterName: "The Encounter",
        chapterImages: ["chapter4_img1.jpg", "chapter4_img2.jpg"],
        chapterPublishedDate: "2024-06-20",
        chapterNumber: 1,
      },
    ],
    createdAt: "2024-06-10",
    updatedAt: "2024-08-10",
    createdBy: {
      userName: "Emily Davis",
      userEmail: "emily@example.com",
      userBio: "Supernatural romance enthusiast.",
      userId: "user4",
      UserProfileImage: "profile4.jpg",
    },
    __v: 0,
  },
  {
    likes: {
      likedBy: ["user2", "user5"],
      likeCount: 2,
    },
    _id: "5",
    webToonName: "Cyber City Chronicles",
    author: "Alex Brown",
    backgroundImage: "background5.jpg",
    coverImage: "/path/to/image5.jpeg",

    tags: "cyberpunk, thriller",
    status: "Ongoing",
    description: "A futuristic city where secrets lurk in the shadows.",
    views: {
      count: 2500,
      viewedBy: ["user1", "user3", "user4"],
    },
    reviews: [
      {
        review: 5,
        reviewBy: "user3",
      },
    ],
    comments: [
      {
        comment: "Thrilling and intense!",
        commentBy: "user2",
        createdAt: new Date("2024-08-07"),
      },
    ],
    thanksReceives: [{ userId: "user5", amount: 30 }],
    savedBy: ["user1", "user4"],
    chapters: [
      {
        chapterName: "The Hacker",
        chapterImages: ["chapter5_img1.jpg", "chapter5_img2.jpg"],
        chapterPublishedDate: "2024-07-05",
        chapterNumber: 1,
      },
    ],
    createdAt: "2024-07-01",
    updatedAt: "2024-08-01",
    createdBy: {
      userName: "Alex Brown",
      userEmail: "alex@example.com",
      userBio: "Living in the future.",
      userId: "user5",
      UserProfileImage: "profile5.jpg",
    },
    __v: 0,
  },
  {
    likes: {
      likedBy: ["user3", "user5"],
      likeCount: 2,
    },
    _id: "6",
    webToonName: "Ninja Warrior",
    author: "Chris Green",
    backgroundImage: "background6.jpg",
    coverImage: "/path/to/image6.jpg",
    tags: "action, martial arts",
    status: "Completed",
    description: "Follow the journey of a young ninja mastering his skills.",
    views: {
      count: 3000,
      viewedBy: ["user2", "user3", "user6"],
    },
    reviews: [
      {
        review: 4,
        reviewBy: "user4",
      },
    ],
    comments: [
      {
        comment: "Action-packed!",
        commentBy: "user3",
        createdAt: new Date("2024-07-30"),
      },
    ],
    thanksReceives: [{ userId: "user5", amount: 20 }],
    savedBy: ["user2", "user6"],
    chapters: [
      {
        chapterName: "The Training",
        chapterImages: ["chapter6_img1.jpg", "chapter6_img2.jpg"],
        chapterPublishedDate: "2024-06-15",
        chapterNumber: 1,
      },
    ],
    createdAt: "2024-06-05",
    updatedAt: "2024-08-05",
    createdBy: {
      userName: "Chris Green",
      userEmail: "chris@example.com",
      userBio: "Martial arts expert.",
      userId: "user6",
      UserProfileImage: "profile6.jpg",
    },
    __v: 0,
  },
  {
    likes: {
      likedBy: ["user1", "user6"],
      likeCount: 2,
    },
    _id: "7",
    webToonName: "Guardian of the Forest",
    author: "Anna White",
    backgroundImage: "background7.jpg",
    coverImage: "/path/to/image7.png",
    tags: "fantasy, drama",
    status: "Ongoing",
    description: "A young girl destined to protect the ancient forest.",
    views: {
      count: 1700,
      viewedBy: ["user4", "user5", "user6"],
    },
    reviews: [
      {
        review: 5,
        reviewBy: "user2",
      },
    ],
    comments: [
      {
        comment: "Beautiful and touching!",
        commentBy: "user1",
        createdAt: new Date("2024-08-15"),
      },
    ],
    thanksReceives: [{ userId: "user6", amount: 15 }],
    savedBy: ["user3", "user5"],
    chapters: [
      {
        chapterName: "The Calling",
        chapterImages: ["chapter7_img1.jpg", "chapter7_img2.jpg"],
        chapterPublishedDate: "2024-07-01",
        chapterNumber: 1,
      },
    ],
    createdAt: "2024-07-01",
    updatedAt: "2024-08-01",
    createdBy: {
      userName: "Anna White",
      userEmail: "anna@example.com",
      userBio: "Protector of nature.",
      userId: "user7",
      UserProfileImage: "profile7.jpg",
    },
    __v: 0,
  },
];
