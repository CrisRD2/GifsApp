import { CustomHeader } from './shared/components/CustomHeader'
import { SearchBar } from './shared/components/SearchBar'
import { PreviousSearches } from './gifs/components/PreviousSearches'
import { GifsList } from './gifs/components/GifsList'
import { useGifs } from './gifs/hooks/useGifs'
export const GifsApp = () => {

    const { gifs, previousTerms, handleSearch, handleTermClick } = useGifs();

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
