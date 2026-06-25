import { useState } from 'react'
import { mockGifs } from './mock-data/gifs.mock'
import { CustomHeader } from './shared/components/CustomHeader'
import { SearchBar } from './shared/components/SearchBar'
import { PreviousSearches } from './gifs/components/PreviousSearches'
import { GifsList } from './gifs/components/GifsList'
import { getGifByQuery } from './gifs/actions/get-gifs-by-query.action'

export const GifsApp = () => {
    const [previousTerms, setPreviousTerms] = useState(['nier'])
    const handleTermClick = (term: string) => {
        console.log({ term });
    };
    const handleSearch = async(query: string = '') => {

        const term = query.trim().toLowerCase();
        if (term.length === 0) return;

        if (previousTerms.includes(term)) return;

        // COn esto evitamos que nos de un previous con mas de 8 elementos
        setPreviousTerms((prev) => [term, ...prev].slice(0, 8));

      const gifs=  await getGifByQuery(query);
      console.log({gifs});

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
            <GifsList gifs={mockGifs} />
        </>

    )
}
