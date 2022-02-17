import React,{ useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Tippy from '@tippyjs/react';

function ResilencyModal() {
    const [mdShow, setMdShow] = useState(false);
    const [resSelect,setRes] = useState(false);
  return (
        <>
        {['radio'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check
        inline
        label="Yes"
        onClick={()=> setMdShow(true)}
        checked={()=>setRes(true)}
        name="group7"
        type={type}
        id={`inline-${type}-10`}
        required
      />
       <Form.Check
        inline
        label="No"
        name="group7"
        type={type}
        id={`inline-${type}-9`}
        required
      /> 
      </div>
  ))}
   <Modal
        size="md"
        show={mdShow}
        onHide={() => setMdShow(false)}
        aria-labelledby="example-modal-sizes-title-md"
       
      >
        <Modal.Header closeButton onClick={()=>setRes(false)}>
          <Modal.Title id="example-modal-sizes-title-md">
            Resilency details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form className='res'>
        <label htmlFor="group8" className='PVEV'>Do you think all your site loads are Critical?<Tippy content='Some sites require a minimal load to be met in an outage (critical equipment, etc.) others require that the full site load be supported. To discuss this, Gridscape solutions generally refers to a Critical Load amount: An expected set of loads which will need to be supported during an outage'><button className='t'>i</button></Tippy></label> <br/>
        {['radio'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check
        inline
        label="Yes"
        name="group8"
        type={type}
        id={`inline-${type}`}
        required
      />
       <Form.Check
        inline
        label="No"
        name="group8"
        type={type}
        id={`inline-${type}`}
        required
      /> 
      </div>
  ))}
        
              
                <label htmlFor="group10" className='PVEV'>Have you had any outages in the past year?</label> <br/>
        {['radio'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check
        inline
        label="Yes"
        name="group10"
        type={type}
        id={`inline-${type}`}
        required
      />
       <Form.Check
        inline
        label="No"
        name="group10"
        type={type}
        id={`inline-${type}`}
        required
      /> 
      </div>
  ))}
  <label htmlFor="group10" className='PVEV'>Is a power failure a detriment to your Business?</label> <br/>
        {['radio'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check
        inline
        label="Yes"
        name="group11"
        type={type}
        id={`inline-${type}`}
        required
      />
       <Form.Check
        inline
        label="No"
        name="group11"
        type={type}
        id={`inline-${type}`}
        required
      /> 
      </div>
  ))}
   <Form.Select aria-label="Default select example" className='Select' required>
                <option>Choose your critical load(%)</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
                <option value="50">50</option>
                <option value="60">60</option>
                <option value="70">70</option>
                <option value="80">80</option>
                <option value="90">90</option>
                <option value="100">100</option>
                </Form.Select><br/>
  <Form.Select aria-label="Default select example" className='Select' required>
                <option>No. of outages in the past year?</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="More than 10">More than 10</option>
                </Form.Select><br/>
                <Form.Select aria-label="Default select example" className='Select' required>
                <option>How long have the outages lasted?</option>
                <option value="1 hour">1 hours</option>
                <option value="2 hours">2 hours</option>
                <option value="3 hours">3 hours</option>
                <option value="4 hours">4 hours</option>
                <option value="6 hours">6 hours</option>
                <option value="8 hours">8 hours</option>
                <option value="10 hours">10 hours</option>
                <option value="12 hour">12 hour</option>
                <option value="18 hour">18 hour</option>
                <option value="1 day">1 day</option>
                <option value="2 days">2 days</option>
                <option value="3 days">3 days</option>
                <option value="4 day or above">4 days or above</option>
                
                </Form.Select><br/>
                <label htmlFor="group12" className='PVEV'>Past Outages types</label> <br/>
        {['checkbox'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check
        inline
        label="PSPS"
        name="group12"
        type={type}
        id={`inline-${type}`}
        required
      />
       <Form.Check
        inline
        label="Unplanned"
        name="group12"
        type={type}
        id={`inline-${type}`}
        required
      /> <br/>
      <Form.Check
        inline
        label="Other"
        name="group12"
        type={type}
        id={`inline-${type}`}
        required
      /> 
      </div>
  ))}
  <Form.Control type="text" /><br/>
  <label htmlFor="group12" className='PVEV'>Please Describe how a power faliure will impact your business*</label> <br/>
  <Form.Control type="text" required/><br/>
        <div className='buttons'>
          <button className='cancel' type='button' onClick={()=> setMdShow(false)}>Cancel</button>
          <button className='save' type='submit'>Save</button>
        </div>
        </form>
        </Modal.Body>
      </Modal>
        </>
  )
}

export default ResilencyModal