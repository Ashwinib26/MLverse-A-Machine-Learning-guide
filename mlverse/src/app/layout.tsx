import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MLMindscape",
  description: "Machine Learning Learning Guide",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem("theme");
                if (
                  theme === "dark" ||
                  (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)
                ) {
                  document.documentElement.classList.add("dark");
                } else {
                  document.documentElement.classList.remove("dark");
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-white dark:bg-neutral-900 text-gray-900 dark:text-gray-100`}
      >
        {/* Header with manual toggle */}
        <header className="w-full bg-blue-600 text-white shadow-md">
          <div className="flex items-center justify-between px-6 py-4 max-w-screen-xl mx-auto">
            <div className="text-xl font-semibold">MLMindscape</div>
            <button
              onClick={() => {
                const root = document.documentElement;
                const isDark = root.classList.toggle("dark");
                localStorage.setItem("theme", isDark ? "dark" : "light");
              }}
              className="ml-4 px-3 py-1 rounded bg-white text-blue-600 dark:bg-neutral-800 dark:text-white border dark:border-white hover:bg-gray-100 dark:hover:bg-neutral-700 transition"
            >
              Toggle Theme
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow px-6 py-4">{children}</main>

        {/* Footer */}
        <footer className="w-full py-4 px-6 bg-gray-100 text-center text-sm text-gray-600 dark:bg-neutral-900 dark:text-neutral-400">
          © {new Date().getFullYear()} MLMindscape. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
