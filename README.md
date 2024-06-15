# Multi-Stage Mars Visit Application Form

This project is a multi-step form application for Mars visit applicants. It uses React, React Hook Form, Zod for schema validation, and React Testing Library for testing. The application is containerized using Docker.

[Live Site Link:](https://mars-journey.netlify.app) https://mars-journey.netlify.app
 

## Prerequisites

- Node.js and Yarn installed on your machine.
- Docker and Docker Compose installed (optional, for containerized deployment).

## Installation
yarn install
yarn dev (Running Locally)
  
## Running with Docker
 Build the Docker Image
 - docker-compose build
 - docker-compose up
 - docker-compose down(server off command)
  
## Testing
  yarn test
  
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
