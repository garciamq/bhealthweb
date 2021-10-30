import React from 'react'
import {
  DoctorSideBar,
  TheFooter,
  NurseContent,
  NurseHeader,
  NurseSideBar,
  DoctorHeader,
  DoctorContent,
} from './index'


const NursePage = () => {

  return (
    <div className="c-app c-default-layout">
      <NurseSideBar/>
      <div className="c-wrapper">
        <NurseHeader/>
        <div className="c-body">
          <NurseContent/>
        </div>
        <TheFooter/>
      </div>
    </div>
    //  </div>
  )
}

export default NursePage



