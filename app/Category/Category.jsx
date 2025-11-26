"use client";

export default function Newsletter() {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-600 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-6">

        <h2 className="text-3xl sm:text-4xl font-extrabold">
          Subscribe for Updates
        </h2>

        <p className="text-indigo-100 text-lg sm:text-xl max-w-2xl mx-auto">
          Stay ahead with the latest deals, product launches, and exclusive offers delivered straight to your inbox.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-96 px-5 py-3 rounded-lg text-gray-800 bg-white placeholder-gray-400 shadow focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition"
          />

          <button
            className="px-6 py-3 bg-white text-indigo-700 font-semibold rounded-lg shadow hover:bg-indigo-100 transition-transform transform hover:-translate-y-1"
          >
            Subscribe
          </button>
        </div>

        <p className="text-indigo-200 text-sm mt-4">
          We care about your privacy. No spam, ever.
        </p>

      </div>
    </section>
  );
}