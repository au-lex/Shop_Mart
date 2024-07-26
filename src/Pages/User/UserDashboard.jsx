import React from 'react'
import UserHeader from './UserHeader'
import UserHero from './UserHero'
import Ok from './Featured'
import Deals from "./Deals"

const UserDashboard = () => {
  return (
    <>
    <UserHeader/>
<UserHero />
<Deals />
<Ok />
    </>
  )
}

export default UserDashboard