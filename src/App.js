import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Nav from './components/Nav'
import HomePage from './pages/HomePage'
import ProjectPage from './pages/ProjectPage'

import './App.css'

function App() {
  return (
    <div>
      <Router>

      <Nav />
        <Routes>
          <Route exact path="/" element={<HomePage/>}></Route>
          <Route path="/project/:id" element={<ProjectPage/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}


export default App