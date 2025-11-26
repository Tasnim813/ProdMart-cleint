"use client";

import Link from "next/link";
import React, { useState } from "react";
import CustomLink from "../ui/CustomLink";
import { FaBars, FaWindowClose } from "react-icons/fa";
import useAuth from "@/app/hook/useAuth";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, userLogOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  const links = (
    <>
      <li onClick={closeMenu}>
        <CustomLink href="/" label="Home" />
      </li>
      <li onClick={closeMenu}>
        <CustomLink href="/shop" label="Shop" />
      </li>
      <li onClick={closeMenu}>
        <CustomLink href="/about" label="About" />
      </li>
      <li onClick={closeMenu}>
        <CustomLink href="/contact" label="Contact" />
      </li>
      {user && (
        <>
          <li onClick={closeMenu}>
            <CustomLink href="/dashboard/manage" label="Manage Products" />
          </li>
          <li onClick={closeMenu}>
            <CustomLink href="/dashboard/add-product" label="Add Product" />
          </li>
        </>
      )}
    </>
  );

  return (
    <header className="sticky top-0 py-3 bg-white shadow-md z-50">
      <nav className="container mx-auto flex justify-between items-center px-6">

        {/* LOGO */}
        <Link className="logo font-bold text-2xl text-indigo-600" href="/">
          ProdMart
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex gap-8 items-center font-medium text-gray-700">
          {links}
        </ul>

        {/* DESKTOP LOGIN BUTTON */}
        {!user && (
          <Link href="/login" className="hidden lg:inline-block px-5 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition">
            Login
          </Link>
        )}

        {/* MOBILE MENU BUTTON */}
        <button onClick={() => setIsOpen(true)} className="lg:hidden text-3xl text-gray-700">
          <FaBars />
        </button>

        {/* USER PROFILE */}
        {user && (
          <div className="relative ml-4">
            <button onClick={() => setInfoOpen(!infoOpen)} className="rounded-full border-2 border-indigo-600 p-0.5">
              <img
                src={user.photoURL || "https://img.freepik.com/premium-vector/male-face-avatar-icon-set-flat-design-social-media-profiles_1281173-3806.jpg"}
                alt={user.displayName}
                className="w-10 h-10 rounded-full"
              />
            </button>

            {infoOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white shadow-lg rounded-lg border p-4 space-y-2 text-gray-700">
                <p className="font-semibold">{user.displayName}</p>
                <p className="text-sm">{user.email}</p>
                <button
                  onClick={() => userLogOut().then(() => toast.info("Logged out successfully"))}
                  className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </nav>

      {/* MOBILE MENU */}
      <div className={`fixed top-0 right-0 w-3/4 max-w-xs h-full bg-indigo-600 text-white transform duration-500 p-6 lg:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-3xl">
          <FaWindowClose />
        </button>

        <ul className="mt-16 space-y-6 text-lg font-medium">
          {links}
        </ul>

        {!user && (
          <Link
            href="/login"
            onClick={closeMenu}
            className="block mt-8 w-full text-center bg-white text-indigo-600 py-2 rounded-lg shadow hover:bg-gray-100 transition"
          >
            Login
          </Link>
        )}
      </div>
    </header>
  );
};

export default Navbar;

// "use client";

// import Link from "next/link";
// import React, { useState } from "react";
// import CustomLink from "../ui/CustomLink";
// import { FaBars, FaWindowClose } from "react-icons/fa";
// import Image from "next/image";
// import { toast } from "react-toastify";
// import useAuth from "@/app/hook/useAuth";

// const Navbar = () => {
//   const { user, userLogOut } = useAuth();
//   const [isOpen, setIsOpen] = useState(false);
//   const [infoOpen, setInfoOpen] = useState(false);

//   const closeMenu = () => setIsOpen(false);

//   const links = (
//     <>
//       <li onClick={closeMenu}>
//         <CustomLink href="/" label="Home" />
//       </li>
//       <li onClick={closeMenu}>
//         <CustomLink href="/shop" label="Shop" />
//       </li>
//       <li onClick={closeMenu}>
//         <CustomLink href="/about" label="About" />
//       </li>
//       <li onClick={closeMenu}>
//         <CustomLink href="/contact" label="Contact" />
//       </li>

//       {user && (
//         <>
//           <li onClick={closeMenu}>
//             <CustomLink href="/dashboard/manage" label="Manage Products" />
//           </li>

//           <li onClick={closeMenu}>
//             <CustomLink href="/dashboard/add-product" label="Add Product" />
//           </li>
//         </>
//       )}
//     </>
//   );

//   return (
//     <header className="sticky top-0 py-3 bg-white shadow-sm z-50">
//       <nav className="container flex justify-between items-center">

//         {/* LOGO */}
//         <Link className="logo font-bold text-xl" href="/">
//           Prodexa
//         </Link>

//         {/* DESKTOP MENU */}
//         <ul className="hidden lg:flex gap-6 items-center">{links}</ul>

//         {/* DESKTOP LOGIN BUTTON */}
//         {!user && (
//           <Link
//             className="btn-primary hidden lg:inline-block"
//             href="/login"
//           >
//             Login
//           </Link>
//         )}

//         {/* MOBILE MENU BUTTON */}
//         <button
//           onClick={() => setIsOpen(true)}
//           className="text-3xl cursor-pointer lg:hidden"
//         >
//           <FaBars />
//         </button>

//         {/* USER PROFILE (Desktop + Mobile) */}
//         {user && (
//           <div className="relative">
//             <button
//               onClick={() => setInfoOpen(!infoOpen)}
//               className="rounded-full outline-none"
//             >
//               <img
//                 className="size-12 rounded-full border"
//                 src={
//                   user?.photoURL ||
//                   "https://img.freepik.com/premium-vector/male-face-avatar-icon-set-flat-design-social-media-profiles_1281173-3806.jpg"
//                 }
//                 alt={user?.displayName}
//               />
//             </button>

//             {infoOpen && (
//               <div className="absolute right-0 mt-3 bg-white shadow-xl border p-4 rounded-lg w-56 space-y-2 text-slate-700">
//                 <p className="font-semibold">{user?.displayName}</p>
//                 <p className="text-sm">{user?.email}</p>

//                 <button
//                   onClick={() =>
//                     userLogOut().then(() => toast.info("Logged out successfully"))
//                   }
//                   className="btn-primary w-full"
//                 >
//                   Logout
//                 </button>
//               </div>
//             )}
//           </div>
//         )}
//       </nav>

//       {/* MOBILE MENU */}
//       <div
//         className={`fixed top-0 right-0 bg-slate-900/90 backdrop-blur-xl h-full w-3/4 max-w-xs text-white p-6 transform duration-500 lg:hidden ${
//           isOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         <button
//           onClick={() => setIsOpen(false)}
//           className="absolute top-4 right-4 text-3xl"
//         >
//           <FaWindowClose />
//         </button>

//         <ul className="mt-16 space-y-6 text-lg">{links}</ul>

//         {!user && (
//           <Link
//             href="/login"
//             onClick={closeMenu}
//             className="block mt-8 btn-primary text-center"
//           >
//             Login
//           </Link>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Navbar;
