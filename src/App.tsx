import { GifIcon } from "@heroicons/react/16/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Link, Outlet } from "react-router-dom";

function App() {
   return (
      <div className="h-full flex flex-col">
         <header className="to-black">
            <div className="flex justify-center">
               <Link to="/explorer">
                  <GifIcon className="h-20 w-20 p-4 cursor-pointer" />
               </Link>
               <Link to="/search">
                  <MagnifyingGlassIcon className="h-20 w-20 p-4 cursor-pointer" />
               </Link>
            </div>
         </header>
         <main className="flex">
               <Outlet />
         </main>
      </div>
   );
}

export default App;
