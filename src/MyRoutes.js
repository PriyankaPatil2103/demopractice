import React from 'react'
import { BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import About from './component/About'
import Contact from './component/Contact'
import Services from './component/Services'
import MyNavBar from './MyNavBar'
import Login from './component/Login'
import Dashboard from './component/Dashboard'
import Index from './component/Index'


function MyRoutes() {
  return (
    <div>
        <Router>
            <MyNavBar/>
            <Routes>
                <Route path='/Login' element={<Login/>}></Route>
                <Route path='index' element={<Index/>}></Route>
                <Route path='/Dashboard' element={<Dashboard/>}></Route>
            </Routes>
        </Router>

    </div>
  )
}

export default MyRoutes