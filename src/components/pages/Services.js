import React from 'react'
import styles from './CovidUpdate.module.css';
import {
  CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CProgress,
  CImg,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const Services = () => {
  
  return (
  
    <CDropdown
    
      inNav
      className="c-header-nav-item mx-2"
    >
      <CDropdownToggle className="c-header-nav-link" caret={true}>
        SERVICES
       
        <CBadge shape="pill" color="danger"></CBadge>
      </CDropdownToggle>
      <CDropdownMenu  placement="bottom-end" className="pt-0">
        <CDropdownItem
          header
          tag="div"
          className="text-center"
          color="light"
        >
          <strong>IMMUNIZATION FORM</strong>
        </CDropdownItem> 
        <CDropdownItem to="/immunization"><CImg
                        src="avatars/icon(ci).png"
                        fluid
                        className={styles.icon}
                      />Child Immunization</CDropdownItem>
        <CDropdownItem to="/TBImmunization"><CImg
                        src="avatars/icon(tb).png"
                        fluid
                        className={styles.icon}
                      />TB Immunization</CDropdownItem>
        {/* <CDropdownItem><CIcon name="cil-chart-pie" className="mr-2 text-info" /> Sales report is ready</CDropdownItem>
        <CDropdownItem><CIcon name="cil-basket" className="mr-2 text-primary" /> New client</CDropdownItem>
        <CDropdownItem><CIcon name="cil-speedometer" className="mr-2 text-warning" /> Server overloaded</CDropdownItem> */}
        <CDropdownItem
          header
          tag="div"
          className="text-center"
          color="light"
        >
          <strong>CHILD BIRTH FORM</strong>
        </CDropdownItem>
      
        <CDropdownItem
          header
          tag="div"
          className="text-center"
          color="light"
        >
          <strong>COVID19 FORM</strong>
        </CDropdownItem>

        <CDropdownItem to="/covidupdate"> <CImg
                        src="avatars/icon(cv).png"
                        fluid
                        className={styles.icon}
                      />Covid Update</CDropdownItem>
       
        <CDropdownItem
          header
          tag="div"
          className="text-center"
          color="light"
        >
          <strong>FAMILY PLANNING FORM</strong>
        </CDropdownItem>
        <CDropdownItem
          header
          tag="div"
          className="text-center"
          color="light"
        >
          <strong>DENTAL FORM</strong>
        </CDropdownItem>
        {/* <CDropdownItem className="d-block">
          <div className="text-uppercase mb-1">
            <small><b>CPU Usage</b></small>
          </div>
          <CProgress size="xs" color="info" value={25} />
          <small className="text-muted">348 Processes. 1/4 Cores.</small>
        </CDropdownItem>
        <CDropdownItem className="d-block">
          <div className="text-uppercase mb-1">
            <small><b>Memory Usage</b></small>
          </div>
          <CProgress size="xs" color="warning" value={70} />
          <small className="text-muted">11444GB/16384MB</small>
        </CDropdownItem>
        <CDropdownItem className="d-block">
          <div className="text-uppercase mb-1">
            <small><b>SSD 1 Usage</b></small>
          </div>
          <CProgress size="xs" color="danger" value={90} />
          <small className="text-muted">243GB/256GB</small>
        </CDropdownItem> */}
      </CDropdownMenu>
    </CDropdown>
  )
}

export default Services