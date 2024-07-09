import React from 'react'

const OfficeCard = ({title, description}) => {
  return (
    <>
     <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <p className="font-48-700 text-center">{title}</p>
              <p className="font-19-400 font-primary-opacity text-center">
                {description}
              </p>
     </div>
    </>
  )
}

const LocationCard = ({image, title, description}) => {
  return(
    <>
    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="card border-0" style={{width: "100%"}}>
              <img
                src={image}
                className="card-img-top rounded-2"
                alt="..."
              />
              <div className="card-body">
                <p
                  className="card-title font-24-700 secondary-color text-center my-0"
                >
                  {title}
                </p>
                <p
                  className="card-text font-17-400 font-primary-opacity text-center my-0"
                >
                  {description}
                </p>
              </div>
            </div>
    </div>
    </>
  )
}

const WorkCard = ({logo, title, description}) => {
  return(
    <>
     <div className="col-lg-4 col-md-6 col-sm-12 col-12 my-lg-5 my-md-0 my-sm-5 my-5">
              <div className="d-flex border-0" style={{width: "100%"}}>
                {logo}
                <div className="mx-4">
                  <p className="font-21-700 secondary-color">{title}</p>
                  <p className="font-17-400 font-priamry-opacity">
                    {description}
                  </p>
                </div>
              </div>
            </div>
    </>
  )
}

const BackupCard = ({logo, title, description}) => {
  return (
    <>
        <div className="d-flex">
          {logo}
          <div className="mx-4">
            <p className="font-21-700 primary-color">{title}</p>
            <p className="font-17-400 primary-color font-secondary-opacity mb-5">
              {description}
            </p>
          </div>
        </div>
    </>
  )
}

const SetupCard = ({title, logo, description}) => {
  return(
        <div className="border-bottom">
          <div className="d-flex justify-content-between">
            <p className="font-21-700 secondary-color">
              {title}
            </p>
           {logo}
          </div>
          <p className="font-17-400 font-primary-opacity">
            {description}
          </p>
        </div>
  )
}

export {OfficeCard, LocationCard, WorkCard, BackupCard, SetupCard}