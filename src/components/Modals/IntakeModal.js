import React,{ useState } from 'react'
// import Tippy from '@tippyjs/react'
import './intakeModal.css'
import Modal from 'react-bootstrap/Modal' 
import Form from 'react-bootstrap/Form'
import "bootstrap/dist/css/bootstrap.min.css";
import 'tippy.js/dist/tippy.css'
import PVModal from './PVModal';
import EVModal from './EVModal';
import DataModal from './dataModal'
import ResilencyModal from './resilencyModal';

function IntakeModal() {
  const [mdShow, setMdShow] = useState(false);
  
  return (
    <>
     
    <button className='add-new-site' onClick={() => setMdShow(true)}>Add new site +</button>
   
    <Modal
      size="md"
      show={mdShow}
      onHide={() => setMdShow(false)}
      aria-labelledby="example-modal-sizes-title-md"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-md">
          New site info
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <form className='form'>
      <h4 className='info-title'>General-info</h4>
  <Form.Group className="mb-3" >
    <Form.Label>Company Name*</Form.Label>
    <Form.Control type="text" placeholder="e.g Gridscape Solutions" className='formcont' required/>
    
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Site Name*</Form.Label>
    <Form.Control type="text" placeholder="e.g " className='formcont' required/>
    
  </Form.Group>
  <Form.Select aria-label="Default select example" className='Select' required>
  <option>Site Type</option>
  <option value="PG & E">PG & E</option>
  <option value="SCE">SCE</option>
  <option value="SDGE">SDGE</option>
</Form.Select><br/>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Site Address*</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>Contact person*</Form.Label>
    <Form.Control type="text" placeholder="Enter name" className='formcont' required/>
    
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address*</Form.Label>
    <Form.Control type="email" placeholder="Enter email" className='formcont' required />
   
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>Phone Number</Form.Label>
    <Form.Control type="text" placeholder="(Optional)" className='formcont' minLength={10} maxLength={10} pattern="[0-9]{10}"/>
  </Form.Group>
  <h5 className='info-title'>Utillity Details*</h5>
  <Form.Select aria-label="Default select example" className='Select' required>
  <option>Select utillity</option>
  <option value="PG & E">PG & E</option>
  <option value="SCE">SCE</option>
  <option value="SDGE">SDGE</option>
</Form.Select><br/>
    <DataModal />
 
  <label htmlFor="group1" className='PVEV'>Does the site has existing PV?*</label> <br/>
  
   <PVModal/>
 
  <label htmlFor="group4" className='PVEV'>Does the site has existing EV?*</label> 
  <EVModal />
  <label htmlFor="group7" className='PVEV'>Do you want to meet resiliency goals?*</label>
  <ResilencyModal />
  <div className='buttons'>
          <button className='cancel' type='button' onClick={() => setMdShow(false)}>Cancel</button>
          <button className='save'  >Save</button> 
        
        </div>
</form>
     
        
          
        
     
      </Modal.Body>
    </Modal>
  </>
  )
}

export default IntakeModal