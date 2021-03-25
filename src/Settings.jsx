import React, {useState, useEffect} from 'react';
import Modal from 'react-bootstrap/Modal'
import axios from "axios";
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

function Settings(props) {

    const [show, setShow] = useState(false);
    const [customerData, setCustomerData] = useState([]);

    useEffect(() => {
      axios.get("/api/customer/1", {withCredentials:true
      }).then((response)=>{     

        setCustomerData(response.data);
   })
  },[]) 


    console.log(props.lgShow)
  
    return (
      <div>
      <i  onClick={() => setShow(true)} class="material-icons">manage_accounts</i> 
        <Modal
          size="lg"
          show={show}
          onHide={() => setShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
             Settings
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>

          <InputGroup className="mb-3">
              <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1"><i class="material-icons">email</i></InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                placeholder={customerData.customer_email}
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
          </InputGroup>
          
          </Modal.Body>
        </Modal>
      </div>
    );
  }
  

  export default Settings


  
  