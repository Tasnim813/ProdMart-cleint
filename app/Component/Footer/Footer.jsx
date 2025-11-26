'use client'
import React from 'react'
import Link from 'next/link'
import { Facebook, Instagram, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-16">
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Brand + Info */}
        <div>
          <h2 className="text-2xl font-bold text-indigo-600">ProdMart</h2>
          <p className="text-gray-600 text-sm mt-3">
            Your trusted e-commerce platform for discovering and managing products.
          </p>
          <div className="mt-4 text-gray-600 text-sm space-y-1">
            <p>📧 support@prodmart.com</p>
            <p>📞 +880 1234 567 890</p>
            <p>📍 Dhaka, Bangladesh</p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li><Link href="/" className="hover:text-indigo-600 transition">Home</Link></li>
            <li><Link href="/shop" className="hover:text-indigo-600 transition">Shop</Link></li>
            <li><Link href="/add-product" className="hover:text-indigo-600 transition">Add Product</Link></li>
            <li><Link href="/manage-products" className="hover:text-indigo-600 transition">Manage Products</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Support</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li><Link href="#" className="hover:text-indigo-600 transition">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-indigo-600 transition">Terms & Conditions</Link></li>
            <li><Link href="#" className="hover:text-indigo-600 transition">FAQ</Link></li>
            <li><Link href="#" className="hover:text-indigo-600 transition">Help Center</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Follow Us</h3>
          <div className="flex items-center gap-4 mt-2">
            <Link href="#" className="p-2 bg-white rounded-full shadow hover:bg-indigo-50 transition">
              <Facebook className="w-4 h-4 text-indigo-600"/>
            </Link>
            <Link href="#" className="p-2 bg-white rounded-full shadow hover:bg-pink-50 transition">
              <Instagram className="w-4 h-4 text-pink-500"/>
            </Link>
            <Link href="#" className="p-2 bg-white rounded-full shadow hover:bg-blue-50 transition">
              <Twitter className="w-4 h-4 text-blue-500"/>
            </Link>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-gray-200 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} ProdMart. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
