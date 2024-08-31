import React from 'react'
import UserHeader from './UserHeader'
import UserHero from './UserHero'
import Ok from './Featured'
import Deals from "./Deals"
import Featured from './Featured'
import Footer from "../../Componet/Footer"
import RecentlyAdded from './Recent'
const UserDashboard = () => {
  return (
    <>
 
    <UserHeader/>
<UserHero />
<Featured/>

<Deals />
<RecentlyAdded/>
{/* <Footer /> */}

    </>
  )
}

export default UserDashboard