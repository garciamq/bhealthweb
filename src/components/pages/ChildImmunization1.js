import React, { lazy, useState } from 'react'
import Navbar from '../../components/Navbar';
import styles from './CovidUpdate.module.css';
import Footer from '../../Footer';
import CardItem from '../CardItem';
import {
 
  CListGroup,
  CListGroupItem,
  CTabContent,
  CTabPane,
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CImg,
  CForm,
  CFormGroup,
  CFormText,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CCol,
  CInput,
  CInputRadio,
  CLabel,
  CRow,

} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const ChildImmunization1 = () => {
  const [large, setLarge] = useState(true)
  const [small, setSmall] = useState(false)
  const [activeTab, setActiveTab] = useState(1)

  const positions = [
    'static',
    'top-left',
    'top-center',
    'top-right',
    'top-full',
    'bottom-left',
    'bottom-center',
    'bottom-right',
    'bottom-full'
  ]

  const [toasts, setToasts] = useState([
    { position: 'static'},
    { position: 'static'},
    { position: 'top-right', autohide: 3000 }
  ])

  const [position, setPosition] = useState('top-right')
  const [autohide, setAutohide] = useState(true)
  const [autohideValue, setAutohideValue] = useState(5000)
  const [closeButton, setCloseButton] = useState(true)
  const [fade, setFade] = useState(true)

  const addToast = () => {
    setToasts([
      ...toasts, 
      { position, autohide: autohide && autohideValue, closeButton, fade }
    ])
  }


  const toasters = (()=>{
    return toasts.reduce((toasters, toast) => {
      toasters[toast.position] = toasters[toast.position] || []
      toasters[toast.position].push(toast)
      return toasters
    }, {})
  })()


  return (
    <div>


      <div class="nav" >
        <Navbar />

        <div class="cov" className={styles.immu}>

          <CRow>
            <CCol  >
              <CCard>
                <CCardBody>
                <CCardBody className={styles.head}>
                    <CImg
                      src="avatars/stamaria.jpeg"
                      fluid
                      className={styles.do}
                    /> CHILD IMMUNIZATION
                        <CImg
                      src="avatars/rhusml.png"
                      fluid
                      className={styles.do}
                    /></CCardBody>
                  <CRow>
                    <CCol>
                      <CCard>
                        <CCardHeader>
                          CHILD IMMUNIZATION
              <small> FORMS</small>
                        </CCardHeader>
                        <CCardBody>
                          <CRow >
                            <CCol xs="4" className={styles.chi1}>
                              <CListGroup id="list-tab" role="tablist">
                                <CListGroupItem onClick={() => setActiveTab(0)} action active={activeTab === 0} >Home</CListGroupItem>
                                <CListGroupItem onClick={() => setActiveTab(1)} action active={activeTab === 1} >Profile</CListGroupItem>
                                <CListGroupItem onClick={() => setActiveTab(2)} action active={activeTab === 2} >Messages</CListGroupItem>
                                <CListGroupItem onClick={() => setActiveTab(3)} action active={activeTab === 3} >Settings</CListGroupItem>
                                <CListGroupItem onClick={() => setActiveTab(4)} action active={activeTab === 4} >Settings</CListGroupItem>
                              </CListGroup>
                            </CCol>
                            <CCol xs="8">
                              <CTabContent>
                                <CTabPane active={activeTab === 0} >
                                  <p>Velit aute mollit ipsum ad dolor consectetur nulla officia culpa adipisicing exercitation fugiat tempor. Voluptate deserunt sit sunt
                                  nisi aliqua fugiat proident ea ut. Mollit voluptate reprehenderit occaecat nisi ad non minim
                                  tempor sunt voluptate consectetur exercitation id ut nulla. Ea et fugiat aliquip nostrud sunt incididunt consectetur culpa aliquip
                        eiusmod dolor. Anim ad Lorem aliqua in cupidatat nisi enim eu nostrud do aliquip veniam minim.</p>
                                </CTabPane>
                                <CTabPane active={activeTab === 1}>
                                  <p>Cupidatat quis ad sint excepteur laborum in esse qui. Et excepteur consectetur ex nisi eu do cillum ad laborum. Mollit et eu officia
                                  dolore sunt Lorem culpa qui commodo velit ex amet id ex. Officia anim incididunt laboris deserunt
                                  anim aute dolor incididunt veniam aute dolore do exercitation. Dolor nisi culpa ex ad irure in elit eu dolore. Ad laboris ipsum
                        reprehenderit irure non commodo enim culpa commodo veniam incididunt veniam ad.</p>
                                </CTabPane>
                                <CTabPane active={activeTab === 2}>
                                  <p>Ut ut do pariatur aliquip aliqua aliquip exercitation do nostrud commodo reprehenderit aute ipsum voluptate. Irure Lorem et laboris
                                  nostrud amet cupidatat cupidatat anim do ut velit mollit consequat enim tempor. Consectetur
                                  est minim nostrud nostrud consectetur irure labore voluptate irure. Ipsum id Lorem sit sint voluptate est pariatur eu ad cupidatat et
                                  deserunt culpa sit eiusmod deserunt. Consectetur et fugiat anim do eiusmod aliquip nulla
                        laborum elit adipisicing pariatur cillum.</p>
                                </CTabPane>
                                <CTabPane active={activeTab === 3}>
                                  <p>Irure enim occaecat labore sit qui aliquip reprehenderit amet velit. Deserunt ullamco ex elit nostrud ut dolore nisi officia magna
                                  sit occaecat laboris sunt dolor. Nisi eu minim cillum occaecat aute est cupidatat aliqua labore
                                  aute occaecat ea aliquip sunt amet. Aute mollit dolor ut exercitation irure commodo non amet consectetur quis amet culpa. Quis ullamco
                                  nisi amet qui aute irure eu. Magna labore dolor quis ex labore id nostrud deserunt dolor
                        eiusmod eu pariatur culpa mollit in irure.</p>
                                </CTabPane>
                                <CTabPane active={activeTab === 4}>
                                  <p>Irure enim occaecat labore sit qui aliquip reprehenderit amet velit. Deserunt ullamco ex elit nostrud ut dolore nisi officia magna
                                  sit occaecat laboris sunt dolor. Nisi eu minim cillum occaecat aute est cupidatat aliqua labore
                                  aute occaecat ea aliquip sunt amet. Aute mollit dolor ut exercitation irure commodo non amet consectetur quis amet culpa. Quis ullamco
                                  nisi amet qui aute irure eu. Magna labore dolor quis ex labore id nostrud deserunt dolor
                        eiusmod eu pariatur culpa mollit in irure.</p>
                                </CTabPane>
                              </CTabContent>
                            </CCol>
                          </CRow>
                        </CCardBody>
                      </CCard>
                    </CCol>
                  </CRow>
                  <CModal show={large} 
              onClose={() => setLarge(!large)}
              size="lg"  >
                    <CModalHeader closeButton>
                      <CModalTitle>IMMUNIZATION</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                      <CRow>
                        <CImg
                          src="avatars/doh.png"
                          fluid
                          className={styles.doh}
                        />


                        <CCardHeader className={styles.doh2}>
                          CHILD IMMUNIZATION
              <small> CARD</small>
                        </CCardHeader>
                        <CImg
                          src="avatars/doh.png"
                          fluid
                          className={styles.doh1}
                        />
                      </CRow>
                      <CCardBody>
                        <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                          {/* <CFormGroup row>
                            <CCol md="3">
                              <CLabel>Static</CLabel>
                            </CCol>
                            <CCol xs="12" md="9">
                              <p className="form-control-static">Username</p>
                            </CCol>
                          </CFormGroup> */}
                          <CFormGroup row>
                            <CCol md="3">
                              <CLabel htmlFor="text-input">Child's Name</CLabel>
                            </CCol>
                            <CCol xs="12" md="9">
                              <CInput id="text-input" name="text-input" placeholder="(eg. First Name, Last Name, Middle Name)" />
                              <CFormText>Please enter child's name</CFormText>
                            </CCol>
                          </CFormGroup>
                          <CFormGroup row>
                            <CCol md="3">
                              <CLabel htmlFor="text-input">Health Center</CLabel>
                            </CCol>
                            <CCol xs="12" md="9">
                              <CInput id="text-input" name="text-input" placeholder="(eg. Sta. Maria RHU)" />
                              <CFormText>Please enter health center</CFormText>
                            </CCol>
                          </CFormGroup>
                          <CFormGroup row>
                            <CCol md="3">
                              <CLabel htmlFor="text-input">Barangay</CLabel>
                            </CCol>
                            <CCol xs="12" md="9">
                              <CInput id="text-input" name="text-input" placeholder="(eg. Brgy 123)" />
                              <CFormText>Please enter barangay number</CFormText>
                            </CCol>
                          </CFormGroup>
                          <CFormGroup row>
                            <CCol md="3">
                              <CLabel htmlFor="text-input">Family No.</CLabel>
                            </CCol>
                            <CCol xs="12" md="9">
                              <CInput id="text-input" name="text-input" placeholder="(eg. 8)" />
                              <CFormText>Please enter family number</CFormText>
                            </CCol>
                          </CFormGroup>
                          <CFormGroup row>
                            <CCol md="3">
                              <CLabel htmlFor="date-input">Date of Birth</CLabel>
                            </CCol>
                            <CCol xs="12" md="9">
                              <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                            </CCol>
                          </CFormGroup>
                          <CFormGroup row>
                            <CCol md="3">
                              <CLabel htmlFor="text-input">Place of Birth</CLabel>
                            </CCol>
                            <CCol xs="12" md="9">
                              <CInput id="text-input" name="text-input" placeholder="(eg. Sta.Maria Laguna)" />
                              <CFormText>Please enter your place of birth</CFormText>
                            </CCol>
                          </CFormGroup>
                          <CFormGroup row>
                            <CCol md="3">
                              <CLabel htmlFor="text-input">Address</CLabel>
                            </CCol>
                            <CCol xs="12" md="9">
                              <CInput id="text-input" name="text-input" placeholder="Present Address" />
                              <CFormText>Please enter your present address</CFormText>
                            </CCol>
                          </CFormGroup>
                          <CFormGroup row>
                            <CCol md="3">
                              <CLabel htmlFor="text-input">Mother's Name</CLabel>
                            </CCol>
                            <CCol xs="12" md="9">
                              <CInput id="text-input" name="text-input" placeholder="(eg. First Name, Last Name, Middle Name)" />
                              <CFormText>Please enter mother's name </CFormText>
                            </CCol>
                          </CFormGroup>
                          <CFormGroup row>
                            <CCol md="3">
                              <CLabel htmlFor="text-input">Father's Name</CLabel>
                            </CCol>
                            <CCol xs="12" md="9">
                              <CInput id="text-input" name="text-input" placeholder="(eg. First Name, Last Name, Middle Name)" />
                              <CFormText>Please enter father's name</CFormText>
                            </CCol>
                          </CFormGroup>
                          <CFormGroup row>
                            <CCol md="3">
                              <CLabel htmlFor="text-input">Birth Weight</CLabel>
                            </CCol>
                            <CCol xs="12" md="9">
                              <CInput id="text-input" name="text-input" placeholder="Weight" />
                              <CFormText>Please enter weight</CFormText>
                            </CCol>
                          </CFormGroup>
                          <CFormGroup row>
                            <CCol md="3">
                              <CLabel htmlFor="text-input">Birth Height</CLabel>
                            </CCol>
                            <CCol xs="12" md="9">
                              <CInput id="text-input" name="text-input" placeholder="Height" />
                              <CFormText>Please enter height</CFormText>
                            </CCol>
                          </CFormGroup>
                          <CFormGroup row>
                            <CCol md="3">
                              <CLabel>Sex</CLabel>
                            </CCol>
                            <CCol md="9">
                              <CFormGroup variant="checkbox">
                                <CInputRadio className="form-check-input" id="radio1" name="radios" value="option1" />
                                <CLabel variant="checkbox" htmlFor="radio1">Male</CLabel>
                              </CFormGroup>
                              <CFormGroup variant="checkbox">
                                <CInputRadio className="form-check-input" id="radio2" name="radios" value="option2" />
                                <CLabel variant="checkbox" htmlFor="radio2">Female</CLabel>
                              </CFormGroup>

                            </CCol>
                          </CFormGroup>

                          <CFormGroup row>
                            <CCol md="3">
                              <CLabel htmlFor="email-input">Email Address</CLabel>
                            </CCol>
                            <CCol xs="12" md="9">
                              <CInput type="email" id="email-input" name="email-input" placeholder="Enter Email" autoComplete="email" />
                              <CFormText className="help-block">Please enter your email</CFormText>
                            </CCol>
                          </CFormGroup>
                      
                        </CForm>
                      </CCardBody>
                      <CCardFooter>
                      <CButton onClick={() => setSmall(!small)} className="mr-1"
                          type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Submit</CButton>
                        <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>

                        <CModal
                          show={small}
                          onClose={() => setSmall(!small)}
                          size="sml"
                        >
                          <CModalHeader closeButton>
                            <CModalTitle>Reminder</CModalTitle>
                          </CModalHeader>
                          <CModalBody>
                            You can only submit one at a time using your email, Once you have submitted the form already, you cannot fill up again. You can edit your information by signing in. By clicking continue, you agree with these conditions. Thank you!
              </CModalBody>
                          <CModalFooter>
                            <CButton to="/SignInForm" color="primary" onClick={() => setSmall(!small)}>Continue</CButton>{' '}
                            <CButton color="secondary" onClick={() => setSmall(!small)}>Cancel</CButton>
                          </CModalFooter>
                        </CModal>
                      </CCardFooter>
                    </CModalBody>
                    <CModalFooter>
                      {/* <CButton to="/ChildImmunization" color="primary" 
                  onClick={() => setModal(false)}
                  >I Understand</CButton>{' '} */}
                      <CButton to="/Immunization">Cancel</CButton>
                    </CModalFooter>
                  </CModal>

                </CCardBody>
                <CRow>
                  <CardItem
                    src={'avatars/doh.png'}
                    className={styles.img}
                    label='CHILD IMMUNIZATION CARD'
                    alt="ChildImmunization"
                    path='/ChildImmunization'
                  />

                  <CardItem
                    src={'avatars/doh.png'}
                    className={styles.img}
                    label='TB IMMUNIZATION CARD'
                    alt="TBImmunization"
                    path='/TBImmunization'
                  />
                  <CardItem
                    src={'avatars/doh.png'}
                    className={styles.img}
                    label='CHILD IMMUNIZATION CARD'
                    alt="ChildImmunization"
                    path='/GetStarted'
                  />
                  {/* <CardItem
                    src={'avatars/doh.png'}
                    className={styles.img}
                    label='CHILD IMMUNIZATION CARD'
                    alt="ChildImmunization"
                    path='/GetStarted'
                  /> */}
                </CRow>
                {/* <CCardBody className={styles.img1}>
                <CRow className={styles.img}>
                  <CardItem
                    src={'avatars/doh.png'}
                    className={styles.img}
                    label='CHILD IMMUNIZATION CARD'
                    alt="ChildImmunization"
                    path='/GetStarted'
                  />
                  <CardItem
                    src={'avatars/doh.png'}
                    className={styles.img}
                    label='CHILD IMMUNIZATION CARD'
                    alt="ChildImmunization"
                    path='/GetStarted'
                  />
                </CRow>
                </CCardBody> */}
                {/* <CCardHeader>
              CHILD IMMUNIZATION 
              <small> CARD</small>
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Static</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <p className="form-control-static">Username</p>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">CHILD'S NAME</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="text-input" name="text-input" placeholder="Name of child" />
                    <CFormText>This is a help text</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">HEALTH CENTER</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="text-input" name="text-input" placeholder="Name of child" />
                    <CFormText>This is a help text</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">BARANGAY</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="text-input" name="text-input" placeholder="Name of child" />
                    <CFormText>This is a help text</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">FAMILY NO.</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="text-input" name="text-input" placeholder="Name of child" />
                    <CFormText>This is a help text</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="date-input">DATE OF BIRTH</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">PLACE OF BIRTH</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="text-input" name="text-input" placeholder="Name of child" />
                    <CFormText>This is a help text</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">ADDRESS</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="text-input" name="text-input" placeholder="Name of child" />
                    <CFormText>This is a help text</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">MOTHER'S NAME</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="text-input" name="text-input" placeholder="Name of child" />
                    <CFormText>This is a help text</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">FATHER'S NAME</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="text-input" name="text-input" placeholder="Name of child" />
                    <CFormText>This is a help text</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">BIRTH HEIGHT</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="text-input" name="text-input" placeholder="Name of child" />
                    <CFormText>This is a help text</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">BIRTH WEIGHT</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="text-input" name="text-input" placeholder="Name of child" />
                    <CFormText>This is a help text</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Gender</CLabel>
                  </CCol>
                  <CCol md="9">
                    <CFormGroup variant="checkbox">
                      <CInputRadio className="form-check-input" id="radio1" name="radios" value="option1" />
                      <CLabel variant="checkbox" htmlFor="radio1">Male</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="checkbox">
                      <CInputRadio className="form-check-input" id="radio2" name="radios" value="option2" />
                      <CLabel variant="checkbox" htmlFor="radio2">Female</CLabel>
                    </CFormGroup>
                  
                  </CCol>
                </CFormGroup>
                
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="email-input">Email Input</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="email" id="email-input" name="email-input" placeholder="Enter Email" autoComplete="email"/>
                    <CFormText className="help-block">Please enter your email</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="password-input">Password</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="password" id="password-input" name="password-input" placeholder="Password" autoComplete="new-password" />
                    <CFormText className="help-block">Please enter a complex password</CFormText>
                  </CCol>
                </CFormGroup>
               
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="disabled-input">Disabled Input</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="disabled-input" name="disabled-input" placeholder="Disabled" disabled />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="textarea-input">Textarea</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CTextarea 
                      name="textarea-input" 
                      id="textarea-input" 
                      rows="9"
                      placeholder="Content..." 
                    />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Select</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CSelect custom name="select" id="select">
                      <option value="0">Please select</option>
                      <option value="1">Option #1</option>
                      <option value="2">Option #2</option>
                      <option value="3">Option #3</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="selectLg">Select Large</CLabel>
                  </CCol>
                  <CCol xs="12" md="9" size="lg">
                    <CSelect custom size="lg" name="selectLg" id="selectLg">
                      <option value="0">Please select</option>
                      <option value="1">Option #1</option>
                      <option value="2">Option #2</option>
                      <option value="3">Option #3</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="selectSm">Select Small</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CSelect custom size="sm" name="selectSm" id="SelectLm">
                      <option value="0">Please select</option>
                      <option value="1">Option #1</option>
                      <option value="2">Option #2</option>
                      <option value="3">Option #3</option>
                      <option value="4">Option #4</option>
                      <option value="5">Option #5</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="disabledSelect">Disabled Select</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CSelect 
                      custom 
                      name="disabledSelect" 
                      id="disabledSelect" 
                      disabled 
                      autoComplete="name"
                    >
                      <option value="0">Please select</option>
                      <option value="1">Option #1</option>
                      <option value="2">Option #2</option>
                      <option value="3">Option #3</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol tag="label" sm="3" className="col-form-label">
                    Switch checkboxes
                  </CCol>
                  <CCol sm="9">
                    <CSwitch
                      className="mr-1"
                      color="primary"
                      defaultChecked
                    />
                    <CSwitch
                      className="mr-1"
                      color="success"
                      defaultChecked
                      variant="outline"
                    />
                    <CSwitch
                      className="mr-1"
                      color="warning"
                      defaultChecked
                      variant="opposite"
                    />
                    <CSwitch
                      className="mr-1"
                      color="danger"
                      defaultChecked
                      shape="pill"
                    />
                    <CSwitch
                      className="mr-1"
                      color="info"
                      defaultChecked
                      shape="pill"
                      variant="outline"
                    />
                    <CSwitch
                      className="mr-1"
                      color="dark"
                      defaultChecked
                      shape="pill"
                      variant="opposite"
                    />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Radios</CLabel>
                  </CCol>
                  <CCol md="9">
                    <CFormGroup variant="checkbox">
                      <CInputRadio className="form-check-input" id="radio1" name="radios" value="option1" />
                      <CLabel variant="checkbox" htmlFor="radio1">Option 1</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="checkbox">
                      <CInputRadio className="form-check-input" id="radio2" name="radios" value="option2" />
                      <CLabel variant="checkbox" htmlFor="radio2">Option 2</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="checkbox">
                      <CInputRadio className="form-check-input" id="radio3" name="radios" value="option3" />
                      <CLabel variant="checkbox" htmlFor="radio3">Option 3</CLabel>
                    </CFormGroup>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Inline Radios</CLabel>
                  </CCol>
                  <CCol md="9">
                    <CFormGroup variant="custom-radio" inline>
                      <CInputRadio custom id="inline-radio1" name="inline-radios" value="option1" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-radio1">One</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="custom-radio" inline>
                      <CInputRadio custom id="inline-radio2" name="inline-radios" value="option2" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-radio2">Two</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="custom-radio" inline>
                      <CInputRadio custom id="inline-radio3" name="inline-radios" value="option3" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-radio3">Three</CLabel>
                    </CFormGroup>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3"><CLabel>Checkboxes</CLabel></CCol>
                  <CCol md="9">
                    <CFormGroup variant="checkbox" className="checkbox">
                      <CInputCheckbox 
                        id="checkbox1" 
                        name="checkbox1" 
                        value="option1" 
                      />
                      <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox1">Option 1</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="checkbox" className="checkbox">
                      <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                      <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox2">Option 2</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="checkbox" className="checkbox">
                      <CInputCheckbox id="checkbox3" name="checkbox3" value="option3" />
                      <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox3">Option 3</CLabel>
                    </CFormGroup>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Inline Checkboxes</CLabel>
                  </CCol>
                  <CCol md="9">
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox 
                        custom 
                        id="inline-checkbox1" 
                        name="inline-checkbox1" 
                        value="option1" 
                      />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox1">One</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox2" name="inline-checkbox2" value="option2" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox2">Two</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox3" name="inline-checkbox3" value="option3" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox3">Three</CLabel>
                    </CFormGroup>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CLabel col md="3" htmlFor="file-input">File input</CLabel>
                  <CCol xs="12" md="9">
                    <CInputFile id="file-input" name="file-input"/>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Multiple File input</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInputFile 
                      id="file-multiple-input" 
                      name="file-multiple-input" 
                      multiple
                      custom
                    />
                    <CLabel htmlFor="file-multiple-input" variant="custom-file">
                      Choose Files...
                    </CLabel>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CLabel col md={3}>Custom file input</CLabel>
                  <CCol xs="12" md="9">
                    <CInputFile custom id="custom-file-input"/>
                    <CLabel htmlFor="custom-file-input" variant="custom-file">
                      Choose file...
                    </CLabel>
                  </CCol>
                </CFormGroup>
              </CForm>
            </CCardBody> */}
                {/* <CCardFooter>
              <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Submit</CButton>
              <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
            </CCardFooter> */}
              </CCard>

            </CCol>
          </CRow>
        </div>
      </div>
      <Footer />
    </div>

  );
}


export default ChildImmunization1;