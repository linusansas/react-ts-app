import {
   GifIcon,
   HeartIcon,
   MagnifyingGlassCircleIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Menu() {
   const [activeTab, setActiveTab] = useState("explorer");
   return (
      <aside className="bg-gray-200 w-20 h-screen flex flex-col justify-between">
         <div className="flex flex-col items-center p-2">
            <Link to="/explorer" onClick={() => setActiveTab("explorer")}>
               <GifIcon
                  className={`h-14 w-14 p-2 cursor-pointer ${
                     activeTab === "explorer" ? "text-blue-500" : ""
                  }`}
               />
            </Link>
            <Link to="/liked" onClick={() => setActiveTab("liked")}>
               <HeartIcon
                  className={`h-14 w-14 p-2 cursor-pointer ${
                     activeTab === "liked" ? "text-blue-500" : ""
                  }`}
               />
            </Link>
            <Link to="/search" onClick={() => setActiveTab("search")}>
               <MagnifyingGlassCircleIcon
                  className={`h-14 w-14 p-2 cursor-pointer ${
                     activeTab === "search" ? "text-blue-500" : ""
                  }`}
               />
            </Link>
         </div>
      </aside>
   );
}
