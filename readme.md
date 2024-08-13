# Menu Management API

## Overview

This Node.js backend API allows for managing a menu system with three models: Categories, Sub-categories, and Items. It supports operations for creating, retrieving, updating, and searching these models.

## Features

- **Categories**: Manage different categories for the menu.
- **Sub-categories**: Organize categories into sub-categories.
- **Items**: Manage individual menu items under sub-categories.

## Technologies Used

- Node.js
- TypeScript
- Express.js
- Prisma ORM
- PostgreSQL (or any SQL database)
- Redis (optional, for caching)

## Setup

Follow these steps to run the application locally:

### Prerequisites

1. **Node.js**: Make sure Node.js (v18 or later) is installed on your machine. You can download it from [Node.js official website](https://nodejs.org/).
2. **Database**: Install and configure PostgreSQL or any SQL database of your choice. Create a database for this application.

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/guestara_menu-management-api.git
   cd menu-management-api
   ```

2. **Install Dependencies**

   Make sure you are in the root directory of the project, then run:

   ```bash
   npm install
   ```

3. **Configure Environment Variables**

   Create a `.env` file in the root directory with reference to the .env.example and add your environment variables. 


4. **Run Migrations**

   Apply database migrations using Prisma:

   ```bash
   npm run prisma:migrate
   ```

5. **Start the Application**

   To run the application, use:

   ```bash
   npm run dev
   ```

   The server will start on `http://localhost:8080/` by default.

   If everything works fine , you would get a message like this in your browser on visiting `http://localhost:8080`:

   ```json
   {
     "message": "Guestara API"
   }
   ```

6. **Prisma Studio**

   To view the database schema and data, you can use Prisma Studio:

   ```bash
   npm run prisma:studio
   ```

   This will open a browser window with the Prisma Studio interface.


## API Endpoints

### Categories

- **POST** `/api/category`: Create a new category.
- **GET** `/api/category`: Retrieve all categories.
- **GET** `/api/category/:id`: Retrieve a category by ID.
- **PUT** `/api/category/:id`: Update a category by ID.

### Sub-categories

- **POST** `/api/subcategory`: Create a new sub-category.
- **GET** `/api/subcategory`: Retrieve all sub-categories.
- **GET** `/api/subcategory/:id`: Retrieve a sub-category by ID or name.
- **GET** `/api/subcategory/category/:categoryId`: Retrieve all sub-categories under a category.
- **PUT** `/api/subcategory/:id`: Update a sub-category by ID.

### Items

- **POST** `/api/item`: Create a new item.
- **GET** `/api/item`: Retrieve all items.
- **GET** `/api/item/:id`: Retrieve an item by ID.
- **GET** `/api/item/search`: Search for items by name or description.
- **GET** `/api/item/category/:categoryId`: Retrieve all items under a category.
- **GET** `/api/item/subcategory/:subcategoryId`: Retrieve all items under a sub-category.
- **PUT** `/api/items/:id`: Update an item by ID.

## Development

- **Lint Code**: To lint your code, use:

  ```bash
  npm run lint
  ```

## Contributing

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes.
4. Submit a pull request.

