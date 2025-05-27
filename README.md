This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## Prisma ORM & SQLite Setup

This project uses [Prisma ORM](https://www.prisma.io/) with SQLite for managing todos.

### 1. Install dependencies

```bash
npm install prisma @prisma/client sqlite3
```

### 2. Initialize Prisma (if not already present)

```bash
npx prisma init
```

> If the `prisma/` folder already exists, skip this step.

### 3. Configure the database

- In `.env` (at the project root), set:
  ```
  DATABASE_URL="file:./dev.db"
  ```

### 4. Define the schema

- In `prisma/schema.prisma`, use:

  ```prisma
  datasource db {
    provider = "sqlite"
    url      = env("DATABASE_URL")
  }

  generator client {
    provider = "prisma-client-js"
  }

  model Todo {
    id          Int     @id @default(autoincrement())
    name        String
    completed   Boolean
    description String?
    priority    Int?
  }
  ```

### 5. Run migrations and generate the client

```bash
npx prisma migrate dev --name init
```

- This will create `dev.db` and generate the Prisma client in the default location: `node_modules/@prisma/client`.

### 6. Usage

- Import and use the Prisma client in your code:
  ```ts
  import { PrismaClient } from "@prisma/client";
  const prisma = new PrismaClient();
  ```

---

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
