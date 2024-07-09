import React from 'react'
import { LocationCard } from '../../../components/card/Card'

const Locations = () => {
    let locationData = [
        {
            image: "/src/assets/images/Bitmap.png",
            title: "Beauview",
            description: "37 seats"
        },
        {
            image: "/src/assets/images/Bitmap (1).png",
            title: "Haleyborough",
            description: "12 seats"
        },
        {
            image: "/src/assets/images/Bitmap (2).png",
            title: "Jeromyshire",
            description: "28 seats"
        }
        
    ]
        
  return (
   <>
    <div className="container my-5">
        <p className="font-48-700 secondary-color text-center">Popular locations</p>
        <p className="font-19-400 secondary-color font-primary-opacity text-center">
          With lots of unique blocks, you can easily build a page <br />
          easily without any coding.
        </p>

        <div className="row">
          {locationData?.map(({image, title, description}, index) => <LocationCard key={index} image={image} title={title} description={description} />)}
        </div>
      </div>
   </>
  )
}

export default Locations