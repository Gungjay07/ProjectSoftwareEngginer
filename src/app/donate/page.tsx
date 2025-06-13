"use client"
import Link from "next/link";

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-black text-white p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Donate to Project</h1>

      <div className="bg-gray-900 p-6 rounded-lg max-w-md w-full shadow-lg space-y-4">
        <p className="text-lg font-semibold">
          Project: <span className="text-blue-400">Open Finance Tracker</span>
        </p>

        <label className="block">
          <span className="text-sm text-gray-300">Donation Amount (USD)</span>
          <input
            type="number"
            placeholder="Enter amount"
            className="mt-1 p-2 w-full rounded bg-gray-800 border border-gray-600 text-white"
          />
        </label>

        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded">
          Donate Now
        </button>

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
