import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50 to-green-100 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 text-gray-900 dark:text-gray-100 font-sans">
      <main className="flex flex-col items-center justify-center gap-10 px-6 py-20 sm:py-28 text-center sm:text-left max-w-4xl mx-auto">

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight text-green-700 dark:text-green-100">
          Master Machine Learning with <span className="text-green-600 dark:text-green-400">MLMindscape</span>
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-xl max-w-2xl text-gray-700 dark:text-gray-300">
          Your one-stop destination for intuitive guides, visual explanations, and hands-on machine learning projects using modern tools.
        </p>

        {/* Features List */}
        <ul className="text-left list-disc list-inside space-y-2 font-medium text-gray-800 dark:text-gray-200">
          <li>📘 Learn ML concepts with clear, interactive theory</li>
          <li>🧪 Practice with real-world datasets in Jupyter</li>
          <li>🚀 Explore model implementations and optimization tricks</li>
        </ul>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link href="/theory">
            <button className="rounded-full px-6 py-3 text-white bg-green-600 hover:bg-green-700 transition shadow-lg font-semibold">
              📖 Explore Theory
            </button>
          </Link>
          <Link href="/practical">
            <button className="rounded-full px-6 py-3 text-green-600 dark:text-white border border-green-600 dark:border-white hover:bg-green-100 dark:hover:bg-neutral-700 transition font-semibold">
              🧪 Hands-on Labs
            </button>
          </Link>
        </div>
      </main>

      {/* Footer Links */}
      <footer className="flex flex-wrap justify-center items-center gap-6 py-6 text-sm text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-neutral-700 px-6">
        <a
          href="https://www.kaggle.com/learn/intro-to-machine-learning"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:underline"
        >
          <Image src="/file.svg" alt="Learn icon" width={16} height={16} />
          Learn ML
        </a>
        <a
          href="https://github.com/topics/machine-learning"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:underline"
        >
          <Image src="/window.svg" alt="Examples icon" width={16} height={16} />
          Explore Projects
        </a>
        <a
          href="https://scikit-learn.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:underline"
        >
          <Image src="/globe.svg" alt="Globe icon" width={16} height={16} />
          scikit-learn
        </a>
      </footer>
    </div>
  );
}
