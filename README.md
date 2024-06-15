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

## Also you can run client and server together
You need to put cilent and server in same folder like
multi-stage
- client
- server

## Then add a file docker-compose.yaml then put those code


version: '3'
services:
  front:
    build: 
      context: "./client"
      dockerfile: Dockerfile
    env_file: ./client/.env
    ports: 
      - 3000:3000
    container_name: multi-client-container
    environment:
      - WATCHPACK_POLLING=true
    networks:
      - multi-stage
    volumes:
      - ./client:/app
    depends_on:
      - server
  server:
    build: 
      context: "./server"
      dockerfile: Dockerfile
    env_file: ./server/.env
    ports:
      - 5000:5000
    container_name: multi-server-container
    networks:
      - multi-stage
    volumes:
      - ./server:/app
    depends_on:
      - mongo
  mongo:
    image: mongo
    ports:
      - 27017:27017
    container_name: multi-mongo-container
    networks:
      - multi-stage
    volumes:
      - mongoData:/data/db
    environment:
      - MONGO_INITDB_ROOT_USERNAME=root
      - MONGO_INITDB_ROOT_PASSWORD=secret
      - MONGO_INITDB_DATABASE=multi-stage
networks:
 multi-stage:
volumes:
 mongoData:


  
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
