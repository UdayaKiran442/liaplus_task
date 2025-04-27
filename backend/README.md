# Getting started with the project

## Prerequisites

- Node.js
- npm or bun or yarn
- Local instance of MongoDB

# Installation

- Clone repository
```sh
git clone https://github.com/UdayaKiran442/liaplus_task.git
cd <project directory>
```

# Steps to run backend server

- Open terminal in backend directory
```sh
cd backend
```
- To install dependencies:
```sh
bun install
```
- To run server:
```sh
nodemon
```

- Server will run on port 3000

# Folder Structure

```
src/
├── controllers/
├── repository/
├── middleware/
├── routes/
├── types/
├── utils/
└── index.ts
└── README.md
└── .env
└── package.json
└── tsconfig.json
└── .gitignore
```

## Controllers
- Contains controller functions for handling requests nand business logic

## Repository
- Contains database related functions

## Middleware
- Contains middleware functions for authentication and authorization. These will be called before calling the route

## Routes
- Contains route handlers for different endpoints

## Types
- Contains type declarations for node_modules

## Utils
- Contains utility functions

## index.ts
- Contains the main entry point of the application where server is running

## .env
- Contains environment variables

## package.json
- Contains package configuration

## tsconfig.json
- Contains TypeScript configuration

## .gitignore
- Contains the files and directories that should not be committed to github


# Environment Variables

- Put the following environment variables in .env file
```sh
PORT = 3000
JWT_SECRET = "secret"
```

# Architecture and Flow

1. Backend: NodeJS + TypeScript + ExpressJS
    - Role based authorisation
    - JWT authentication middleware
    - CRUD operations for blog posts

