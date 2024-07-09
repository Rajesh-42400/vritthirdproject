import React from 'react'

const Rent = () => {
  return (
    <>
     <div className="container-fluid py-5 banner-img">
        <div className="row h-100">
          <div className="col-lg-8 col-md-12 col-sm-12 col-12 my-auto mx-auto">
            <p className="font-13-700 banner-color text-uppercase text-center my-2">
              Shared space in your town
            </p>
            <p className="font-60-700 primary-color text-center mx-auto">
              Rent desk space in a <br />
              shared office <br />
              environment
            </p>
            <form className="px-3 py-4 bg-white rounded-3 w-75 mx-auto">
              <div className="row">
                <div className="col-md-4 my-2">
                  <div className="form-group">
                    <div className="iconBox">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="18"
                        viewBox="0 0 13 18"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6.5 0C3.30506 0 0 2.41112 0 6.44583C0 10.7247 5.97503 16.6993 6.22968 16.9514C6.30118 17.0227 6.39868 17.0625 6.5 17.0625C6.60132 17.0625 6.69882 17.0227 6.77032 16.9514C7.02497 16.6993 13 10.7247 13 6.44583C13 2.41112 9.69494 0 6.5 0ZM6.5 8.72083C5.23479 8.72083 4.20588 7.7005 4.20588 6.44583C4.20588 5.19117 5.23479 4.17083 6.5 4.17083C7.76521 4.17083 8.79412 5.19117 8.79412 6.44583C8.79412 7.7005 7.76521 8.72083 6.5 8.72083Z"
                          fill="#161C2D"
                        />
                      </svg>
                    </div>
                    <select
                      className="form-select py-3 ps-5"
                      aria-label="Default select example"
                    >
                      <option defaultValue={"Open this select menu"}>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-4 my-2">
                  <div className="form-group">
                    <div className="iconBox">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path
                          d="M1 7.64698H17"
                          stroke="#2D2D2D"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <rect
                          x="1"
                          y="2.88232"
                          width="16"
                          height="14.1176"
                          rx="2"
                          stroke="#2D2D2D"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M5.2353 4.76471V1"
                          stroke="#2D2D2D"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12.7647 4.76471V1"
                          stroke="#2D2D2D"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <select
                      className="form-select py-3 ps-5"
                      aria-label="Default select example"
                    >
                      <option defaultValue={"Open this select menu"}>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-4 my-2">
                  <button type="button" className="main-btn font-17-700 w-100">
                    Search Place
                  </button>
                </div>
              </div>
            </form>

            <div
              className="d-flex justify-content-center align-items-center my-5 py-5"
            >
              <img src="/src/assets/logo/Icon.svg" className="img-fluid" />
              <p className="font-17-400 primary-color text-center mx-2 my-0">
                Take virtual tour of our spaces
              </p>
            </div>

            <div className="d-flex justify-content-center my-5 py-5">
              <img src="/src/assets/logo/Down.svg" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Rent