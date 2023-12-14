# [The Movies APP](https://the-movies-app-mocha.vercel.app)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

In this [link](https://the-movies-app-mocha.vercel.app), you can view the live version of the project. Please note that it is not currently responsive.

## Getting Started

1. Verificar la versión de Node que tenemos instalada (Ubuntu).
> [!TIP]
> Recomiendo instalar Node Version Manager y usar la versión estable.

# Instalar NVM (Node Version Manager)
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features
In this project, you will find two pages:

- The main page where you can choose between three movie options: "Upcoming, Popular, and Top Rated." In addition to this, you can view the list of movies with their posters, names, release dates, and ratings.

- The movie detail page: By clicking on a movie, you will be redirected to a page where you can see all the details of the movie, such as duration, cast, budget, etc.

## Contributing
You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Deploy on Vercel

I have deployed it with [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme), it provides an easy way to deploy projects using NextJS.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
