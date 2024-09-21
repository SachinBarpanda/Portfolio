# Portfolio Website with Backend

Welcome to my **Personal Portfolio Website** project! This repository contains the source code for both the frontend and backend of my portfolio site. The site showcases my skills, projects, and contact details, with a fully functional backend to handle data and interactions.

## Features

- **Responsive Design**: Fully optimized for all screen sizes.
- **Backend Integration**: The backend is built to handle form submissions and dynamic content.
- **Project Showcase**: Highlights key projects I've worked on with detailed descriptions.
- **Contact Form**: Backend-enabled contact form for direct communication.
- **Tech Stack**: MERN stack (MongoDB, Express, React, Node.js) for seamless frontend-backend integration.

## Live Demo

Check out the live version of my portfolio: [https://portfolio-ktnp.onrender.com/]

## Tech Stack

- **Frontend**: React.js, HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (for storing contact form submissions)
- **Version Control**: Git, GitHub
- **Deployment**: [e.g., Heroku, Vercel, Netlify, or your platform of choice]

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/portfolio-site.git
   cd portfolio-site

    Install the necessary dependencies for both the frontend and backend:

    bash

# Frontend
cd client
npm install

# Backend
cd ../server
npm install

Set up the .env file in the /server directory to include your MongoDB connection string:

bash

MONGO_URI=your_mongo_connection_string

Start both frontend and backend servers:

bash

    # Frontend (in the client folder)
    npm start

    # Backend (in the server folder)
    npm run dev

    Open http://localhost:3000 in your browser for the frontend, and the backend will run on http://localhost:5000.

API Routes

    GET /api/projects: Fetch the list of projects to display on the portfolio.
    POST /api/contact: Submit the contact form, storing the message in MongoDB.

Screenshots

Description of the screenshot goes here
Future Improvements

    Blog Section: Add a personal blog for posting articles.
    Admin Panel: Add an admin panel for project and content management.
    Analytics: Integrate Google Analytics for tracking site usage.

Contributing

If you'd like to contribute or report a bug, feel free to create an issue or submit a pull request.
Contact

Feel free to reach out to me through the contact form on the site or directly via email@example.com.
