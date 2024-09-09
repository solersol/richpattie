

// // import { logoMain } from "../assets/images";
// // import { navLinks } from "../constants";

// // const Nav = () => {
// //   return (
// //     <header className="w-full z-10 ">
// //       <nav className="bg-transparent opacity-50 dark:bg-gray-900/80 backdrop-blur-lg sticky top-6 start-0 border border-black dark:border-gray-600 rounded-lg mx-auto  max-w-screen-xl p-4 z-20 shadow-lg">
// //         <div className="flex flex-wrap items-center justify-between ">
// //           {/* Logo Section */}
// //           <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
// //             <img src={logoMain} className="h-8" alt="Logo" />
// //           </a>

// //           {/* Buttons and Hamburger Menu */}
// //           <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
// //             <button
// //               type="button"
// //               className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
// //             >
// //               BUY NOW
// //             </button>
// //             <button
// //               data-collapse-toggle="navbar-sticky"
// //               type="button"
// //               className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
// //               aria-controls="navbar-sticky"
// //               aria-expanded="false"
// //             >
// //               <span className="sr-only">Open main menu</span>
// //               <svg
// //                 className="w-5 h-5"
// //                 aria-hidden="true"
// //                 xmlns="http://www.w3.org/2000/svg"
// //                 fill="none"
// //                 viewBox="0 0 17 14"
// //               >
// //                 <path
// //                   stroke="currentColor"
// //                   strokeLinecap="round"
// //                   strokeLinejoin="round"
// //                   strokeWidth="2"
// //                   d="M1 1h15M1 7h15M1 13h15"
// //                 />
// //               </svg>
// //             </button>
// //           </div>

// //           {/* Nav Links */}
// //           <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
// //             <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
// //               {navLinks.map((item) => (
// //                 <li key={item.label}>
// //                   <a
// //                     href={item.href}
// //                     className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
// //                   >
// //                     {item.label}
// //                   </a>
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>
// //         </div>
// //       </nav>
// //     </header>
// //   );
// // };

// // export default Nav;




// import { logoMain } from "../assets/images";
// import { navLinks } from "../constants";

// const Nav = () => {
//   return (
//     <header className="w-full z-10">
//       <nav className="bg-transparent border-4 border-black sticky top-6 start-0 rounded-lg mx-auto max-w-screen-xl p-4 z-20">
//         <div className="flex flex-wrap items-center justify-between">
//           {/* Logo Section */}
//           <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
//             <img src={logoMain} className="h-8" alt="Logo" />
//           </a>

//           {/* Buttons and Hamburger Menu */}
//           <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
//             <button
//               type="button"
//               className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//             >
//               BUY NOW
//             </button>
//             <button
//               data-collapse-toggle="navbar-sticky"
//               type="button"
//               className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//               aria-controls="navbar-sticky"
//               aria-expanded="false"
//             >
//               <span className="sr-only">Open main menu</span>
//               <svg
//                 className="w-5 h-5"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 17 14"
//               >
//                 <path
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M1 1h15M1 7h15M1 13h15"
//                 />
//               </svg>
//             </button>
//           </div>

//           {/* Nav Links */}
//           <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
//             <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
//               {navLinks.map((item) => (
//                 <li key={item.label}>
//                   <a
//                     href={item.href}
//                     className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//                   >
//                     {item.label}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Nav;


import { logoMain, cardImage1, img1 } from "../assets/images"; // Assuming you have twitterIcon and telegramIcon
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="w-full z-10">
      <nav className="bg-transparent border-4 border-black sticky top-6 start-0 rounded-lg mx-auto max-w-screen-xl p-4 z-20">
        <div className="flex flex-wrap items-center justify-between">
          {/* Logo Section */}
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logoMain} className="h-8" alt="Logo" />
          </a>

          {/* Twitter and Telegram Icons */}
          <div className="flex md:order-2 space-x-3 rtl:space-x-reverse">
            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full overflow-hidden border-2 border-black hover:scale-110 transition-transform"
            >
              <img
                src={img1}
                alt="Twitter"
                className="w-full h-full object-cover"
              />
            </a>
            <a
              href="https://t.me/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full overflow-hidden border-2 border-black hover:scale-110 transition-transform"
            >
              <img
                src={cardImage1}
                alt="Telegram"
                className="w-full h-full object-cover"
              />
            </a>
          </div>

          {/* Nav Links */}
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
