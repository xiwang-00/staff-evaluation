import React, { useState } from "react";
import { motion } from "framer-motion";
import classes from "./card.module.scss"
import { Link } from "react-router-dom";

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
};

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};

const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
}



function Card({ modalStatus, setUserId, setModalStatus, object }) {


    const func = (id) => {
        setUserId(id)
        setModalStatus(!modalStatus)
    }


    return (
        <div onClick={() => func(object.Id)} className={classes.card}>
            {/* <img className={classes.card__img} src={object.img} alt="hello" /> */}
            <div>
                <h3 className={classes.card__title} >{object.firstName} {object.lastName}</h3>
                <p className={classes.card__id} >ID: {object.specId}</p>
            </div>
        </div>
    )
};

export default Card;


