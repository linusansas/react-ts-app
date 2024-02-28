import { Outlet } from "react-router-dom";
import { Menu } from "./Menu";

function App() {
   return (
      <div className="h-full flex">
         <Menu />
         <main className="flex flex-col flex-1 pt-6 overflow-y-auto">
            <Outlet />
         </main>
      </div>
   );
}

export default App;
