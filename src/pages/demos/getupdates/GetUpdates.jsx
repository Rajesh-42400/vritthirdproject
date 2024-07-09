import React from 'react'
import '../../../assets/css/style.css'


const GetUpdates = () => {
  return (
    <>
     <div className="container-fluid bg-third-color border-bottom py-5">
        <div className="container">
          <p className="font-48-700 secondary-color text-center">
            Get latest updates
          </p>
          <p className="font-19-400 secondary-color font-primary-opacity text-center">
            With lots of unique blocks, you can easily build a page <br />
            without coding. Build your next landing page.
          </p>

          <form>
            <div className="mb-5">
              <input type="email" className="form-control emails mx-auto mt-5" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email"/>
              <button className="btn primary-btn font-17-700 primary-color mx-auto mt-4">
                Subscribe
              </button>
            </div>
          </form>
          <p className="font-15-400 secondary-color font-primary-opacity text-center">
            We’ll never share your details with third parties. <br />
            View our Privacy Policy for more info.
          </p>
        </div>
     </div>
    </>
  )
}

export default GetUpdates