import React from 'react'
import { Link } from 'react-router-dom'
import classes from "./staffCard.module.scss"


function StaffCard({object}) {
  return (
    <Link to={`/${object.name}/${object.id}`} className={classes.staff__card}>
        <h2 className={classes.staff__title} >{object.name}</h2>
         {/* <p className={classes.staff__text} >{object.name}</p> */}
        <img className={classes.staff__img} src={`${process.env.REACT_APP_API_KEY}${object.cover}`} alt={object.name} />
    </Link>
  )
}

export default StaffCard