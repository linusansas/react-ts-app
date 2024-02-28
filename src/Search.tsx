import { IGif } from "@giphy/js-types";
import { useEffect, useState } from "react";
import { fetchSearchedGifs } from "./fetch-gifs";

function Search() {
   const [gifs, setGifs] = useState<IGif[]>([]);
   const [searchTerm, setSearchTerm] = useState("");
   const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

   useEffect(() => {
      const delayDebounceFn = setTimeout(() => {
         setDebouncedSearchTerm(searchTerm);
      }, 500);

      return () => clearTimeout(delayDebounceFn);
   }, [searchTerm]);

   useEffect(() => {
      const gifs = fetchSearchedGifs(debouncedSearchTerm);
      gifs.then((gifs) => {
         setGifs(gifs);
      });
   }, [debouncedSearchTerm]);

   return (
      <>
         <div className="m-6 mt-20 md:mt-0 flex gap-2 md:flex">
            <input
               onChange={(e) => setSearchTerm(e.target.value)}
               type="text"
               placeholder="Search for gifs"
               className="w-full p-2 border-2 border-gray-300"
            />
         </div>
         <div className="flex flex-wrap justify-center">
            {gifs.length > 0 ? (
               gifs.map((gif) => (
                  <img
                     key={gif.id}
                     src={gif.images.original.url}
                     alt={gif.title}
                     className="m-2 max-w-[200px] aspect-square"
                  />
               ))
            ) : (
               <p className="font-thin mt-2">No gifs found</p>
            )}
         </div>
      </>
   );
}

export default Search;
