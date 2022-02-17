import React,{useState} from 'react'
import Modal from 'react-bootstrap/Modal' 
import Form from 'react-bootstrap/Form'
import "bootstrap/dist/css/bootstrap.min.css";
import 'tippy.js/dist/tippy.css'

function PVModal() {
   
  const [mdShow, setMdShow] = useState(false);
  const [smShow, setSmShow] = useState(false);
  const [PVSelect,setPV] = useState(false);
  return (
    
    <>
        {[ 'radio'].map((type) => (
         <div key={`inline-${type}`} className="mb-3" >
      <Form.Check
        inline
        label="Yes"
        name="group2"
        onClick={()=> setMdShow(true)}
        checked={() => setPV(true)}
        type={type}
        id={`inline-${type}-3`} required
      />
       <Form.Check
        inline
        label="No"
        name="group2"
        onClick={()=>setSmShow(true)}
        checked={() => setPV(true)}
        type={type}
        id={`inline-${type}-4`}
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
        <Modal.Header closeButton onClick={()=>setPV(false)}>
          <Modal.Title id="example-modal-sizes-title-md">
           PV Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Existing PV size</Form.Label>
    <Form.Control type="text" placeholder="Solar PV Size(kW)" required maxLength={5}  minLength={0} pattern="[0-9]"/>
   
  </Form.Group>
  <Form.Group controlId="formFile" className="mb-3">
       <Form.Label>Attached Load Data</Form.Label>
          <Form.Control type="file" />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
       <Form.Label>Attached System SLD</Form.Label>
          <Form.Control type="file" />
        </Form.Group>
        <label htmlFor="group3">Desired PV types</label>
        {[ 'checkbox'].map((type) => (
         <div key={`inline-${type}`} className="mb-3">
           
      <Form.Check
        inline
        label="Carport"
        name="group3"
        onClick={()=> setMdShow(true)}
        type={type}
        id={`inline-${type}-3`}
        required
      /> <br/>
       <Form.Check
        inline
        label="Rooftop"
        name="group3"
        type={type}
        id={`inline-${type}-3`}
      /> <br/>
       <Form.Check
        inline
        label="GroundMount"
        name="group3"
        type={type}
        id={`inline-${type}-3`}
      /> 
      </div>
        ))}
           <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Desired PV Description</Form.Label><br/>
    <Form.Text className="text-muted">
      A. Specific locations/areas which are available/not available for PV <br/>B. Priority for the areas/locations that needs to be used
</Form.Text>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
        <div className='buttons'>
          <button className='cancel' type='button' onClick={()=>setMdShow(false)}>Cancel</button>
          <button className='save' type='submit'>Save</button>
        </div>
</Form>
        </Modal.Body>
      </Modal>
      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton onClick={()=>setPV(false)}>
          <Modal.Title id="example-modal-sizes-title-sm">
           PV Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
 
        <label htmlFor="group3">Desired PV types</label>
        {[ 'checkbox'].map((type) => (
         <div key={`inline-${type}`} className="mb-3">
           
      <Form.Check
        inline
        label="Carport"
        name="group3"
        onClick={()=> setMdShow(true)}
        type={type}
        id={`inline-${type}-3`}
        required
      />
       <Form.Check
        inline
        label="Rooftop"
        name="group3"
        type={type}
        id={`inline-${type}-3`}
        required
      /> 
       <Form.Check
        inline
        label="GroundMount"
        name="group3"
        type={type}
        id={`inline-${type}-3`}
        required
      /> 
      </div>
        ))}
           <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Desired PV Description</Form.Label><br/>
    <Form.Text className="text-muted">
      A. Specific locations/areas which are available/not available for PV <br/>B. Priority for the areas/locations that needs to be used
</Form.Text>
    <Form.Control as="textarea" rows={3} required />
  </Form.Group>
        <div className='buttons'>
          <button className='cancel' type='button' onClick={()=>setSmShow(false)}>Cancel</button>
          <button className='save' type='submit'>Save</button>
        </div>
</Form>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default PVModal
