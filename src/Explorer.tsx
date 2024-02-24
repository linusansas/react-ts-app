import { GiphyFetch } from "@giphy/js-fetch-api";
import { Grid } from "@giphy/react-components";

function Explorer() {
   const gf = new GiphyFetch("Yu7SHmNbQ8n2J5JGeoL0TiCffSgIZSVA");
   const fetchGifs = (offset: number) => gf.trending({ offset, limit: 10 });

   return (
      <div className="flex justify-center">
         Explore gifs
         {/* Render the Grid component and pass fetchGifs as a prop */}
         <Grid width={800} columns={3} fetchGifs={fetchGifs} />
      </div>
   );
}

export default Explorer;
