"use client"

import React from "react";

export default function About() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">

      {/* HERO */}
      <section className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-600 text-white py-24">
        <div className="container mx-auto px-6 md:px-8 text-center max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight drop-shadow-lg">
            About <span className="text-yellow-300">ProdMart</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl opacity-90">
            We build polished, responsive web apps focused on user experience,
            accessibility, and performance. This project demonstrates a simple
            e-commerce/admin flow built with Next.js (App Router) and NextAuth.js.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="/shop"
              className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:shadow-lg transition"
            >
              View Shop
            </a>
            <a
              href="/contact"
              className="inline-block px-6 py-3 border border-white/40 text-white rounded-lg hover:bg-white/10 transition"
            >
              Contact Team
            </a>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="container mx-auto px-6 md:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          <div>
            <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              To create polished, accessible interfaces that make it simple for
              people to buy, sell, and manage products. Emphasis on clear
              structure, consistent design, and fast load times.
            </p>

            <h3 className="mt-6 text-lg font-semibold">Design Approach</h3>
            <ul className="mt-3 space-y-2 text-gray-600 list-disc list-inside">
              <li>Consistent spacing & visual hierarchy</li>
              <li>Fully responsive layouts (mobile-first)</li>
              <li>Accessible forms and keyboard interactions</li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 border rounded-xl text-center hover:shadow-md transition">
                <div className="text-3xl font-bold">99+</div>
                <div className="text-sm text-gray-500 mt-1">Products</div>
              </div>
              <div className="p-6 border rounded-xl text-center hover:shadow-md transition">
                <div className="text-3xl font-bold">4.8</div>
                <div className="text-sm text-gray-500 mt-1">Avg Rating</div>
              </div>
              <div className="p-6 border rounded-xl text-center hover:shadow-md transition">
                <div className="text-3xl font-bold">10k+</div>
                <div className="text-sm text-gray-500 mt-1">Users</div>
              </div>
              <div className="p-6 border rounded-xl text-center hover:shadow-md transition">
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm text-gray-500 mt-1">Responsive</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 md:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900">Core Features</h2>
          <p className="text-center text-gray-600 mt-3 max-w-2xl mx-auto">
            Designed for clarity and speed — all components follow consistent rules for spacing and interaction.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[{
              title: "Add & Manage Products",
              desc: "Protected pages let admins add and manage product listings.",
              icon: "🛒",
            },{
              title: "Authentication",
              desc: "Sign in with Google or email/password via NextAuth.js.",
              icon: "🔐",
            },{
              title: "Responsive UI",
              desc: "Mobile-first, accessible components and forms.",
              icon: "📱",
            },{
              title: "Clean Admin Table",
              desc: "Manage products in a compact table with actions.",
              icon: "🧾",
            }].map(f => (
              <article key={f.title} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition transform hover:-translate-y-1 text-center">
                <div className="text-4xl">{f.icon}</div>
                <h3 className="mt-4 font-bold text-lg text-gray-900">{f.title}</h3>
                <p className="mt-2 text-gray-600 text-sm">{f.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="container mx-auto px-6 md:px-8 py-20">
        <h2 className="text-3xl font-bold text-center text-gray-900">Meet the Team</h2>
        <p className="text-center text-gray-600 mt-2">Small team, big ideas.</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[{ name: "Ayesha Rahman", role: "Frontend Lead" },{ name: "Rafi Ahmed", role: "Backend & Auth" },{ name: "Maya Khan", role: "Product Designer" },{ name: "Sabbir Hossain", role: "QA & Ops" }].map(m => (
            <div key={m.name} className="bg-white rounded-3xl p-6 text-center shadow-md hover:shadow-xl transition">
              <div className="w-24 h-24 mx-auto rounded-full bg-indigo-100 flex items-center justify-center text-3xl font-bold">
                {m.name.split(" ")[0][0]}
              </div>
              <h4 className="mt-4 font-semibold text-gray-900">{m.name}</h4>
              <p className="text-sm text-gray-500 mt-1">{m.role}</p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
