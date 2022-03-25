import React  from 'react'
import classes from "./ratingButton.module.scss"

function RatingButton({title , starId, setStarId ,id,label}) {
    const add =() =>{
       let find = starId.find(item => item == id)
       if(find){
            let n = starId.filter(item => item !== id)
             setStarId([...n])
       }
       else{
            setStarId([...starId,id])
       }
    }

    return (
        <div onClick={add}  className={`${starId.includes(id) ? `${classes.active}` : ''} ${classes.rating}`} >
            <input className={classes.rating__input}  type="checkbox" />
            <label  className={classes.rating__button} >
                <span className={classes.rating__text} >{title}</span>
                <span className={classes.rating__span}></span>
            </label>
        </div>
    )
}

export default RatingButton