import React from 'react'
import UserResults from '../components/users/UserResults'
import UserSearch from '../components/users/UserSearch'

function Home() {
    return (
        <>
            {/* Search Users */}
            <UserSearch />
            {/* Users Results */}
            <UserResults />

        </>
    )
}

export default Home