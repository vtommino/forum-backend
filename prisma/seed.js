const bcrypt = require("bcryptjs");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

//#hash all the password commonly used with all seed users.
const password = bcrypt.hashSync("123456789");

//#01Create user table data
const userData = [
  {
    firstName: "John",
    lastName: "Doe",
    mobile: "1234567890",
    email: "john.doe@example.com",
    password,
    building: "A",
    roomNumber: "101",
    residentType: "CO_OWNER",
    gender: "MALE",
    userName: "username1",
    profileImage: "profile1.jpg",
    coverImage: "cover1.jpg",
    isAdmin: false,
    isApproved: false,
    idDocument: "idDoc1.jpg",
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    mobile: "0987654321",
    email: "jane.smith@example.com",
    password,
    building: "B",
    roomNumber: "202",
    residentType: "RENTEE",
    gender: "FEMALE",
    userName: "username2",
    profileImage: "profile2.jpg",
    coverImage: "cover2.jpg",
    isAdmin: false,
    isApproved: false,
    idDocument: "idDoc2.jpg",
  },
  {
    firstName: "Vasin",
    lastName: "Tommino",
    mobile: "0986163456",
    email: "vasinthep@mail.com",
    password,
    building: "E",
    roomNumber: "461",
    residentType: "CO_OWNER",
    gender: "MALE",
    userName: "vasintom",
    profileImage: "vasin_profile.jpg",
    coverImage: "vasin_cover.jpg",
    isAdmin: true,
    isApproved: true,
    idDocument: "idDoc_vasin.jpg",
  },
  {
    firstName: "Eddie",
    lastName: "Murphy",
    mobile: null,
    email: "eddie@mail.com",
    password,
    building: "D",
    roomNumber: "380",
    residentType: "CO_OWNER",
    gender: "MALE",
    userName: "eddiemurphy",
    profileImage: "eddie_profile.jpg",
    coverImage: "eddie_cover.jpg",
    isAdmin: false,
    isApproved: true,
    idDocument: "idDoc_eddie.jpg",
  },
  {
    firstName: "Art",
    lastName: "Louvre",
    mobile: null,
    email: "artlouvre@mail.com",
    password,
    building: "C",
    roomNumber: "290",
    residentType: "CO_OWNER",
    gender: "MALE",
    userName: "artlouvre",
    profileImage: "art_profile.jpg",
    coverImage: "art_cover.jpg",
    isAdmin: false,
    isApproved: true,
    idDocument: "idDoc_art.jpg",
  },
];

//#02Create forum table data
const forumData = [
  { forumType: "JURISTIC_CAT", name: "JURISTIC AFFAIRS" },
  { forumType: "RESIDENT_CAT", name: "RESIDENT & IN-HOUSE FACILITIES" },
  { forumType: "SALERENT_CAT", name: "RENT & SALES" },
];

