import Link from "next/link";

export default function PracticalPage() {
  const practicals = [
    {
      title: "Exploratory Data Analysis (EDA)",
      emoji: "📊",
      filename: "EDA.ipynb"
    },
    {
      title: "Linear Regression",
      emoji: "📈",
      filename: "Linear Regression.ipynb"
    },
    {
      title: "Logistic Regression",
      emoji: "🧮",
      filename: "Logistic Regression.ipynb"
    },
    {
      title: "Decision Trees",
      emoji: "🌳",
      filename: "Decision Tree Classifier.ipynb"
    },
    {
      title: "Naive-Bayes Theoram",
      emoji: "⚖️",
      filename: "Naive Bayes.ipynb"
    },
    {
      title: "K-Means Clustering",
      emoji: "🔵",
      filename: "K-Means.ipynb"
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-900">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-rose-400 text-center">
        🧪 Machine Learning Practicals
      </h1>

      <ul className="space-y-6">
        {practicals.map((item, index) => (
          <li
            key={index}
            className="p-6 border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-md transition flex justify-between items-center"
          >
            <div className="flex flex-col">
              <h2 className="text-xl font-semibold mb-1 text-rose-700">
                {item.emoji} {item.title}
              </h2>
              <p className="text-sm text-gray-600">
                Explore implementation and hands-on code examples in this notebook.
              </p>
            </div>

            <Link
              href={`/notebooks/${item.filename}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-rose-900 hover:bg-rose-700 text-white text-sm sm:text-base font-medium px-5 py-2 rounded-full transition">
                Open Notebook
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
