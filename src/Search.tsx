import {
   Grid,
   SearchBar,
   SearchContext,
   SearchContextManager,
} from "@giphy/react-components";
import { useContext } from "react";

function Search() {
   const { fetchGifs, searchKey } = useContext(SearchContext);

   return (
      <div className="flex w-96 p">
         
         <SearchContextManager
            className="flex justify-center"
            apiKey={"m1Y2kxBt0RWFGL0w5rd4OMys4IghjbcJ"}
         >
            <SearchBar />
            <Grid
               key={searchKey}
               columns={3}
               width={800}
               fetchGifs={fetchGifs}
            />
         </SearchContextManager>
      </div>
   );
}

export default Search;