//#03Create thread table data
const threadData = [
  {
    forumId: 1,
    threadTitle: "Vtara36 Regulations",
    threadDescription:
      " A forum for residents to consult with the juristic team regarding the community rules and regulations.",
    threadIcon: "https://www.svgrepo.com/show/277276/law-book-law.svg",
  },
  {
    forumId: 1,
    threadTitle: "Building Facilities & Common Areas",
    threadDescription:
      "Share information and ask questions about the condition and usage of building facilities and common areas.",
    threadIcon: "https://www.svgrepo.com/show/500085/tree.svg",
  },
  {
    forumId: 1,
    threadTitle: "Maintenance Requests & Reporting Issues",
    threadDescription:
      "A community for food enthusiasts to share and explore new dining spots and restaurant recommendations nearby.",
    threadIcon: "https://www.svgrepo.com/show/474712/warning.svg",
  },
  {
    forumId: 2,
    threadTitle: "Interior Design & DIY Projects",
    threadDescription:
      "Share techniques and ideas for DIY projects and interior decorating without involving third-party services.",
    threadIcon: "https://www.svgrepo.com/show/287769/repair-hammer.svg",
  },
  {
    forumId: 2,
    threadTitle: "Vendor Recommendations",
    threadDescription:
      "Exchange contact information for trusted vendors, including air-con cleaning, furniture repair, and other services.",
    threadIcon: "https://www.svgrepo.com/show/237138/mechanic-worker.svg",
  },
  {
    forumId: 2,
    threadTitle: "Social Events & Activities",
    threadDescription:
      "Announce and discuss upcoming social events, activities, and gatherings within the community.",
    threadIcon: "https://www.svgrepo.com/show/243554/cheers.svg",
  },
  {
    forumId: 2,
    threadTitle: "Fitness & Wellness",
    threadDescription:
      "Discuss fitness routines, wellness tips, and the use of the condo’s gym and wellness facilities.",
    threadIcon:
      "https://www.svgrepo.com/show/425482/fitness-workout-healthy.svg",
  },
  {
    forumId: 2,
    threadTitle: "Gardening & Balcony Plants",
    threadDescription:
      "Share tips and ideas for balcony gardening and plant care, and show off your green thumb.",
    threadIcon: "https://www.svgrepo.com/show/242757/gardening-leaf.svg",
  },
  {
    forumId: 3,
    threadTitle: "Buy and Sell Condominium Units",
    threadDescription:
      "A marketplace for residents to buy and sell condominium units within the Vtara36 community.",
    threadIcon: "https://www.svgrepo.com/show/277416/sold.svg",
  },
  {
    forumId: 3,
    threadTitle: "Long-term Rentals",
    threadDescription:
      "Find or offer long-term rental units within the condo project.",
    threadIcon:
      "https://www.svgrepo.com/show/404331/noodle-food-eat-meal-dinner-lunch.svg",
  },
];

