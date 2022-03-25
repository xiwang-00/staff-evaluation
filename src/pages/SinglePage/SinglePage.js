import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import classes from "./singlePage.module.scss"
import Search from '../../components/Search/Search'
import Breadcrumb from '../../components/Breadcrumb'
import Filter from '../../components/Filter'
import Card from "../../components/Card/Card"
import SectionEvaluation from '../../components/SectionEvaluation'
import axios from 'axios'
import EmptySearchResult from '../../components/EmptySearchResult'
import Loading from '../../components/Loading'

function SinglePage({ modalStatus, setModalStatus, userId, setUserId }) {

  const { single, id } = useParams()
  const [newId, setNewId] = useState(0)



  const [usersArray, setUsersArray] = useState({
    isFetched: false,
    data: [],
    error: null
  })

  const [searchValue, setSearchValue] = useState("")

  useEffect(() => {
    let href = `${process.env.REACT_APP_API_KEY}users?section=${id}`
    axios.get(searchValue.length ? href + `&searchId=${searchValue}` + (newId > 0 ? `&branchId=${newId}` : '') : newId > 0 ? href + `&branchId=${newId}` : href)
      .then(function (response) {
        setUsersArray({
          isFetched: true,
          data: response.data.users ,
          error: null
        })
      })
      .catch(function (error) {
        setUsersArray({
          isFetched: true,
          data: [],
          error: error
        })
      })
  }, [newId, searchValue])

 



  return (
    <div className={classes.single} >
      <Breadcrumb currentPage={single} />
      <div className={classes.row}>
        <h2 className={classes.single__title}>{single}</h2>
        <Filter setNewId={setNewId} />
        <Search setSearchValue={setSearchValue} searchValue={searchValue} />
      </div>
      {
        usersArray.isFetched ? (
          <div className={classes.jobs__list} >
            {
              usersArray.data ? usersArray.data.map((item,index) => (
                <Card object={item} key={index} setUserId={setUserId} userId={userId} modalStatus={modalStatus} setModalStatus={setModalStatus} />
              )) : <EmptySearchResult/>
            }
          </div>
        ) : <Loading/>
      }
      {/* <SectionEvaluation section={single} /> */}
    </div>
  )
}

export default SinglePage