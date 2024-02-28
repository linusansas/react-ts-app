import { GiphyFetch } from "@giphy/js-fetch-api";
import { Grid } from "@giphy/react-components";

function Explorer() {
   const gf = new GiphyFetch("m1Y2kxBt0RWFGL0w5rd4OMys4IghjbcJ");
   const fetchGifs = (offset: number) => gf.trending({ offset, limit: 10 });

   return (
      <div className="flex justify-center">
         <Grid
            width={600}
            columns={3}
            borderRadius={10}
            fetchGifs={fetchGifs}
            hideAttribution={true}
         />
      </div>
   );
}

export default Explorer;
