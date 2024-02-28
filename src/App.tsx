import {
   GifIcon,
   HeartIcon,
   MagnifyingGlassCircleIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

function App() {
   const [activeTab, setActiveTab] = useState("explorer");

   return (
      <div className="h-full flex">
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

         <main className="flex flex-col flex-1 pt-6 overflow-y-auto">
            <Outlet />
         </main>
      </div>
   );
}

export default App;
