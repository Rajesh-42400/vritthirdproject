import React from 'react'
import { WorkCard } from '../../../components/card/Card'

const Work = () => {
    let workData = [
        {
            logo:   <svg xmlns="http://www.w3.org/2000/svg" width="45" height="38" viewBox="0 0 45 38" fill="none">
                <path d="M28 13H36" stroke="#2D2D2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M44 19H20V7" stroke="#2D2D2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M44 7V19V37" stroke="#2D2D2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20 19V37" stroke="#2D2D2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M0 7H44V1H0V23V37" stroke="#2D2D2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>,
            title: "Dedicated Desk",
            description: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page."
        },
        {
            logo:   <svg xmlns="http://www.w3.org/2000/svg" width="41" height="34" viewBox="0 0 41 34" fill="none">
                    <circle cx="20" cy="29" r="4" stroke="#2D2D2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M31.3 17.7C28.4 14.8 24.4 13 20 13C15.6 13 11.6 14.8 8.7 17.7" stroke="#2D2D2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M39.8 9.2C34.7 4.1 27.7 1 20 1C12.3 1 5.3 4.1 0.199997 9.2" stroke="#2D2D2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>,
            title: "High Speed Internet",
            description: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page."
        },
        {
            logo:       <svg xmlns="http://www.w3.org/2000/svg" width="36" height="42" viewBox="0 0 36 42" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M22.4 41H5.6C2.50693 41 0 38.5826 0 35.6V14H28V35.6C28 38.5826 25.4931 41 22.4 41Z" stroke="#2D2D2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12.5 1V6" stroke="#2D2D2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M3.5 3V8" stroke="#2D2D2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M22.5 3V8" stroke="#2D2D2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M28 19H35V28.2857C35 30.3369 33.4329 32 31.5 32H28" stroke="#2D2D2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>,
            title: "Unlimited Coffee",
            description: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page."
        }
    ]

  return (
    <>
        <div className="container-fluid bg-first-color py-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 my-lg-5 my-0">
              <p className="font-48-700 secondary-color">
                Work around very <br />
                talented people.
              </p>
              <p className="font-19-400 font-primary-opacity mb-5">
                With lots of unique blocks, you can easily build <br />
                a page easily without any coding.
              </p>

              <div className="d-flex">
                <img
                  src="/src/assets/images/kal-visuals-PFC2fY9LE_g-unsplash.png"
                  className="img-fluid img-radius"
                />
              </div>
Name            </div>

            <div
              className="col-lg-6 col-md-12 col-sm-12 col-12 my-lg-5 my-md-5 my-sm-5 my-5"
            >
              <div className="d-flex">
                <img
                  src="/src/assets/images/you-x-ventures-nF0nQuqBsrI-unsplash.png"
                  className="img-fluid img-radius"
                />
              </div>
            </div>

            {workData?.map(({logo, title, description}, index) => <WorkCard key={index} logo={logo} title={title} description={description} />)}


          </div>
        </div>
      </div>
    </>
  )
}

export default Work