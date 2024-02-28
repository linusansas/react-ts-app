import {
   GifIcon,
   HeartIcon,
   MagnifyingGlassCircleIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export function Menu() {
   const location = useLocation();
   const { pathname } = location;
   const [activeTab, setActiveTab] = useState(pathname);

   return (
      <aside className="bg-gray-200 w-full h-auto md:w-20 md:h-screen md:flex md:flex-col md:justify-between fixed left-0 top-0 overflow-y-auto">
         <div className="flex flex-wrap justify-center md:justify-between items-center p-2 md:flex-col">
            <Link to="/explorer" onClick={() => setActiveTab("/explorer")}>
               <GifIcon
                  className={`h-14 w-14 p-2 cursor-pointer ${
                     activeTab === "/" || activeTab === "/explorer"
                        ? "text-blue-500"
                        : ""
                  }`}
               />
            </Link>
            <Link to="/search" onClick={() => setActiveTab("/search")}>
               <MagnifyingGlassCircleIcon
                  className={`h-14 w-14 p-2 cursor-pointer ${
                     activeTab === "/search" ? "text-blue-500" : ""
                  }`}
               />
            </Link>
            <Link to="/liked" onClick={() => setActiveTab("/liked")}>
               <HeartIcon
                  className={`h-14 w-14 p-2 cursor-pointer ${
                     activeTab === "/liked" ? "text-blue-500" : ""
                  }`}
               />
            </Link>
         </div>
      </aside>
   );
}
