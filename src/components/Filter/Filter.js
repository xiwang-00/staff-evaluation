import React, { useEffect, useState , } from 'react'
import classes from "./filter.module.scss"

function Filter({setNewId}) {

    const [activeClassStatus, setActiveClassStatus] = useState(0)

  const filterId =(id) => {
    setActiveClassStatus(id)
    setNewId(id)
  }

  return (
    <div className={classes.filter}>
        <button onClick={() => filterId(0)} className={`${activeClassStatus === 0 ? `${classes.filter__activeButton}` : ""} ${classes.filter__button}`}>Barcha filiallar</button>
        <button onClick={() => filterId(1)} className={`${activeClassStatus === 1 ? `${classes.filter__activeButton}` : ""} ${classes.filter__button}`} >Chilonzor</button>
        <button onClick={() => filterId(2)} className={`${activeClassStatus === 2 ? `${classes.filter__activeButton}` : ""} ${classes.filter__button}`} >Xadra</button>
        <button onClick={() => filterId(3)} className={`${activeClassStatus === 3 ? `${classes.filter__activeButton}` : ""} ${classes.filter__button}`} >Chimboy</button>
    </div>
  )
}

export default Filter