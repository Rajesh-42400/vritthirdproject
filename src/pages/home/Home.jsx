import React from 'react'
import Rent from '../demos/rent/Rent'
import OfficeContents from '../demos/office/OfficeContents'
import Locations from '../demos/locations/Locations'
import Work from '../demos/work/Work'
import Advertisement from '../demos/advertisement/Advertisement'
import GetUpdates from '../demos/getupdates/GetUpdates'

const Home = () => {
  return (
    <>
    <main>
      <Rent />
      <OfficeContents />
      <Locations />
      <Work />
      <Advertisement />
      <GetUpdates />
    </main>
    </>
  )
}

export default Home