import { useState } from 'react'
import { mockGifs } from './mock-data/gifs.mock'
import { CustomHeader } from './shared/components/CustomHeader'
import { SearchBar } from './shared/components/SearchBar'
import { PreviousSearches } from './gifs/components/PreviousSearches'
import { GifsList } from './gifs/components/GifsList'

export const GifsApp = () => {
    const [previousTerms, setPreviousTerms] = useState(['nier'])
    const handleTermClick = (term: string) => { 
        console.log({term});
    };
    return (
        <>
            {/* Header */}
            <CustomHeader title='Buscador de gifs' description='Descubre y comparte el gif perfecto'></CustomHeader>
            {/* Search */}
            <SearchBar placeholder="Buscar gifs" />
            {/* Busquedas previas */}
            <PreviousSearches searches={previousTerms} onLabelClick={handleTermClick} />
            {/* Gifs */}
            <GifsList gifs={mockGifs} />
        </>

    )
}
