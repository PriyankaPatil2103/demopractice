import axios from 'axios';
import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'

function Home() {
    const [EmployeeName, setEmployeename]=useState("");
    const [EmployeeEmail, setEmployeemail]=useState("");
    const [EmployeeMobile, setEmployeemobileno]=useState("");
    const [EmployeeDesignation, setEmployeedesination]=useState("");
    const [EmployeeGender, setEmployeegender]=useState("");
    const [EmployeeCourse, setEmployeecourse]=useState("");
    const [EmployeeImage, setEmployeeimage]=useState("");

    const addEmployee = () => {
        const emp = {
          EmployeeName: EmployeeName,
          EmployeeEmail: EmployeeEmail,
          EmployeeDesignation: EmployeeDesignation,
          EmployeeGender: EmployeeGender,
          EmployeeImage:EmployeeImage,
          EmployeeMobile: EmployeeMobile,
          EmployeeCourse:EmployeeCourse,
          
        };
        axios
          .post("http://localhost:5000/api/addemployee", emp)
          .then((result) => {
            console.log("DATA", result.data);
            alert("Employee Added Successfully");
            window.location.reload(false);
          })
          .catch((err) => {
            console.log(err);
          });
      };
      async function handlechangeimage(e) {
        const imgData = new FormData();
        imgData.append("image", e.target.files[0]);
        axios
          .post("http://localhost:5000/uploadfile", imgData)
          .then((res) => {
            console.log("Res:", res.data);
            setEmployeeimage(res.data.filepath);
            alert("Image Uploaded");
          })
          .catch((err) => {
            console.log("Err:", err);
          });
      }
  return (
    <div>
        <h4>Create employee</h4>
        <Container>
            <Form>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type='text' placeholder='Enter employee name'
                    onClick={(e)=>setEmployeename(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' placeholder='Enter employee email'
                    onClick={(e)=>setEmployeemail(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Mobile No</Form.Label>
                    <Form.Control type='number' placeholder='Enter employee Mobile No'
                    onClick={(e)=>setEmployeemobileno(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Designation</Form.Label>
                    <Form.Select onClick={(e)=>setEmployeedesination(e.target.value)}>
                        <option value="HR">HR</option>
                        <option value="Sales">Sales</option>
                        <option value="Manager">Manager</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Gender</Form.Label>
                    <Form.Check onClick={(e)=>setEmployeegender(e.target.value)}
                    type="Radio"
                    name="type"
                    value="Male"
                    label="Male" >

                    </Form.Check>
                    <Form.Check onClick={(e)=>setEmployeegender(e.target.value)}
                    type='Radio'
                    name='type'
                    value="Female"
                    label="Female"></Form.Check>
                </Form.Group><Form.Group>
                    <Form.Label>Course</Form.Label>
                    <Form.Select type='text' placeholder='Enter employee name'
                    onClick={(e)=>setEmployeecourse(e.target.value)}></Form.Select>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Image</Form.Label>
                    <Form.Control type='file' placeholder='Enter image'
                    onChange={handlechangeimage}></Form.Control>
                </Form.Group>
                <Button onClick={() => addEmployee()}>Submit</Button>
            </Form>
        </Container>
    </div>
  )
}

export default Home