import React, { Fragment } from 'react'
import Search from "../components/users/Search";
import Users from "../components/users/Users";

function Home() {
    return (
        <Fragment>
            <Search />
            <Users />
        </Fragment>
    )
}

export default Home
