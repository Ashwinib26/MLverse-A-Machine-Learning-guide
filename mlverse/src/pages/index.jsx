import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>MLVerse | Ashwini Bisen</title>
        <meta name="description" content="Explore my machine learning journey through curated theory and practical content." />
      </Head>

      <main className="min-h-screen bg-white text-gray-800 px-6 py-12 flex flex-col items-center">
        <div className="text-center max-w-3xl">
          <h1 className="text-5xl font-bold mb-4">👩‍💻 MLVerse</h1>
          <p className="text-xl text-gray-600 mb-6">
            Welcome to my machine learning portfolio. Dive into curated theory notes and hands-on Jupyter notebooks crafted with clarity.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="/theory" className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition">
              📚 Theory Notes
            </a>
            <a href="/practical" className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition">
              🧪 Practical Notebooks
            </a>
          </div>
        </div>

        <footer className="mt-16 text-sm text-gray-400">
          © {new Date().getFullYear()} Ashwini Bisen — Made with ❤️
        </footer>
      </main>
    </>
  );
}
