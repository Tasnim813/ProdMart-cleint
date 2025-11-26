'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProductCard = ({ product }) => {
    const { _id, title, fullDescription, price, photo, category } = product;

    return (
        <div className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition p-4 flex flex-col">
            <div className="w-full h-64 rounded-xl overflow-hidden bg-gray-100">
                <Image
                    src={photo}
                    alt={title}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                    unoptimized
                />
            </div>

            <h3 className="text-lg font-bold text-gray-900 mt-3 line-clamp-1">
                {title}
            </h3>

            <div className="flex justify-between items-center mt-2">
                <p className="text-indigo-600 font-semibold text-base">${price}</p>
                <span className="text-sm text-gray-500 px-2 py-1 bg-indigo-50 rounded-full">{category}</span>
            </div>

            <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                {fullDescription}
            </p>

            <Link
                href={`/shop/${_id}`}
                className="mt-4 bg-indigo-600 text-white py-2 rounded-lg text-center font-semibold shadow hover:bg-indigo-700 transition"
            >
                View Details
            </Link>
        </div>
    );
};

export default ProductCard;