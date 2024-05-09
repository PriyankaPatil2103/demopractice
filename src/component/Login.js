import axios from "axios";
import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Login() {
  const [UserName, setUserName] = useState();
  const [Password, setPassword] = useState();
  const navi=useNavigate();

  const addlogin=()=>{
    const logindata={
      UserName:UserName,
      Password:Password
    };
    axios.post("http://localhost:5000/api/dologin",logindata)
    .then((result) => {
      console.log("DATA",result.data);
      if(result.data.success){
        navi("/Index");
      }else{
        alert("Login fail")
      }

    }).catch((err) => {
      console.log(err)
    });
  }

  return (
    <div className="page">
      <Container>
        <Row>
          <Form>
            <Form.Group>
              <Form.Label>UserName</Form.Label>
              <Form.Control
                type="Text"
                placeholder="Enter your username"
                onChange={(e) => setUserName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="Password"
                placeholder="Enter your Password"
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>
          </Form>
          <Button onClick={() => addlogin()}>Submit</Button>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
