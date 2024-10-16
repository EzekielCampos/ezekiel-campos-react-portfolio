// Images of the projects
import blog from "../img/tech-blog-main.png";
import listIt from "../img/list-it-home-pg.png";
import bonAppetit from "../img/bon-appetit-page.png";
import bookSearch from "../img/search-pg.png";
import dreamVoyage from "../img/dream-voyage.png"

// Project data tha will be used for ProjectCard components
export const projectData = [
  {
    id:0,
    name:"Dream Voyage",
    description:"This application is a vacation finder where a user can create an account and purchase vacation bundles that might interest them.  This full stack application uses Mongoose for the backend, accompanied by a GraphQL API to handle those request with Apollo Server.  The frontend was created using React and Material UI for the design and sytling.",
    pic: dreamVoyage,
    deployed:"https://dream-voyage-62bv.onrender.com/",
    github:"https://github.com/EzekielCampos/Dream-Voyage",

  },
  {
    id: 1,
    name: "Refactoring Application from RESTful API to GraphQL",
    description:
      "This purpose of this project was to refactor an existing application built with a RESTful API and instead implement a GraphQL API. The application is a full stack website that allows users to create an account and search for books to save to their account. Apollo Server was used alongside GraphQL to handle the request to the database. The front- end uses React together with Apollo Client to make those GraphQL request for specific data.",
    pic: bookSearch,
    deployed:
      "https://refactor-book-search-app-to-grapql.onrender.com/",
    github: "https://github.com/EzekielCampos/refactor-book-search-app-to-grapql",
  },
  {
    id: 2,
    name: "Social Network API Using Mongoose",
    description:
      "This project focuses on creating an API for a social networking web application. The backend was built with MongoDB in association with Mongoose for creating models and organizing data.This assignment was meant to create a functioning backend using Mongoose where users can create a friend’s list, and sharing and reacting to other user’s thoughts.",
    video:
      "https://drive.google.com/file/d/1sNV5Q-qAhhKLSudDqTvVZynQIrGg76K6/preview",
    deployed:
      "https://drive.google.com/file/d/1sNV5Q-qAhhKLSudDqTvVZynQIrGg76K6/preview",
    github: "https://github.com/EzekielCampos/social-network-mongo-api",
  },
  {
    id: 3,
    name: "List It",
    description:
      " This full-stack application allows users to create their account so that they can keep track of all their nerdy hobbies.The purpose of this project was to create an application using the Model-View-Controller(MVC) concept that seamlessly connects the front and back end intuitively. ",
    pic: listIt,
    github: "https://github.com/EzekielCampos/List-It",
    deployed: "https://list-it-zko0.onrender.com/",
  },
  {
    id: 4,
    name: "Tech Blog Application",
    description:
      "This application is a blog page where developers can share views and thoughts with other registered users of the app. It gives the option to create an account so that a user has the ability to add, update, delete their post. In addition each user can comment on other developers post. The purpose behind this project was to build a full stack application using the Model-View-Controller (MVC) paradigm. ",
    pic: blog,
    github: "https://github.com/EzekielCampos/mvc-tech-blog-app",
    deployed: "https://mvc-tech-blog-app.onrender.com/",
  },
  {
    id: 5,
    name: "E-Commerce Backend ORM",
    description:
      "This project works on creating a functioning backend for an e-commerce site that connects to a database to perform CRUD operations. The data that is being used is information about different categories, products, and tags that belong to products. The purpose behind this was to practice building a server with Express and to interface with the database using Sequelize.",
    video:
      "https://drive.google.com/file/d/1AQgrPRA8GkEkONhIwqgE5h5lphJOMZEr/preview",
    github:
      "https://github.com/EzekielCampos/ecommerce-backend-application-ORM",
    deployed:
      "https://drive.google.com/file/d/1AQgrPRA8GkEkONhIwqgE5h5lphJOMZEr/preview",
  },
  {
    id: 6,
    name: "Employee Content Management Application",
    description:
      "This project is a content management application to perform various operations pertaining to an organization employees and department. Using CLI prompts, the user has a variety of options to either read, add, or update data. The data will be held in a database and the user will have only have access to the companies information. For this assignment the main objective was to give the user access to data using PostgreSQL to perform CRUD operations. ",
    video:
      "https://drive.google.com/file/d/17czMDC6Y8p-XlYsjVGgyMJtvbwSAWAG0/preview",
    deployed:
      "https://drive.google.com/file/d/17czMDC6Y8p-XlYsjVGgyMJtvbwSAWAG0/preview",
    github:
      "https://github.com/EzekielCampos/employee-content-management-application",
  },
  {
    id: 7,
    name: "Bon Appetit",
    description:
      "This application is a food and cocktail search engine where the user can browse through various categories to find a meal or drink that might interest them. In order to build this application our team incorporated two API’s ,TheMealDB and TheCocktailDB, to fetch the information about food and drinks recipes that will be displayed on the page.",
    pic: bonAppetit,
    github:
      "https://github.com/EzekielCampos/bon-appetit-food-cocktail-recipe-search-application?tab=readme-ov-file",
    deployed:
      "https://ezekielcampos.github.io/bon-appetit-food-cocktail-recipe-search-application/",
  },
];

// This data will be used for the test
export const testData = [
  {
    id: 1,
    name: "Social Network API Using Mongoose",
    description:
      "This project focuses on creating an API for a social networking web application. The backend was built with MongoDB in association with Mongoose for creating models and organizing data.This assignment was meant to create a functioning backend using Mongoose where users can create a friend’s list, and sharing and reacting to other user’s thoughts.",
    video:
      "https://drive.google.com/file/d/1sNV5Q-qAhhKLSudDqTvVZynQIrGg76K6/preview",
    deployed:
      "https://drive.google.com/file/d/1sNV5Q-qAhhKLSudDqTvVZynQIrGg76K6/preview",
    github: "https://github.com/EzekielCampos/social-network-mongo-api",
  },
];
