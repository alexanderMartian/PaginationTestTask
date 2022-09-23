import React, {useEffect, useState} from 'react'
import {useSelector} from "react-redux"
import PropTypes from 'prop-types'

import {
  Link
} from 'react-router-dom'

import Pagination from 'react-router-pagination-io/client/app/components/common/pagination'

import User from "../user/user";


const PaginatedPage = ({pageNumber}) => {

  const {paginatedPage} = useSelector(state => state.paginatedPage)
  const [users, setUsers] = useState([])

  useEffect( () => {
    paginatedPage && setUsers(paginatedPage)
  }, [paginatedPage])

  return (
    <section>
      <h1>Pagination (Page {pageNumber})</h1>
      <div className="usersWrapper">
        {users?.map(user => <User
          key={user.id.value + user.email + user.dob.date}
          email={user.email}
          firstName={user.name.first}
          lastName={user.name.last}
          avatar={user.picture.large}
        />)}
      </div>
      <Pagination />
      <nav>
        <p>Return to the <Link to='/'>index page</Link>.</p>
        {do {
          if (pageNumber) {
            <p>Redux has state for page {pageNumber}.</p>
          }
        }}
      </nav>
    </section>
  )
}

PaginatedPage.propTypes = {
  pageNumber: PropTypes.number.isRequired
}

export default PaginatedPage
