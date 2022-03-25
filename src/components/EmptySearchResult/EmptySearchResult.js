import classes from "./emptySearchResult.module.scss"
import Empty from "../../assets/images/empty.svg"

function EmptySearchResult() {
  return (
    <div className={classes.empty} >
        <img src={Empty} alt="empty search result" />
        <p className={classes.empty__text} >Qidiruv natijasida hech narsa topilmadi</p>
    </div>
  )
}

export default EmptySearchResult