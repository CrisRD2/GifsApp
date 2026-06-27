import { useState } from 'react'
import { mockGifs } from './mock-data/gifs.mock'
import { CustomHeader } from './shared/components/CustomHeader'
import { SearchBar } from './shared/components/SearchBar'
import { PreviousSearches } from './gifs/components/PreviousSearches'
import { GifsList } from './gifs/components/GifsList'
import { getGifByQuery } from './gifs/actions/get-gifs-by-query.action'
import type { Gif } from './gifs/interfaces/gif.interface';
export const GifsApp = () => {
    const [gifs, setGifs] = useState<Gif[]>([]);
    const [previousTerms, setPreviousTerms] = useState<string[]>([])
    const handleTermClick = (term: string) => {
        handleSearch(term, true);
    };
    const handleSearch = async (query: string = '', isFromHistory = false) => {

        const term = query.trim().toLowerCase();
        if (term.length === 0) return;

        if (previousTerms.includes(term) && !isFromHistory) return;

        // COn esto evitamos que nos de un previous con mas de 8 elementos
        setPreviousTerms((prev) => {
            const filtered = prev.filter(item => item !== term);
            return [term, ...filtered].slice(0, 8);
        });



        const gifs = await getGifByQuery(query);
        console.log({ gifs });
        setGifs(gifs);

    }

    return (
        <>
            {/* Header */}
            <CustomHeader title='Buscador de gifs' description='Descubre y comparte el gif perfecto'></CustomHeader>
            {/* Search */}
            <SearchBar placeholder="Buscar gifs" onQuery={handleSearch} />
            {/* Busquedas previas */}
            <PreviousSearches searches={previousTerms} onLabelClick={handleTermClick} />
            {/* Gifs */}
            <GifsList gifs={gifs} />
        </>

    )
}
