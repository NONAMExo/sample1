import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black min-h-screen">
      <main className="flex flex-1 w-full max-w-4xl flex-col items-center justify-center py-24 px-8 bg-white dark:bg-black">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-6xl font-bold tracking-tight text-black dark:text-zinc-50 mb-6">
            Welcome to My Website
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto">
            A beautiful, responsive landing page built with Next.js 16, Tailwind CSS 4, and dark mode support. Get started quickly!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about"
              className="flex h-14 px-8 items-center justify-center gap-2 rounded-full bg-black text-white transition-all hover:bg-zinc-800 w-full sm:w-auto font-medium"
            >
              Learn More
            </Link>
            <Link
              href="https://github.com"
              className="flex h-14 px-8 items-center justify-center rounded-full border-2 border-zinc-200 dark:border-zinc-700 hover:border-black dark:hover:border-white transition-all w-full sm:w-auto font-medium text-zinc-900 dark:text-zinc-100"
            >
              View on GitHub
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 w-full">
          <div className="text-center p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:shadow-xl transition-all">
            <Image src="/next.svg" alt="Fast" width={64} height={64} className="mx-auto mb-4 dark:invert" />
            <h3 className="text-2xl font-semibold text-black dark:text-zinc-50 mb-4">Lightning Fast</h3>
            <p className="text-zinc-600 dark:text-zinc-400">Powered by Next.js for optimal performance and SEO.</p>
          </div>
          <div className="text-center p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:shadow-xl transition-all">
            <Image src="/globe.svg" alt="Responsive" width={64} height={64} className="mx-auto mb-4 dark:invert" />
            <h3 className="text-2xl font-semibold text-black dark:text-zinc-50 mb-4">Fully Responsive</h3>
            <p className="text-zinc-600 dark:text-zinc-400">Works perfectly on all devices, from mobile to desktop.</p>
          </div>
          <div className="text-center p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:shadow-xl transition-all">
            <Image src="/window.svg" alt="Dark Mode" width={64} height={64} className="mx-auto mb-4 dark:invert" />
            <h3 className="text-2xl font-semibold text-black dark:text-zinc-50 mb-4">Dark Mode</h3>
            <p className="text-zinc-600 dark:text-zinc-400">Seamless light/dark theme switching.</p>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 text-center text-zinc-500 dark:text-zinc-500 text-sm">
          <p>&copy; 2024 My Website. Built with ❤️ using Next.js.</p>
        </footer>
      </main>
    </div>
  );
}

