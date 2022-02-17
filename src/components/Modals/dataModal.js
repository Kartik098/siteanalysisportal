import {React, useState } from 'react'
import Modal from 'react-bootstrap/Modal' 
import Form from 'react-bootstrap/Form'
import "bootstrap/dist/css/bootstrap.min.css";


function DataModal() {
   
     const [lgShow, setLgShow] = useState(false);
    const [mdShow, setMdShow] = useState(false);
    const [dataselect,setdata] = useState(false);  
    const setdatanull = ()=>{
      setdata(false);
    }
    
        return (
          <>
            {[ 'radio'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check
        inline
        label="Direct Upload"
        name="group1"
        onClick={() => setMdShow(true)}
       checked={() => setdata(true)}
        type={type}
        id={`inline-${type}-1`}
        required
      />
      <Form.Check
        inline
        label="Sharemydata"
        name="group1"
        onClick={ ()=> setLgShow(true)}
        checked={() => setdata(true)}
        type={type}
        id={`inline-${type}-2`}
        required
      />
       </div>
  ))}
            <Modal
              size="lg"
              show={lgShow}
              onHide={() => setLgShow(false)}
              aria-labelledby="example-modal-sizes-title-lg"
              centered
            >
              <Modal.Header closeButton onClick={()=> setdata(false)}>
                <Modal.Title id="example-modal-sizes-title-lg">
                  <h3>Share my data</h3>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <form className="form">
  <Form.Group className="mb-3" >
    <Form.Label><h4>PG & E authorization</h4></Form.Label><br/>
    
    <Form.Text className="text-muted">
    PG&E ShareMyData Instructions
Follow instructions in the following PDF  <br/>  <a href='https://drive.google.com/file/d/1G0uP3qKHtjzrvOY0VZlKbWF_0bi4ytQ4/view?usp=sharing'>Link</a><br/><br/>

Or
<br/><br/>
1. Go to <a href='https://sharemydata.pge.com/myAuthorization/home'>Sharemydata</a><br/>
2. Log in with your Utility Credentials<br/>
3. Input & Select "Gridscape" under "Add new authorization<br/>
4. Click Next, Read over & Verify sharing information, Terms, & Conditions<br/>
5. Scroll down and click Submit.
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label><h4>SCE Authorization</h4></Form.Label><br/>
    
    <Form.Text className="text-muted">
    PG&E ShareMyData Instructions
Follow instructions in the following PDF  <br/>  <a href='https://www.google.com/url?q=https://drive.google.com/file/d/1ssm_6yHS5RO1VQEsepI4kV1uP4eZlL8I/view?usp%3Dsharing&sa=D&source=editors&ust=1644922944057859&usg=AOvVaw0l3NHtH-5uRZXoc5hRtXhg'>Link</a><br/><br/>

Or
<br/><br/>
1. Log In to My Account<br/>
2. Select the Data Sharing tab<br/>
3. Click on the green Authorize a Third Party button<br/>
4. Download and read the Terms and Conditions – If you agree, select the green Continue button<br/>
5. Select the Third Party Vendor of your choice, and continue following the next steps<br/>
<br/>
More details at:<br/>
<a href='https://www.google.com/url?q=https://www.sce.com/residential/rebates-savings/budget-assistant-and-you/Share-My-Data&sa=D&source=editors&ust=1644922944057938&usg=AOvVaw0QLCSOpppQy3VVRQncuSB3'>SCE</a>
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label><h4>SDGE Authorization</h4></Form.Label><br/>
    
    <Form.Text className="text-muted">
1. Go to: <br/>  <a href='https://myaccount.sdge.com/portal/PreLogin/Validate?SaveGreenButton&sa=D&source=editors&ust=1644922944058258&usg=AOvVaw1jsbPIST3cyhMzXmeYcCh0'>Link</a><br/>
2. Login, & follow instructions on website.
</Form.Text>
  </Form.Group>
  <label for="group2" className='PVEV'>Is ShareMyData Acknowledgement completed successfully?</label> 
  {['radio'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check
        inline
        label="Yes"
        name="group2"
        type={type}
        id={`inline-${type}-1`}
      />
       <Form.Check
        inline
        label="No"
        name="group2"
        type={type}
        id={`inline-${type}-1`}
      /> 
      </div>
       ))}
        <div className='buttons'>
          <button className='cancel' type='button' onClick={()=> setLgShow(false)}>Cancel</button>
          <button className='save' type='submit'>Save</button>
        </div>
  </form></Modal.Body>
            </Modal>
           
           
            <Modal
              size="md"
              show={mdShow}
              onHide={() => setMdShow(false)}
              aria-labelledby="example-modal-sizes-title-md"
              centered
              
              
            >
              <Modal.Header closeButton  onClick={()=> setdata(false)}>
                <Modal.Title id="example-modal-sizes-title-md">
                Upload Data
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
            <form className='PV-Form'>
        <Form.Group controlId="formFile" className="mb-3">
       <Form.Label>Attached Load Data</Form.Label><br/>
       <Form.Text className="text-muted">
                  Please provide data for atleast 1 year!**
              </Form.Text><br/>
          <Form.Control type="file" />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
       <Form.Label>Attached PDF Bills</Form.Label><br/>
       <Form.Text className="text-muted">
                  Please provide data for atleast 1 year!**
              </Form.Text><br/>
          <Form.Control type="file" />
        </Form.Group>
          
            <div className='buttons'>
          <button className='cancel' type='button'  onClick={()=> setMdShow(false)}>Cancel</button>
          <button className='save' type='submit'>Save</button>
        </div>

            </form> </Modal.Body>
            </Modal>
           
          </>
        );
      }
    
export default DataModal
