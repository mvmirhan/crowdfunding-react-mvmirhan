import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Nav from './components/Nav'
import HomePage from './pages/HomePage'
import ProjectPage from './pages/ProjectPage'
import LoginPage from './pages/LoginPage'
import CreateProjectPage from './pages/CreateProjectPage'
import image from './logo-musikantro.png'


import './App.css'

function App() {
  return (
    <div>
      <Router>

      <Nav />
      <img id="img" src={image}/>
        <Routes>
          <Route path="/login" element={<LoginPage/>}></Route>
          <Route path="/createproject" element={<CreateProjectPage/>}></Route>
          <Route exact path="/" element={<HomePage/>}></Route>
          <Route path="/project/:id" element={<ProjectPage/>}></Route>
          
        </Routes>
      </Router>

    </div>
  )
}


export default App