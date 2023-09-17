# Node.js Backend Project

A Node.js backend project with Express.js, MongoDB, and JWT authentication, organized with a clear architecture and best practices.

## Folder Structure

- `config/`: Configuration files for the application.
- `controllers/`: Logic for route handling.
- `middlewares/`: Custom middleware functions for error handling and JWT verification.
- `models/`: MongoDB data models.
- `routes/`: API route definitions.

## Environment Variables

Create a `.env` file with these variables:

- `PORT`: Port number for the server.
- `CONNECTION_STRING`: MongoDB connection string.
- `SECRET_KEY`: Secret key for JWT authentication.

## Getting Started

- Initialize the project with `npm init`.
- Set the entry point to `server.js`.
- Define scripts in `package.json` for testing, starting, and development using Nodemon.

## Express Setup

- Initialize Express and set up app listening in `server.js`.
- Create routes and integrate them into Express middleware.
