import { Rating } from "@mui/material";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import RatingButton from "../RatingButton/RatingButton";
import classes from "./modal.module.scss"
import ThanksImg from "../../assets/images/thanks.png"

function Modal({ modalStatus, setModalStatus, userId }) {

    async function request(url,method, body) {
   
        let response = await fetch( url, {
            method,
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify(body)
            })
      let parsedResponse = await response.json()
      return parsedResponse
    }
    const navigate = useNavigate()
    const [value, setValue] = useState(0);
    const [starId, setStarId] = useState([]);
    const inputValue = useRef("");
    const [modalClass, setModalClass] = useState(false)

    const [evalutions, setEvalutions] = useState({
        isFetched: false,
        data: [],
        error: null
    })

    const [startsValue, setStarsValue] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_KEY}evaluations`)
            .then(function (response) {
                setEvalutions({
                    isFetched: true,
                    data: response.data.evaluations,
                    error: null
                })
            })
            .catch(function (error) {
                setEvalutions({
                    isFetched: true,
                    data: [],
                    error: error
                })
            })
    }, [])
 

    const handlerStarValue = (newValue) => {
        setValue(newValue);
        setStarsValue(evalutions.data.filter(item => item.star === newValue));
        setStarId([])
    }
    const collectAllId = async (e) => {
        e.preventDefault()
        
        // axios.post('http://3.15.235.227/v1/rateds/', {
        //     headers: {
        //         "Content-Type": "application/json",
        //         'accept': 'application/json'
        //     },
        //     data: {
        //         "additional":inputValue.current.value ,
        //         "evaluations": starId.map(item => {return {'id':item}}),
        //         "id": "",
        //         "is_staff_id": "",
        //         "user_id": userId
        //     }
        // })
        //     .then(function (response) {
        //         console.log(response);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
        let data = await request(`${process.env.REACT_APP_API_KEY}rateds` ,'POST' ,{
                    "additional":inputValue.current.value ,
                    "evaluations": starId.map(item => {return {'id':item}}),
                    "user_id": userId
        })
        // console.log(data);
        setStarId([])
        setValue(0)
        setStarsValue([])
        inputValue.current.value = ""
        // setModalStatus(!modalStatus)
        setModalClass(!modalClass)
        // navigate("/")
    }
    const handlerCloseModal = () => {
        setStarId([])
        setValue(0)
        setStarsValue([])
        setModalStatus(!modalStatus)
    }

    const handlerModalFulled = () => {
        navigate("/")
        setModalStatus(!modalStatus)
        setModalClass(!modalClass)
    }


    return (
        <div className={`${modalStatus === true ? `${classes.open}` : ""} ${classes.modal}`}  >
            <div onClick={() => handlerCloseModal()} className={classes.modal__overlay}></div>
            <div className={classes.modal__main} >
                <div className={`${modalClass ? `${classes.modal__active}` : ""} ${classes.modal__inner}`} >
                    <img className={classes.thanks__img} src={ThanksImg} alt="thanks img" width={221} height={131} />
                    <p className={classes.modal__title} >Ovozingiz uchun tashakkur</p>
                    <p className={classes.modal__text} >Sizning har bir ovozingiz biz uchun juda muhim ;)</p>
                    <button onClick={handlerModalFulled}  className={classes.modal__btn} type="button" >Yopish</button>
                </div>
                <h2 className={classes.modal__title} >Baholash</h2>
                <p className={classes.modal__text} >Sizning har bir ovozingiz biz uchun juda muhim ;)</p>
                <div className={classes.modal__rating}>
                    <Rating
                        name="`size-large"
                        value={value}
                        size="large"
                        onChange={(event, newValue) => {
                            handlerStarValue(newValue)
                        }}
                    />
                </div>
                {
                    startsValue.length ? (
                        <div className={classes.modal__row}>
                            {
                                startsValue.map((item, index) => <RatingButton key={index} starId={starId} setStarId={setStarId} id={item.id} label={item.content} title={item.content} />)
                            }
                        </div>

                    ) : ''
                }

                <form className={classes.modal__form} >
                    <input ref={inputValue} className={classes.modal__input} type="text" aria-label='comment staff' placeholder='Izoh' />
                    <div className={classes.form__footer}>
                        <div className={classes.form__inner} >
                            <Link to="/" className={classes.form__offer} >
                                Tugmani bosish orqali men <span className={classes.form__offer__span}>shaxsiy ma'lumotlarni</span> qayta ishlashga va <span className={classes.form__offer__span} >Platformadan foydalanish shartlariga</span> roziman
                            </Link>
                        </div>
                        <button onClick={collectAllId} className={classes.form__btn} type="submit" >Yuborish</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Modal