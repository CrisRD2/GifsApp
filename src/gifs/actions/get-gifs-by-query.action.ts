import type { Gif } from '../components/interfaces/gif.interface'
import {giphyApi} from '../api/giphy.api';
import type { Giphyresponse } from '../components/interfaces/giphy.response';
export const getGifByQuery = async (query: string): Promise<Gif[]> => {


    const response = await giphyApi<Giphyresponse>('/search', {
        params: {
            q: query,
            limit: 10,
        },
    });

    return response.data.data.map((gif) => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.original.url,
        width: Number(gif.images.original.width),
        height: Number(gif.images.original.height),



    }));
/*     fetch('https://api.giphy.com/v1/gifs/search?api_key=DStWcPWhvZbXbulyv7rJT3oFVhQDIpGJ&q=nier&limit=25&lang=es')
 */};