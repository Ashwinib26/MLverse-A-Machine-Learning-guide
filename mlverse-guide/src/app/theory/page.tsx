export default function TheoryPage() {
  const topics = [
    {
      title: "Supervised Learning",
      emoji: "🎯",
      description:
        "Supervised learning involves training a model on labeled data — meaning each input has a known output. Algorithms learn to map inputs to outputs, such as predicting house prices or classifying emails as spam or not. Common techniques include linear regression, decision trees, and support vector machines."
    },
    {
      title: "Unsupervised Learning",
      emoji: "🧩",
      description:
        "Unsupervised learning works with unlabeled data to find hidden patterns or groupings. Think clustering customers by behavior or reducing data dimensions for visualization. Algorithms like k-means and PCA (Principal Component Analysis) are key players here."
    },
    {
      title: "Reinforcement Learning",
      emoji: "🏆",
      description:
        "Reinforcement learning trains agents to make decisions by rewarding good actions and penalizing bad ones. It’s like training a dog — over time, it learns optimal behavior. Used in robotics, game playing (e.g. AlphaGo), and real-time control systems."
    },
    {
      title: "Overfitting & Underfitting",
      emoji: "📉",
      description:
        "Overfitting occurs when a model learns noise instead of patterns, performing well on training data but poorly on new data. Underfitting means the model is too simple to capture patterns. Balancing complexity and generalization is key in ML modeling."
    },
    {
      title: "Bias-Variance Tradeoff",
      emoji: "⚖️",
      description:
        "This tradeoff explains the tension between a model being too simple (high bias) and too complex (high variance). A good ML model strikes the right balance to perform well on both training and unseen data."
    },
    {
      title: "Model Evaluation Metrics",
      emoji: "📊",
      description:
        "We use metrics to measure how well a model performs. Accuracy, precision, recall, F1 score, and ROC-AUC are common for classification. For regression, metrics like MAE and RMSE help assess prediction errors."
    },
    {
      title: "Gradient Descent",
      emoji: "⛰️",
      description:
        "Gradient Descent is the optimization algorithm that minimizes loss by adjusting model weights. Think of it like hiking down a mountain to reach the lowest point (minimum error). It’s the heart of training neural networks and many other models."
    },
    {
      title: "Feature Engineering",
      emoji: "🛠️",
      description:
        "Feature engineering involves selecting and transforming raw data into meaningful features that boost model performance. It can include normalization, encoding, interaction terms, or domain-specific transformations."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-900">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-blue-700 text-center">
        📘 Machine Learning Theory Guide
      </h1>

      <ul className="space-y-6">
        {topics.map((topic, index) => (
          <li
            key={index}
            className="p-6 border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold mb-2 text-blue-600">
              {topic.emoji} {topic.title}
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              {topic.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
