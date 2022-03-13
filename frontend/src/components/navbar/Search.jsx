import React from 'react'
import styles from './Search.module.css'
import { changeField } from '../../redux/searchSlice'
import { useDispatch } from 'react-redux'
const Search = () => {
    const dispatch = useDispatch();
    return (

        <input type="text" placeholder="Search for something" className={styles.inp} onChange={(e) => dispatch(changeField(e.target.value))} />

    )
}

export default Search