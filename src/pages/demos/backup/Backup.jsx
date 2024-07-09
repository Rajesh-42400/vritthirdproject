import React from 'react'
import { BackupCard } from '../../../components/card/Card'

const Backup = () => {
    let backupData = [
        {
            logo: <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <circle cx="15" cy="15" r="15" fill="#68D585" />
                  <path d="M13.1117 19.6923C12.87 19.6923 12.6287 19.6016 12.4442 19.4196L8 15.039L9.33504 13.7226L13.1117 17.4452L20.665 10L22 11.3164L13.7792 19.4196C13.5946 19.6016 13.3534 19.6923 13.1117 19.6923Z" fill="white"/>
                  </svg>,
            title: "Noise Free Locations",
            description: "With lots of unique blocks, you can easily build a page without coding."
        },
        {
            logo: <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <circle cx="15" cy="15" r="15" fill="#68D585" />
                  <path d="M13.1117 19.6923C12.87 19.6923 12.6287 19.6016 12.4442 19.4196L8 15.039L9.33504 13.7226L13.1117 17.4452L20.665 10L22 11.3164L13.7792 19.4196C13.5946 19.6016 13.3534 19.6923 13.1117 19.6923Z" fill="white"/>
                  </svg>,
            title: "24/7 Hour Support",
            description: "With lots of unique blocks, you can easily build a page without coding."
        }
    ]
  return (
    <>
     <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <p className="font-48-700 primary-color">
                We are always here <br />
                for your backup.
              </p>
              <p className="font-19-400 primary-color font-secondary-opacity mb-5">
                We share common trends and strategies for <br />
                creating & improving your rental income.
              </p>

              {backupData?.map(({logo, title, description}, index) => <BackupCard key={index} logo={logo} title={title} description={description} />)}
     </div>
    </>
  )
}

export default Backup