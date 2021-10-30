import React from 'react'
import {
  DoctorSideBar,
  TheFooter,
  DoctorHeader,
  DoctorContent,
} from './index'

const DoctorPage = () => {

  return (
    <div className="c-app c-default-layout">
      <DoctorSideBar/>
      <div className="c-wrapper">
        <DoctorHeader/>
        <div className="c-body">
          <DoctorContent/>
        </div>
        <TheFooter/>
      </div>
    </div>
    //  </div>
  )
}

export default DoctorPage



