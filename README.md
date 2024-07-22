# Next.js application with Neon Postgres and Clerk authentication

This is a Next.js application that uses `Neon Postgres` as the database, `Drizzle ORM` to interact with it and `Clerk` for user authentication. It allows users to log in, save their favorite quote, and view or delete it later.

## Prerequisites

To run this project, you will need:

- A [Neon](https://neon.tech) account and a project with a Postgres database
- A [Clerk](https://clerk.com/) account and an application set up for authentication
- Node.js and npm installed on your machine

## Set up locally

1. Clone this repository.

```bash
git clone https://github.com/neondatabase/guide-neon-next-clerk
```

2. Navigate to the project directory and install the dependencies.

```bash
cd guide-neon-next-clerk
npm install
```

3. Copy the `.env.example` file (in the root directory), with the following environment variables, to create a `.env` file. 

```bash
DATABASE_URL=YOUR_NEON_DATABASE_URL
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=xxxxxxxxxxxx
CLERK_SECRET_KEY=xxxxxx
```

Replace the placeholders with your actual Neon database URL and the Clerk application configuration values.

4. Run the database migrations using Drizzle.

```bash
npx drizzle-kit push:pg
```

5. Start the development server.

```bash
npm run dev
```

6. Open your browser and navigate to `http://localhost:3000`. You should see the application running.

## Usage

This NextJS application has a single page that lets you add/remove a text quote. When unauthenticated, you will be redirected to the Clerk login page. 

- Login with an email account or using one of the allowed social auth providers. 
- Once logged in, you can enter your favorite quote in the text field and click "Save Quote" to store it in the database.
- The saved quote will be displayed on the page. You can delete it by clicking the "Delete Quote" button. 