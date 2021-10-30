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

const TBImmunization = () => {
  const [large, setLarge] = useState(false)
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div>


      <div class="nav" >
        <Navbar />

        <div class="cov" className={styles.immu}>

          <CRow>
            <CCol >

              <CCard>
                <CCardBody>
                  <CCardBody className={styles.head}>
                    <CImg
                      src="avatars/stamaria.jpeg"
                      fluid
                      className={styles.do}
                    /> TB IMMUNIZATION
                        <CImg
                      src="avatars/rhusml.png"
                      fluid
                      className={styles.do}
                    /></CCardBody>
                  <CRow>
                    <CCol>
                      <CCard>
                        <CCardHeader>
                          TB IMMUNIZATION
              <small> info</small>
                        </CCardHeader>
                        <CCardBody>
                          <CRow >
                            <CCol xs="4" className={styles.chi1}>
                              <CListGroup id="list-tab" role="tablist">
                                <CListGroupItem onClick={() => setActiveTab(0)} action active={activeTab === 0} >Description</CListGroupItem>
                                <CListGroupItem onClick={() => setActiveTab(1)} action active={activeTab === 1} >Overview</CListGroupItem>
                                <CListGroupItem onClick={() => setActiveTab(2)} action active={activeTab === 2} >Symptoms</CListGroupItem>
                                <CListGroupItem onClick={() => setActiveTab(3)} action active={activeTab === 3} >Causes</CListGroupItem>
                                <CListGroupItem onClick={() => setActiveTab(4)} action active={activeTab === 4} >Prevention</CListGroupItem>
                                <CListGroupItem onClick={() => setActiveTab(5)} action active={activeTab === 5} >Complications</CListGroupItem>
                                <CListGroupItem onClick={() => setActiveTab(6)} action active={activeTab === 6} >Diagnosis</CListGroupItem>
                                <CListGroupItem onClick={() => setActiveTab(7)} action active={activeTab === 7} >Treatment</CListGroupItem>
                              </CListGroup>
                            </CCol>
                            <CCol xs="8">
                              <CTabContent>
                                <CTabPane active={activeTab === 0} >
                                  <p>Tuberculosis (TB) is an infectious disease usually caused by Mycobacterium tuberculosis (MTB) bacteria. Tuberculosis generally affects the lungs, but can also affect other parts of the body. Most infections show no symptoms, in which case it is known as latent tuberculosis. About 10% of latent infections progress to active disease which, if left untreated, kills about half of those affected. Typical symptoms of active TB are a chronic cough with blood-containing mucus, fever, night sweats, and weight loss. It was historically called consumption due to the weight loss. Infection of other organs can cause a wide range of symptoms.

                                  Tuberculosis is spread from one person to the next through the air when people who have active TB in their lungs cough, spit, speak, or sneeze. People with latent TB do not spread the disease. Active infection occurs more often in people with HIV/AIDS and in those who smoke. Diagnosis of active TB is based on chest X-rays, as well as microscopic examination and culture of body fluids. Diagnosis of latent TB relies on the tuberculin skin test (TST) or blood tests.

                                  Prevention of TB involves screening those at high risk, early detection and treatment of cases, and vaccination with the bacillus Calmette-Guérin (BCG) vaccine. Those at high risk include household, workplace, and social contacts of people with active TB. Treatment requires the use of multiple antibiotics over a long period of time. Antibiotic resistance is a growing problem with increasing rates of multiple drug-resistant tuberculosis (MDR-TB).

                                  As of 2018, one quarter of the world's population was thought to have latent infection with TB. New infections occur in about 1% of the population each year. In 2018, there were more than 10 million cases of active TB, resulting in 1.5 million deaths and making it the number one cause of death from an infectious disease at that time. As of 2018, most TB cases occurred in the regions of South-East Asia (44%), Africa (24%) and the Western Pacific (18%), with more than 50% of cases being diagnosed in eight countries: India (27%), China (9%), Indonesia (8%), the Philippines (6%), Pakistan (6%), Nigeria (4%) and Bangladesh (4%). The number of new cases each year has decreased since 2000. About 80% of people in many Asian and African countries test positive while 5–10% of people in the United States population test positive by the tuberculin test. Tuberculosis has been present in humans since ancient times.
</p>
                                </CTabPane>
                                <CTabPane active={activeTab === 1}>
                                  <p>Tuberculosis (TB) is a potentially serious infectious disease that mainly affects the lungs. The bacteria that cause tuberculosis are spread from person to person through tiny droplets released into the air via coughs and sneezes.

                                  Once rare in developed countries, tuberculosis infections began increasing in 1985, partly because of the emergence of HIV, the virus that causes AIDS. HIV weakens a person's immune system, so it can't fight the TB germs. In the United States, because of stronger control programs, tuberculosis began to decrease again in 1993. But it remains a concern.

Many tuberculosis strains resist the drugs most used to treat the disease. People with active tuberculosis must take many types of medications for months to get rid of the infection and prevent antibiotic resistance.</p>
                                  <CImg
                                    src="avatars/tb(disease).gif"
                                    fluid
                                    className={styles.tb}
                                  />
                                </CTabPane>
                                <CTabPane active={activeTab === 2}>
                                  <p>Early infection causes no symptoms as the body's immune system protects spread, and in many cases, it remains inactive - this stage is referred to as "Latent TB" . Early diagnosis and treatment is necessary to control the spread of the infection. Latent TB can develop into an Active TB.</p>

                                  <p>Active TB is a stage where immediate medications and care is necessary, the common symptoms include:</p>
                                  <p>* Persistent cough (which lasts for more than 2 weeks)</p>
                                  <p>* Cough with blood in sputum</p>
                                  <p>* Fever for more than 2 weeks</p>
                                  <p>* Pain in chest</p>
                                  <p>* Weight loss</p>
                                  <p>* Night sweats</p>
                                  <p>* Loss of appetite</p>
                                </CTabPane>
                                <CTabPane active={activeTab === 3}>
                                  <p>Tuberculosis (TB) is caused by Mycobacterium tuberculosis, a slow-growing bacteria that thrive in areas of the body that are rich in blood and oxygen, such as the lungs.</p>
                                  <p>* It spreads through infected droplets, released in the air by coughing, sneezing etc, by the affected individual. It usually spreads after a prolonged exposure with the infected individual.</p>
                                  <p>Immunosuppressed (with weak immunity) individuals are at higher risk of contracting the infection, and they include persons with:</p>
                                  <p>* Diabetes</p>
                                  <p>* Chronic Kidney diseases</p>
                                  <p>* Cancer</p>
                                  <p>* HIV/AIDS</p>

                                </CTabPane>
                                <CTabPane active={activeTab === 4}>
                                  <p>A vaccine, BCG (bacille Calmette-Guerin), is used to prevent TB. It is more effective in children and its efficacy in adults is inconsistent.</p>
                                  <p>* Wear mask, if a family member, is known to infected at home; keep separate utensils and room if possible; keep the most vulnerable kids or aged persons away from the infected person</p>
                                  <p>* Avoid large gatherings</p>
                                  <p>* Wash hands or sanitize regularly when outside the house
</p>
                                  <p>* Avoid wearing wet or half wet clothes</p>
                                  <p>* Keep the house sufficiently ventilated</p>
                                  <p>* Clean AC ducts of car and home regularly</p>
                                  <p>* Follow and educate on cough and sneeze etiquette</p>

                                </CTabPane>
                                <CTabPane active={activeTab === 5}>
                              
                                  <p>If tuberculosis (tb) untreated,some of the complications may include within you when it is not cure as soon as possible, that's why when you feel something that is unusual with you, consult with your doctor. These are the examples of complications:</p>
                                  <p>* Coughing up blood in sputum</p>
                                  <p>* Pleurisy - which causes pain during breathing</p>
                                  <p>* Pleural effusion - accumulation of fluid in lungs</p>
                                  <p>* Lung function damage</p>
                                  <p>* Cardiac tamponade</p>
                                  <p>* Laryngitis</p>
                                  <CImg
                                    src="avatars/complication.png"
                                    fluid
                                    className={styles.tb}
                                  />


                                </CTabPane>
                                <CTabPane active={activeTab === 6}>
                              
                                  <p>Diagnosis begins with physical examination of lymph nodes for swelling and the sounds of lungs. Usually skin test is carried out to confirm the presence of bacteria. Blood and sputum tests may also be used.</p>
                                  <h3>Common Tests & Procedures</h3>
                                  <p>Tuberculin skin test: Tuberculin - a TB antigen is injected to determine the extent of immune response.</p>
                                  <p>CT scan: CT scan of chest helps confirm pulmonary TB.</p>
                                  <p>Sputum culture test: Sputum is cultured for the presence of bacteria with a special stain. Usually after skin test.</p>
                                  <p>Pleural fluid analysis: Pleural fluid analysis is a group of tests used to diagnose the cause of Pleural TB. Usually after imaging tests.</p>
                                  <p>Interferon gamma release assay (IGRA): Blood test to confirm or rule out latent or active tuberculosis.</p>
                                 
                                  {/* <CImg
                                    src="avatars/complication.png"
                                    fluid
                                    className={styles.tb}
                                  /> */}


                                </CTabPane>
                                <CTabPane active={activeTab === 7}>
                              
                              <p>With proper medications and care, TB can be cured. TB bacteria will be cultured and their sensitivities are analyzed to determine the exact course of treatment. Often a combination of therapy is required for several months. In cases resistance to drugs, higher order antibiotics, or even intravenous antibiotics will be required. Multi-drug resistant TB is harder to treat.</p>
                              <h3>Nutrition</h3>
                              <p>Foods to eat:</p>
                              <p>* Calorie dense foods</p>
                              <p>* Protein rich foods</p>
                              <p>* Vitamin A,E,C</p>
                              <p>* B complex vitamin</p>
                              <p>* Selenium, Zinc</p>
                              <p>Foods to avoid:</p>
                              <p>* Avoid alcohol</p>
                             
                              {/* <CImg
                                src="avatars/complication.png"
                                fluid
                                className={styles.tb}
                              /> */}


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
                      <CModalTitle>Information & Consent Form</CModalTitle>
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
                              <CLabel htmlFor="text-input">NAME</CLabel>
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
                    src={'avatars/consent.png'}
                    className={styles.img}
                    label='Information & Consent Form'
                    alt="ConsentForm"
                    path='/InformationForm'
                  />

                  <CardItem
                    src={'avatars/screen.png'}
                    className={styles.img}
                    label='Screening Form'
                    alt="ScreeningForm"
                    path='/ScreeningForm'
                  />
                  <CardItem
                    src={'avatars/agree.png'}
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


export default TBImmunization;