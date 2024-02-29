import { GiphyFetch } from "@giphy/js-fetch-api";

const gf = new GiphyFetch("m1Y2kxBt0RWFGL0w5rd4OMys4IghjbcJ");

export async function fetchTrendingGifs() {
   const { data: gifs } = await gf.trending({ limit: 100 });
   return gifs;
}
export async function fetchSearchedGifs(query: string) {
   const { data: gifs } = await gf.search(query, {
      sort: "relevant",
      limit: 100,
      type: "gifs",
   });
   return gifs;
}
