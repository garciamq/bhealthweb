import React, { lazy, useState } from 'react'
import Navbar from '../../components/Navbar';
import styles from './CovidUpdate.module.css';
import Footer from '../../Footer';
import CardItem from '../CardItem';
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CImg,
  CForm,
  CFormGroup,
  CFormText,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,

  CTextarea,
  CInput,
  CInputFile,
  CInputCheckbox,
  CInputRadio,
  CLabel,
  CSelect,
  CRow,
  CSwitch
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const TreatmentIPTCard = () => {
    const [large, setLarge] = useState(true)

  return (
    <div>


      <div class="nav" >
        <Navbar />

        <div class="cov" className={styles.immu}>

          <CRow>
            <CCol  >
              <CCard>
                <CCardBody>
                <CModal show={large} 
              onClose={() => setLarge(!large)}
              size="lg"  >
                    <CModalHeader closeButton>
                      <CModalTitle>TREATMENT / IPT CARD</CModalTitle>
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
                    path='/ChildImmunization1'
                  />

                  <CardItem
                    src={'avatars/doh.png'}
                    className={styles.img}
                    label='Screening Form'
                    alt="ScreeningForm"
                    path='/TBImmunization1'
                  />
                  <CardItem
                    src={'avatars/doh.png'}
                    className={styles.img}
                    label='Agreement Form'
                    alt="AgreementForm"
                    path='/GetStarted'
                  />
                  <CardItem
                    src={'avatars/doh.png'}
                    className={styles.img}
                    label='Feedback Evaluation Form'
                    alt="FeedbackEvaluationForm"
                    path='/GetStarted'
                  />
                </CRow>
                <CRow className={styles.img1}>
                  <CardItem
                    src={'avatars/doh.png'}
                    className={styles.img}
                    label='NTP Identification Card'
                    alt="NTPIdentificationCard"
                    path='/GetStarted'
                  />
                  <CardItem
                    src={'avatars/doh.png'}
                    className={styles.img}
                    label='Treatment / IPT Card'
                    alt="Treatment/IPTCard"
                    path='/GetStarted'
                  />
                </CRow>
               
              </CCard>

            </CCol>
          </CRow>
        </div>
      </div>
      <Footer />
    </div>

  );
}


export default TreatmentIPTCard;