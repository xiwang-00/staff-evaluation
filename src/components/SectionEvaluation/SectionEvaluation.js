import classes from "./sectionEvaluation.module.scss"

function SectionEvaluation({section}) {

    let arr = section.split(" ")
   
    if(arr[1] === "bo'limi"){
       arr.splice(1)
    }else {
        arr = section
    }

  return (
    <div className={classes.sectionEvaluation} ><p className={classes.sectionEvaluation__text} >{arr} bo'limini baholash</p></div>
  )
}

export default SectionEvaluation