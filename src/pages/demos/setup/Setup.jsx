import React from 'react'
import { SetupCard } from '../../../components/card/Card'

const Setup = () => {
    let setupData = [
        {
            title: "How to setup Shade Pro?",
            logo:  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="8" viewBox="0 0 13 8" fill="none">
                   <path d="M1 7L7 1L13 7" stroke="#161C2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                   </svg>,
            description: "With lots of unique blocks, you can easily build a page with coding. Build your next landing page. Integer ut obe ryn. Sed feugiat vitae turpis a porta."
        },
        {
            title: "Can I use Shade Pro for my clients?",
            logo: <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
                  <path d="M1 1L7 7L1 13" stroke="#161C2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>,
            description: ""
        },
        {
            title: "How often do you release update?",
            logo: <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
                  <path d="M1 1L7 7L1 13" stroke="#161C2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>,
            description: ""
        },
        {
            title: "How can I access to old version?",
            logo: <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
                  <path d="M1 1L7 7L1 13" stroke="#161C2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>,
            description: ""
        }

    ]
  return (
    <>
        <div className="col-lg-6 col-md-12 col-sm-12 col-12 my-lg-4 my-md-5 my-sm-5 my-5">
              <div className="d-flex">
                <div className="cards bg-radius p-5">
                    {setupData?.map(({title, logo, description}, index) => <SetupCard key={index} title={title} logo={logo} description={description} />)}
                </div>
              </div>
        </div> 
    </>
  )
}

export default Setup