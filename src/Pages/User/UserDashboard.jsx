import React from 'react'
import UserHeader from './UserHeader'
import UserHero from './UserHero'
import Ok from './Featured'
import Deals from "./Deals"
import Featured from './Featured'

const UserDashboard = () => {
  return (
    <>
 
    <UserHeader/>
<UserHero />
<Featured/>

<Deals />

    </>
  )
}

export default UserDashboard