import React from 'react'
import Backup from '../backup/Backup'
import Setup from '../setup/Setup'

const Advertisement = () => {
  return (
    <>
        <div className="container-fluid bg-second-color py-5">
        <div className="container my-5">
          <div className="row">
            <Backup />
            <Setup />
          </div>
        </div>
      </div>
    </>
  )
}

export default Advertisement