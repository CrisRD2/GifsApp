import  { useRef, useState } from 'react'
import { getGifByQuery } from '../actions/get-gifs-by-query.action';
import type { Gif } from '../interfaces/gif.interface';

export const useGifs = () => {
    const [gifs, setGifs] = useState<Gif[]>([]);
    const [previousTerms, setPreviousTerms] = useState<string[]>([])
     const gifsCache = useRef<Record<string, Gif[]>>({});


    const handleTermClick = async (term: string) => {
        if (gifsCache.current[term]) {
            return;
        }
        const gifs = await getGifByQuery(term);
        setGifs(gifs);
    };
    const handleSearch = async (query: string = '') => {

        query.trim().toLowerCase();
        if (query.length === 0) return;

        if (previousTerms.includes(query)) return;
        setPreviousTerms([query, ...previousTerms].splice(0, 8));

        // COn esto evitamos que nos de un previous con mas de 8 elementos
        /* setPreviousTerms((prev) => {
            const filtered = prev.filter(item => item !== term);
            return [term, ...filtered].slice(0, 8);
        });
 */


        const gifs = await getGifByQuery(query);

        setGifs(gifs);
        gifsCache.current[query] = gifs;

    }

    return {
        // values
        gifs,
        previousTerms,

        //Methods / actions
        handleTermClick,
        handleSearch


    }


}
