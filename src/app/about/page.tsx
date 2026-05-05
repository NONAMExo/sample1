export default function About() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black min-h-screen py-24 px-8">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-bold text-black dark:text-zinc-50 mb-8">
          About This Website
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
          This is a modern landing page created with Next.js App Router, Tailwind CSS v4, and TypeScript.
        </p>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          Features include responsive design, dark mode, and fast performance. Edit the files in <code className="bg-zinc-200 dark:bg-zinc-800 px-2 py-1 rounded text-sm font-mono">src/app/</code> to customize.
        </p>
      </div>
    </div>
  );
}

