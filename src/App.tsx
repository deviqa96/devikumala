import React, { Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ExternalLinks from './digital-invitation/ExternalLinks'
import Invitation from './digital-invitation/Invitation'
import Main from './Main'

export default function App() {
  return (
    <Fragment>

      <Router>
        <Routes>
          <Route path="/" element={<Main />} >
            <Route path="/home" element={<h1>This is Home</h1>} />
            <Route path="/about" element={<h1>About Me</h1>} />
            <Route path="/service" element={<h1>My Service</h1>} />
            <Route path="/story/work" element={<h1>My Job</h1>} />
            <Route path="/story/engagement" element={<h1>My engagement</h1>} />
            <Route path="/story/wedding" element={<h1>My wedding</h1>} />
            <Route path="/story/house" element={<h1>My house</h1>} />
            <Route path="/story/pregnancy" element={<h1>My pregnancy</h1>} />
            <Route path="/story/baby" element={<h1>My Baby</h1>} />
            <Route path="/portfolio" element={<h1>Portfolio</h1>} />
            <Route path="/contact" element={<h1>Contact Me</h1>} />
          </Route>
          <Route path="/digital-invitation" element={<Invitation />} />
          <Route path="/digital-invitation/:guestName" element={<Invitation />} />
          <Route path="/digital-invitation/links" element={<ExternalLinks />} />
        </Routes>
      </Router>
    </Fragment>
  )
}
