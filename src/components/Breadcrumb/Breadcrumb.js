import classes from "./breadcrumb.module.scss"
import { Link } from 'react-router-dom'
import arrow from "../../assets/images/next-icon.svg"

function Breadcrumb({currentPage}) {
  return (
    <div className={classes.breadcrumb}>
        <Link className={classes.link} to="/">Bosh sahifa</Link>
        <img src={arrow} alt="next, right arrow" />
        <p className={classes.current__page}>{currentPage}</p>
    </div>
  )
}

export default Breadcrumb