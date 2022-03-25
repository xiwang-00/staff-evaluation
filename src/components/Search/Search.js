import React from 'react'
import classes from "./search.module.scss"

function Search({setSearchValue, searchValue}) {

    return (
        <input 
        onChange={(e) => setSearchValue(e.target.value)} value={searchValue} className={classes.search__input} type="text" aria-label='Search staff' placeholder='ID yoki I.F.Sh bilan qidiring' />
    )
}

export default Search