import React from 'react'
import UserHeader from './UserHeader'
import UserHero from './UserHero'
import Ok from './Featured'
import Deals from "./Deals"
import Featured from './Featured'
import Footer from "../../Componet/Footer"
import RecentlyAdded from './Recent'
import Loader from '../../Componet/Loader'
const UserDashboard = () => {
  return (
    <>
    <Loader/>
 
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