import React from 'react';
import { useForm } from 'react-hook-form';

const page = () => {
  
 
  return (
     <div className="p-5 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Add Product</h2>
      <form className="space-y-4">
        {/* tittle */}
        <input name="title" placeholder="Title" className="w-full p-2 border rounded"   />
        <input name="shortDesc" placeholder="Short Desc" className="w-full p-2 border rounded"  />
        <textarea name="fullDesc" placeholder="Full Desc" className="w-full p-2 border rounded" />
        <input name="price" placeholder="Price" className="w-full p-2 border rounded"  />
        <input name="image" placeholder="Image URL" className="w-full p-2 border rounded" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </div>
  );
};

export default page;