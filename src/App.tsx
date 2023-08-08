import React, { Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ExternalLinks from './digital-invitation/ExternalLinks'
import Invitation from './digital-invitation/Invitation'
import Main from './Main'
import Home from './Home'
import About from './About'
import Service from './Service'
import Job from './Job'
import Engagement from './Engagement'
import Wedding from './Wedding'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Pregnancy from './Pregnancy'
import House from './House'
import Baby from './Baby'

export default function App() {
  return (
    <Fragment>

      <Router>
        <Routes>
          <Route path="/" element={<Main />} >
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/chapter/career" element={<Job />} />
            <Route path="/chapter/engagement" element={<Engagement />} />
            <Route path="/chapter/wedding" element={<Wedding />} />
            <Route path="/chapter/house" element={<House />} />
            <Route path="/chapter/pregnancy" element={<Pregnancy />} />
            <Route path="/chapter/baby" element={<Baby />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          <Route path="/digital-invitation" element={<Invitation />} />
          <Route path="/digital-invitation/:guestName" element={<Invitation />} />
          <Route path="/digital-invitation/links" element={<ExternalLinks />} />
        </Routes>
      </Router>
    </Fragment>
  )
}
