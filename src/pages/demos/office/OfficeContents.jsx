import React from 'react'
import { OfficeCard } from '../../../components/card/Card'

const OfficeContents = () => {
    let officeData = [
        {
           title: "06",
           description: "Offices are available on different countries"
        },
        {
            title: "238",
            description: "Seats are available right now with dedicated support"
         },
         {
            title: "1,395",
            description: "People are using our co-work spaces right now"
         }


    ]
  return (
    <>
            <div className="container-fluid py-5 border-bottom">
                <div className="container">
                <div className="row">
                        {officeData?.map(({title, description}, index) => <OfficeCard key={index} title={title} description={description} /> )}
                </div>
                </div>
            </div>
    </>
  )
}

export default OfficeContents