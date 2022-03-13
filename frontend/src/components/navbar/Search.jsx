import React from 'react'
import styles from './Search.module.css'
import SearchContext from '../contexts/SearchContext'
import { useContext } from 'react'
const Search = () => {
    const searchCtx = useContext(SearchContext);
    return (

        <input type="text" placeholder="Search for something" className={styles.inp} onChange={(e) => searchCtx.changeField(e.target.value)} />

    )
}

export default Search