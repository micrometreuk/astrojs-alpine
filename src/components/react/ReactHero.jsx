import react from '@astrojs/react';

import styles from '../react/React.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <div className="flex min-h-screen flex-col items-center justify-center py-2">

                <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
                    <img src="img/logo/logo-square.svg" alt="Vercel" className={styles.logo} />


                    <div className="mt-6 flex max-w-8xl flex-wrap items-center justify-around sm:w-full">
                        <a
                            href="https://nextjs.org/docs"
                            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
                        >
                            <h3 className="text-2xl font-bold">Documentation &rarr;</h3>
                            <p className="mt-4 text-xl">
                                Find in-depth information about Next.js features and its API.
                            </p>
                        </a>

                        <a
                            href="https://nextjs.org/learn"
                            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
                        >
                            <h3 className="text-2xl font-bold">Learn &rarr;</h3>
                            <p className="mt-4 text-xl">
                                Learn about Next.js in an interactive course with quizzes!
                            </p>
                        </a>
                        <a
                            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
                        >
                            <h3 className="text-2xl font-bold">Deploy &rarr;</h3>
                            <p className="mt-4 text-xl">
                                Instantly deploy your Next.js site to a public URL with Vercel.
                            </p>
                        </a>
                    </div>
                </main>

            </div>

            <style jsx>{`
      `}</style>

            <style jsx global>{`
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
        </div>
    )
}