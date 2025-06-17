// app/invest/page.tsx
"use client";
import Link from "next/link";

export default function InvestPage() {
  return (
    <div className="min-h-screen bg-black text-white p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Invest in Project</h1>

      <div className="bg-gray-900 p-6 rounded-lg max-w-md w-full shadow-lg space-y-4">
        <p className="text-lg font-semibold">
          Project: <span className="text-green-400">AI Code Review Tool</span>
        </p>

        <label className="block">
          <span className="text-sm text-gray-300">Investment Amount (USD)</span>
          <input
            type="number"
            placeholder="Enter amount"
            className="mt-1 p-2 w-full rounded bg-gray-800 border border-gray-600 text-white"
          />
        </label>

        <Link href="/termsAndcondition" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
          Invest Now
        </Link>

        <Link
          href="/projects"
          className="text-sm text-blue-400 hover:underline"
        >
          ← Back to Projects
        </Link>
      </div>
    </div>
  );
}
