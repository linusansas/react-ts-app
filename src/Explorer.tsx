import { IGif } from "@giphy/js-types";
import { useEffect, useState } from "react";
import { fetchTrendingGifs } from "./fetch-gifs";

function Explorer() {
   const [gifs, setGifs] = useState<IGif[]>([]);
   useEffect(() => {
      const gifs = fetchTrendingGifs();
      gifs.then((gifs) => {
         setGifs(gifs);
      });
   }, []);
   return (
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
   );
}

export default Explorer;
