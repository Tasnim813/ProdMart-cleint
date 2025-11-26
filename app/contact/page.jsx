"use client"

import React from "react";
import Link from "next/link";
import { toast } from "react-toastify";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
    e.target.reset();
  };

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">

      {/* HERO */}
      <section className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-600 text-white py-24">
        <div className="container mx-auto px-6 md:px-8 text-center max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold drop-shadow-xl">
            Contact <span className="text-yellow-300">ProdMart</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl opacity-90">
            Questions or feedback? We're here to assist you. Reach out anytime.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="container mx-auto px-6 md:px-8 py-20 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* LEFT - Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Whether it's an issue, feedback, or just to connect, send us a message.
            </p>

            <div className="mt-6 space-y-4 text-gray-700">
              <p>📧 <span className="font-medium">Email:</span> support@prodmart.com</p>
              <p>📞 <span className="font-medium">Phone:</span> +880 1234 567 890</p>
              <p>📍 <span className="font-medium">Address:</span> Dhaka, Bangladesh</p>
            </div>

            <div className="mt-8 flex gap-4">
              <Link href="#" className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:opacity-90 transition">
                Facebook
              </Link>
              <Link href="#" className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:opacity-90 transition">
                Instagram
              </Link>
            </div>
          </div>

          {/* RIGHT - Contact Form */}
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl shadow-xl border space-y-6">
            <div>
              <label className="block font-medium mb-1">Name</label>
              <input type="text" required placeholder="Your name" className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300" />
            </div>

            <div>
              <label className="block font-medium mb-1">Email</label>
              <input type="email" required placeholder="you@example.com" className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300" />
            </div>

            <div>
              <label className="block font-medium mb-1">Message</label>
              <textarea required placeholder="Write your message..." className="w-full p-3 border rounded-lg h-36 focus:outline-none focus:ring focus:ring-indigo-300"></textarea>
            </div>

            <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold shadow hover:bg-indigo-700 transition">
              Send Message
            </button>
          </form>

        </div>
      </section>

      {/* GOOGLE MAP */}
      <section className="container mx-auto px-6 md:px-8 pb-20 max-w-6xl">
        <div className="rounded-3xl overflow-hidden shadow-lg border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.843361490451!2d90.39109317535364!3d23.75097568871351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b894b7d7eacd%3A0x8322eaa2ee4a5d4!2sDhaka!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

    </main>
  );
}