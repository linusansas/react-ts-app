import { IGif } from "@giphy/js-types";
import { useState } from "react";
import { fetchSearchedGifs } from "./fetch-gifs";

function Search() {
   const [gifs, setGifs] = useState<IGif[]>([]);
   const [query, setQuery] = useState("");

   function handleOnSearch() {
      const gifs = fetchSearchedGifs(query);
      gifs.then((gifs) => {
         setGifs(gifs);
      });
   }

   return (
      <div>
         <div className="m-2 flex gap-2">
            <input
               onChange={(e) => setQuery(e.target.value)}
               type="text"
               placeholder="Search for gifs"
               className="w-full p-2 border-2 border-gray-300"
            />
            <button
               onClick={() => {
                  handleOnSearch();
               }}
               className="bg-blue-500 text-white p-2"
            >
               Search
            </button>
         </div>
         <div className="flex flex-wrap justify-center">
            {gifs.map((gif) => (
               <img
                  key={gif.id}
                  src={gif.images.original.url}
                  alt={gif.title}
                  className="m-2 max-w-[200px] aspect-square"
               />
            ))}
         </div>
      </div>
   );
}

export default Search;
