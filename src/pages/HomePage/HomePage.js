import React, { useEffect, useState } from 'react'
import Search from '../../components/Search/Search'
import StaffCard from '../../components/StaffCard'
import classes from "./homePage.module.scss"
import { motion } from "framer-motion";
import axios from 'axios'
import Card from '../../components/Card/Card';
import EmptySearchResult from '../../components/EmptySearchResult';
import Loading from '../../components/Loading';


function HomePage({ modalStatus, setModalStatus, userId, setUserId }) {

    const [mainSections, setMainSections] = useState({
        isFetched: false,
        data: [],
        error: null
    })
    const [searchValue, setSearchValue] = useState("")
    
    useEffect(() => {
        axios.get(searchValue.length ? `${process.env.REACT_APP_API_KEY}users?searchId=${searchValue}` : `${process.env.REACT_APP_API_KEY}sections`)
            .then(function (response) {
                setMainSections({
                    isFetched: true,
                    data: searchValue.length ? response.data.users : response.data.sections,
                    error: null
                })
            })
            .catch(function (error) {
                setMainSections({
                    isFetched: true,
                    data: [],
                    error: error
                })
            })
    }, [searchValue])

    return (
        <div className={classes.home} >
            <div className={classes.row}>
                <h1 className={classes.home__title} >Markaz bo’limlari</h1>
                <Search searchValue={searchValue} setSearchValue={setSearchValue} />
            </div>
            {
                    mainSections.isFetched ? (
                       <div className={classes.jobs__list} >
                           {
                             mainSections.data ?   mainSections.data.map((index) => (
                                    searchValue.length ?  <Card key={index.id} object={index} setUserId={setUserId} userId={userId}  modalStatus={modalStatus} setModalStatus={setModalStatus} /> : <StaffCard key={index.id} object={index} />
                            )) : <EmptySearchResult/>
                           }
                       </div>
                    )  : <Loading/>
                }

        </div>
    )
}

export default HomePage