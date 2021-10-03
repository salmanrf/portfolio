import odinbookPreview from "./assets/img/odin.gif";
import steamclonePreview from "./assets/img/steamclone.gif";
import todolistPreview from "./assets/img/todolist.gif";
import finedealPreview from "./assets/img/finedeal.gif";

export const projectData = [
  {
    title: "Fin(d)e Deal",
    description: "Application for finding game sales and comparing price between stores.",
    previewImage: finedealPreview,
    liveLink: "https://finedeal.netlify.app/",
    sourceLink: "https://github.com/salmanrf/fin-d-e_deal",
    features: [
      "Wishlist Highlights",
      "Highlight sales from steam, gog and humble-bundle",
      "Paginate sales list from steam, gog and humble-bundle",
      "Add/remove wishlist",
      "Authentication",
      "Compare game prices between stores",
      "Search games",
    ],
    technologies: [
      "MongoDB",
      "Express",
      "React",
      "Zustand",
      "Sass",
      "Redis",
      "NodeJS",
      "react-router-dom",
      "jsonwebtoken",
      "cheerio",
    ],
  },
  {
    title: "OdinBook",
    description: "Fullstack MERN Social Media application",
    previewImage: odinbookPreview,
    liveLink: "https://odin-book.netlify.app/",
    sourceLink: "https://github.com/salmanrf/odin-book",
    features: [
      "Authentication",
      "User Settings",
      "CRUD posts",
      "CRUD comments",
      "CRUD post reactions",
      "CRUD friends",
      "Search user and post",
    ],
    technologies: [
      "MongoDB",
      "Mongoose",
      "Express",
      "React",
      "react-router-dom",
      "jsonwebtoken",
      "NodeJS",
    ],
  },
  {
    title: "Steam Clone (CRUD)",
    description: "A simplified clone of steam.",
    previewImage: steamclonePreview,
    liveLink: "https://steam-crud.herokuapp.com/",
    sourceLink: "https://github.com/salmanrf/steam-clone",
    features: [
      "Authentication",
      "Dashboard (Admin)",
      "CRUD games (Admin)",
      "Browse games by genres/developers/publishers",
      "Create and read forum post",
    ],
    technologies: ["MongoDB", "Mongoose", "Express", "HTML", "CSS", "Pug", "PassportJS", "NodeJS"],
  },
  {
    title: "Todo List App",
    description: `Fullstack MERN application for managing tasks.`,
    previewImage: todolistPreview,
    liveLink: "https://srf-todo-list.netlify.app",
    sourceLink: "https://github.com/salmanrf/todo-mern/tree/main",
    features: ["Authentication", "Create Collection", "Create,Read,Update,Delete Todo"],
    technologies: [
      "MongoDB",
      "Mongoose",
      "Express",
      "React",
      "jsonwebtoken",
      "react-router-dom",
      "NodeJS",
    ],
  },
];
