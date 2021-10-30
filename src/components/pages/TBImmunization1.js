import React, { lazy, useState } from 'react'
import Navbar from '../../components/Navbar';
import styles from './CovidUpdate.module.css';
import Footer from '../../Footer';
import CardItem from '../CardItem';
import {
  CButton,
  CCard,
  CLabel,
  CInput,
  CFormText,
  CInputRadio,
  CCardFooter,
  CCardBody,
  CCardHeader,
  CCol,
  CModalBody,
  CImg,
  CForm,
  CFormGroup,
  CModal,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow,
  CListGroup,
  CListGroupItem,
  CTabContent,
  CTabPane
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const TBImmunization1 = () => {
    const [large, setLarge] = useState(false)
    const [activeTab, setActiveTab] = useState(1)
  return (
    <div>


      <div class="nav" >
        <Navbar />

        <div class="cov" className={styles.immu}>

          <CRow>
            <CCol >
                
              <CCard>
                <CCardBody>
                <CCardBody className={styles.head}>TB IMMUNIZATION</CCardBody>
                <CRow>
                  <CCol>
                    <CCard>
                      <CCardHeader>
                        TB IMMUNIZATION
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
                          TB IMMUNIZATION
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
                              <CLabel htmlFor="email-input">Email Input</CLabel>
                            </CCol>
                            <CCol xs="12" md="9">
                              <CInput type="email" id="email-input" name="email-input" placeholder="Enter Email" autoComplete="email" />
                              <CFormText className="help-block">Please enter your email</CFormText>
                            </CCol>
                          </CFormGroup>
                      
                        </CForm>
                      </CCardBody>
                      <CCardFooter>
                        <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Submit</CButton>
                        <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
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
                    label='Information & Consent Form'
                    alt="ConsentForm"
                    path='/InformationForm'
                  />

                  <CardItem
                    src={'avatars/doh.png'}
                    className={styles.img}
                    label='Screening Form'
                    alt="ScreeningForm"
                    path='/ScreeningForm'
                  />
                  <CardItem
                    src={'avatars/doh.png'}
                    className={styles.img}
                    label='Agreement Form'
                    alt="AgreementForm"
                    path='/AgreementForm'
                  />
                  {/* <CardItem
                    src={'avatars/doh.png'}
                    className={styles.img}
                    label='Feedback Evaluation Form'
                    alt="FeedbackEvaluationForm"
                    path='/FeedbackEvaluationForm'
                  /> */}
                </CRow>
                {/* <CCardBody className={styles.img1}>
                <CRow className={styles.img}>
                
                  <CardItem
                    src={'avatars/doh.png'}
                    className={styles.img}
                    label='NTP Identification Card'
                    alt="NTPIdentificationCard"
                    path='/NTPIdentificationCard'
                  />
              
                  <CardItem
                    src={'avatars/doh.png'}
                    className={styles.img}
                    label='Treatment / IPT Card'
                    alt="Treatment/IPTCard"
                    path='/TreatmentIPTCard'
                  />
                </CRow>
                </CCardBody> */}
               
              </CCard>

            </CCol>
          </CRow>
        </div>
      </div>
      <Footer />
    </div>

  );
}


export default TBImmunization1;