import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Form, Modal, Row, Table } from 'react-bootstrap';

function Employee() {
  const [employeeData,setemployeeData]=useState([]);
  const [selectedEmploye, setselectedEmploye] = useState({});
  const [issueData, setissueData] = useState([]);
  const [Showmodel, setShowmodel] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [upRemark, setUpdatedname] = useState("");
  const [upEmail, setUpdateemail]=useState("");
  const [upMobile, setUpdatemobile]=useState("");
  let i=1;
  function onShow() {
    setIsShow(true);
  }
  function onHide() {
    setIsShow(false);
  }

  useEffect(() => {
    axios.get("http://localhost:5000/api/getallemployee")
    .then((result) => {
      console.log("DATA",result.data);
      setemployeeData(result.data);
    })
    .catch((err) => {});
    
  }, [])
  const updateAdminremark = () => {
    const updateemployee = {
      iid: selectedEmploye._id,
      UpdatedRemark: upRemark,
    };
    axios
      .post("http://localhost:5000/api/updateemployeeinfo", updateemployee)
      .then((result) => {
        console.log("DATA", result);
        alert("Admin Updated.!");
        setShowmodel(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  

  return (
    <div>
      <h4>Employee list</h4>
         <Container>
        <Row>
        <Col sm={12} md={6} lg={3}>
        <Table striped border hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile no</th>
              <th>Designation</th>
              <th>Image</th>
              <th>Gender</th>
              <th>Course</th>
              <th>Created Date</th>
              <th>Action</th>
            </tr>
          </thead>
          {employeeData.map((emp)=>{
           return (
            <tbody>
              <tr>
                <td>{i++}</td>
                <td>{emp.EmployeeName}</td>
                <td>{emp.EmployeeEmail}</td>
                <td>{emp.EmployeeMobile}</td>
                <td>{emp.EmployeeDesignation}</td>
                <td >{emp.EmployeeImage}</td>
                <td>{emp.EmployeeGender}</td>
                <td>{emp.EmployeeCourse}</td>
                <td>{emp.CreatedDate}</td>
                <td>
                <span
                          onClick={() => {
                            setselectedEmploye(emp);
                            setShowmodel(true);
                          }}
                        >
                          View
                        </span>
                </td>
              </tr>
            </tbody>
             
            
            );

          })}
             </Table>
             </Col>
        </Row>
      </Container>
      <Modal show={Showmodel} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Update Employee list</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setUpdatedname(e.target.value)}
          ></Form.Control>
          <Form.Label>Email</Form.Label>
          <Form.Control type='email'
          onChange={(e)=>setUpdateemail(e.target.value)}></Form.Control>
          <Form.Label>MobileNo</Form.Label>
          <Form.Control type='number'
          onChange={(e)=>setUpdatemobile(e.target.value)}></Form.Control>
        </Modal.Body>
        <Modal.Footer className="modal-footer">
          <Button onClick={updateAdminremark}>Update</Button>
          <Button onClick={() => setShowmodel(false)}>closeButton</Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default Employee