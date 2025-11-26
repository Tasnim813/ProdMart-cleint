'use client'
import useAuth from '@/app/hook/useAuth';
import useAxios from '@/app/hook/useAxios';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const ManageProductsPage = () => {
  const axios = useAxios()
  const { user } = useAuth()
  const [products, setProducts] = useState([])
  const userEmail = user?.email;
  const [deleteCount, setDeleteCount] = useState(0)

  useEffect(() => {
    if (!userEmail) return;
    axios.get(`/products?email=${userEmail}`)
      .then(data => setProducts(data.data.products))
      .catch(err => console.log(err.message))
  }, [userEmail, deleteCount])

  const handleDelete = (id) => {
    axios.delete(`/products/${id}`)
      .then(data => {
        if (data.data.result.deletedCount) {
          toast.warning('Product Deleted')
          setDeleteCount(prev => prev + data.data.result.deletedCount)
        }
      }).catch(err => console.log(err.message))
  }

  return (
    <section className="my-10 lg:my-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Manage Products</h1>
              <p className="text-slate-600 text-sm mt-1">
                View, manage, and organize all your products in one place.
              </p>
            </div>
            <p className="text-xs text-slate-500">
              Total products: <span className="font-semibold text-slate-700">{products.length}</span>
            </p>
          </div>

          {/* Container */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-4 sm:p-6">

            {/* Table for Desktop */}
            <div className="hidden md:block overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-500 text-xs uppercase tracking-wide">
                    <th className="py-3 pr-4">Title</th>
                    <th className="py-3 px-4">Category</th>
                    <th className="py-3 px-4">Price</th>
                    <th className="py-3 px-4">Priority</th>
                    <th className="py-3 px-4">Stock</th>
                    <th className="py-3 px-4">Date</th>
                    <th className="py-3 pl-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map(item => (
                    <tr key={item._id} className="border-b border-slate-100 last:border-0 hover:bg-slate-50/80 transition">
                      <td className="py-3 pr-4 font-medium text-slate-900 line-clamp-1">{item.title}</td>
                      <td className="py-3 px-4 text-slate-600">{item.category}</td>
                      <td className="py-3 px-4 text-slate-900 font-semibold">${item.price}</td>
                      <td className="py-3 px-4">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium ${
                          item.priority === 'High' ? 'bg-red-50 text-red-600 border border-red-100' :
                          item.priority === 'Medium' ? 'bg-amber-50 text-amber-600 border border-amber-100' :
                          'bg-emerald-50 text-emerald-600 border border-emerald-100'
                        }`}>{item.priority}</span>
                      </td>
                      <td className="py-3 px-4 text-slate-700">{item.stock}</td>
                      <td className="py-3 px-4 text-slate-600 text-xs">{item.date}</td>
                      <td className="py-3 pl-4">
                        <div className="flex justify-end gap-2">
                          <Link href={`/shop/${item._id}`} className="px-3 py-1.5 text-xs rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 transition">View</Link>
                          <button onClick={() => handleDelete(item._id)} className="px-3 py-1.5 text-xs rounded-lg bg-red-500 text-white hover:bg-red-600 transition">Delete</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="grid gap-4 md:hidden mt-4">
              {products.map(item => (
                <div key={item._id} className="border border-slate-200 rounded-xl p-4 bg-slate-50/80">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-semibold text-slate-900">{item.title}</h3>
                      <p className="text-xs text-slate-500 mt-0.5">{item.category}</p>
                    </div>
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-[10px] font-medium ${
                      item.priority === 'High' ? 'bg-red-50 text-red-600 border border-red-100' :
                      item.priority === 'Medium' ? 'bg-amber-50 text-amber-600 border border-amber-100' :
                      'bg-emerald-50 text-emerald-600 border border-emerald-100'
                    }`}>{item.priority}</span>
                  </div>
                  <div className="mt-3 flex items-center justify-between text-xs text-slate-600">
                    <span>Price: <span className="font-semibold text-slate-900">${item.price}</span></span>
                    <span>Stock: <span className="font-semibold text-slate-900">{item.stock}</span></span>
                  </div>
                  <p className="mt-1 text-[11px] text-slate-500">Date: {item.date}</p>
                  <div className="mt-3 flex gap-3">
                    <Link href={`/shop/${item._id}`} className="flex-1 px-3 py-1.5 text-xs rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 transition">View</Link>
                    <button onClick={() => handleDelete(item._id)} className="flex-1 px-3 py-1.5 text-xs rounded-lg bg-red-500 text-white hover:bg-red-600 transition">Delete</button>
                  </div>
                </div>
              ))}
            </div>

            {products.length === 0 && (
              <h4 className='capitalize text-center py-10 text-xl text-slate-600 font-bold'>No products found</h4>
            )}

          </div>
        </div>
      </div>
    </section>
  )
}

export default ManageProductsPage
