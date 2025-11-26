"use client";
import { Truck, ShieldCheck, Tag, Headphones } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Truck className="w-12 h-12 text-indigo-600" />, 
      title: "Fast Delivery",
      desc: "Quick and secure shipping for all your orders.",
    },
    {
      icon: <ShieldCheck className="w-12 h-12 text-indigo-600" />, 
      title: "Quality Assured",
      desc: "Every product is verified and guaranteed authentic.",
    },
    {
      icon: <Tag className="w-12 h-12 text-indigo-600" />, 
      title: "Best Prices",
      desc: "Transparent pricing with zero hidden charges.",
    },
    {
      icon: <Headphones className="w-12 h-12 text-indigo-600" />, 
      title: "24/7 Support",
      desc: "Our team is always here to assist you anytime.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Why Choose <span className="text-indigo-600">ProdMart</span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Experience reliability, platform-wide quality, and advanced support—all in one place.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-md border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="flex justify-center mb-5">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-600 mt-2 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}