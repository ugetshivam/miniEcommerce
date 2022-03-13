import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'


const SearchContext = createContext({
    searchField: "",
    changeField: (item) => { }
})

export const SearchContextProvider = (props) => {
    const initialSearch = "";

    const [search, setSearch] = useState(initialSearch);

    const changeField = (item) => {
        setSearch(item);
    }

    const context = {
        searchField: search,
        changeField: changeField
    }

    return (
        <SearchContext.Provider value={context}>
            {props.children}
        </SearchContext.Provider>
    )
}

export default SearchContext