const postData = [
  {
    userId: 3,
    threadId: 1,
    postTitle: "Post example",
    postDescription: "Description Description Description Description",
    postVideoLink: "https://www.youtube.com/watch?v=GlMUvUuR7uU",
    postMapLink: "https://maps.app.goo.gl/upavFwvH3wM5PpmV8",
    postCreatedAt: new Date().toISOString(),
    postUpdatedAt: new Date().toISOString(),
  },
  {
    userId: 3,
    threadId: 1,
    postTitle: "Post example",
    postDescription: "Description Description Description Description",
    postVideoLink: "https://www.youtube.com/watch?v=GlMUvUuR7uU",
    postMapLink: "https://maps.app.goo.gl/upavFwvH3wM5PpmV8",
    postCreatedAt: new Date().toISOString(),
    postUpdatedAt: new Date().toISOString(),
  },
  {
    userId: 3,
    threadId: 1,
    postTitle: "Post example",
    postDescription: "Description Description Description Description",
    postVideoLink: "https://www.youtube.com/watch?v=GlMUvUuR7uU",
    postMapLink: "https://maps.app.goo.gl/upavFwvH3wM5PpmV8",
    postCreatedAt: new Date().toISOString(),
    postUpdatedAt: new Date().toISOString(),
  },
  {
    userId: 3,
    threadId: 1,
    postTitle: "Post example",
    postDescription: "Description Description Description Description",
    postVideoLink: "https://www.youtube.com/watch?v=GlMUvUuR7uU",
    postMapLink: "https://maps.app.goo.gl/upavFwvH3wM5PpmV8",
    postCreatedAt: new Date().toISOString(),
    postUpdatedAt: new Date().toISOString(),
  },
  {
    userId: 3,
    threadId: 1,
    postTitle: "Post example",
    postDescription: "Description Description Description Description",
    postVideoLink: "https://www.youtube.com/watch?v=GlMUvUuR7uU",
    postMapLink: "https://maps.app.goo.gl/upavFwvH3wM5PpmV8",
    postCreatedAt: new Date().toISOString(),
    postUpdatedAt: new Date().toISOString(),
  },
  {
    userId: 3,
    threadId: 1,
    postTitle: "Post example",
    postDescription: "Description Description Description Description",
    postVideoLink: "https://www.youtube.com/watch?v=GlMUvUuR7uU",
    postMapLink: "https://maps.app.goo.gl/upavFwvH3wM5PpmV8",
    postCreatedAt: new Date().toISOString(),
    postUpdatedAt: new Date().toISOString(),
  },
  {
    userId: 3,
    threadId: 2,
    postTitle: "Post example",
    postDescription: "Description Description Description Description",
    postVideoLink: "https://www.youtube.com/watch?v=GlMUvUuR7uU",
    postMapLink: "https://maps.app.goo.gl/upavFwvH3wM5PpmV8",
    postCreatedAt: new Date().toISOString(),
    postUpdatedAt: new Date().toISOString(),
  },
  {
    userId: 3,
    threadId: 2,
    postTitle: "Post example",
    postDescription: "Description Description Description Description",
    postVideoLink: "https://www.youtube.com/watch?v=GlMUvUuR7uU",
    postMapLink: "https://maps.app.goo.gl/upavFwvH3wM5PpmV8",
    postCreatedAt: new Date().toISOString(),
    postUpdatedAt: new Date().toISOString(),
  },
  {
    userId: 3,
    threadId: 2,
    postTitle: "Post example",
    postDescription: "Description Description Description Description",
    postVideoLink: "https://www.youtube.com/watch?v=GlMUvUuR7uU",
    postMapLink: "https://maps.app.goo.gl/upavFwvH3wM5PpmV8",
    postCreatedAt: new Date().toISOString(),
    postUpdatedAt: new Date().toISOString(),
  },
  {
    userId: 3,
    threadId: 2,
    postTitle: "Post example",
    postDescription: "Description Description Description Description",
    postVideoLink: "https://www.youtube.com/watch?v=GlMUvUuR7uU",
    postMapLink: "https://maps.app.goo.gl/upavFwvH3wM5PpmV8",
    postCreatedAt: new Date().toISOString(),
    postUpdatedAt: new Date().toISOString(),
  },
  {
    userId: 1,
    threadId: 3,
    postTitle: "Post example",
    postDescription: "Description Description Description Description",
    postVideoLink: "https://www.youtube.com/watch?v=GlMUvUuR7uU",
    postMapLink: "https://maps.app.goo.gl/upavFwvH3wM5PpmV8",
    postCreatedAt: new Date().toISOString(),
    postUpdatedAt: new Date().toISOString(),
  },
  {
    userId: 2,
    threadId: 2,
    postTitle: "Post example",
    postDescription: "Description Description Description Description",
    postVideoLink: "https://www.youtube.com/watch?v=GlMUvUuR7uU",
    postMapLink: "https://maps.app.goo.gl/upavFwvH3wM5PpmV8",
    postCreatedAt: new Date().toISOString(),
    postUpdatedAt: new Date().toISOString(),
  },
  {
    userId: 3,
    threadId: 2,
    postTitle: "Post example",
    postDescription: "Description Description Description Description",
    postVideoLink: "https://www.youtube.com/watch?v=GlMUvUuR7uU",
    postMapLink: "https://maps.app.goo.gl/upavFwvH3wM5PpmV8",
    postCreatedAt: new Date().toISOString(),
    postUpdatedAt: new Date().toISOString(),
  },
  {
    userId: 4,
    threadId: 2,
    postTitle: "Post example",
    postDescription: "Description Description Description Description",
    postVideoLink: "https://www.youtube.com/watch?v=GlMUvUuR7uU",
    postMapLink: "https://maps.app.goo.gl/upavFwvH3wM5PpmV8",
    postCreatedAt: new Date().toISOString(),
    postUpdatedAt: new Date().toISOString(),
  },
  {
    userId: 5,
    threadId: 2,
    postTitle: "Post example",
    postDescription: "Description Description Description Description",
    postVideoLink: "https://www.youtube.com/watch?v=GlMUvUuR7uU",
    postMapLink: "https://maps.app.goo.gl/upavFwvH3wM5PpmV8",
    postCreatedAt: new Date().toISOString(),
    postUpdatedAt: new Date().toISOString(),
  },
];

const run = async () => {
  await prisma.user.createMany({ data: userData });
  await prisma.forum.createMany({ data: forumData });
  await prisma.thread.createMany({ data: threadData });
  await prisma.post.createMany({ data: postData });
  // await prisma.comment.create({ data: commentData });
  // await prisma.postlike.create({ data: postLikeData });
  // await prisma.commentlike.create({ data: commentLikeData });
};

run();
