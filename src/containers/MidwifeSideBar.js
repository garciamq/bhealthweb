import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './sidebar.css'
import logos from "../assets/bhealth.png";
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
} from '@coreui/react'

import CIcon from '@coreui/icons-react'

// sidebar nav config
import navigation from './_nav'

const MidwifeSideBar = () => {
  const dispatch = useDispatch()
  const show = useSelector(state => state.sidebarShow)

  return (
    <CSidebar 
      show={show}
      onShowChange={(val) => dispatch({type: 'set', sidebarShow: val })}
    >
      <CSidebarBrand  className="d-md-down-none" to="/">
        <CIcon 
          className="c-sidebar-brand-full"
          name="logo-negative"
          src={logos}
          height={55}
        />
        <CIcon
          className="c-sidebar-brand-minimized"
          name="logo-negative"
          src={logos}
          height={35}
        />
      </CSidebarBrand>
      <CSidebarNav>

        <CCreateElement 
          items={navigation}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle
          }}
        />
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none"/>
    </CSidebar>
  )
}

export default React.memo(MidwifeSideBar)
