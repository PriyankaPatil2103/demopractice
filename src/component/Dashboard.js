import React from 'react'
import { Container, Row, Tab, Tabs } from 'react-bootstrap'
import Home from './Tabs/Home'
import Employee from './Tabs/Employee'
import Logout from './Tabs/Logout'
function Dashboard() {
  return (
    <div>
        <Container>
            <Row>
                <Tabs fill variant='tabs' defaultActiveKey="Home" style={{marginTop:"20px"}}>
                    <Tab eventKey="Home" title="Home">
                        <Home/>
                    </Tab>
                    <Tab eventKey="Employee" title="Employee">
                        <Employee/>
                    </Tab>
                    <Tab eventKey="Logout" title="Logout">
                        {/* <Logout/> */}
                    </Tab>
                </Tabs>
            </Row>
        </Container>
    </div>
  )
}

export default Dashboard