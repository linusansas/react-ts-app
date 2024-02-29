import { Outlet } from "react-router-dom";
import { Menu } from "./components/Menu";
import Footer from "./components/Footer";

function App() {
   return (
      <div className="h-full flex">
         <Menu />
         <main className="flex-1 overflow-y-auto md:ml-20">
            <div className="pt-4 max-w-screen-lg mx-auto">
               <Outlet />
            </div>
               <Footer />
         </main>
      </div>
   );
}

export default App;
