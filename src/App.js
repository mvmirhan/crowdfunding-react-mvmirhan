import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Nav from './components/Nav'
import HomePage from './pages/HomePage'
import CreateUserPage from './pages/CreateUserPage'
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
        <div id='logo'>
          <img src={image} alt='logo'/>
          <p>
          MUSIKANTRO is a creative art promotion platform with a vision to introduce up-coming musicians who are looking to break into music scene and help launch their music career.
          The purpose of the platform is to offer a tool that will help provide exposure to musicians to grab attention and get more backers/supporters thru crowdfunding campaigns. 
          </p>
        </div>
      
        <Routes>
          <Route path="/login" element={<LoginPage/>}></Route>
          <Route path="/projects/" element={<CreateProjectPage/>}></Route>
          <Route exact path="/" element={<HomePage/>}></Route>
          <Route path="/users/" element={<CreateUserPage/>}></Route>
          <Route path="/project/:id" element={<ProjectPage/>}></Route>
          
        </Routes>
      </Router>

    </div>
  )
}


export default App