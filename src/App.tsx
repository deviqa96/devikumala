import React, { Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ExternalLinks from './digital-invitation/ExternalLinks'
import Invitation from './digital-invitation/Invitation'
import Main from './Main'
import Home from './Home'
// import About from './About'
// import Service from './Service'
import Job from './Job'
import Engagement from './Engagement'
// import Portfolio from './Portfolio'
// import Contact from './Contact'
import Motherhood from './Motherhood'
// import House from './House'

export default function App() {
  return (
    <Fragment>

      <Router>
        <Routes>
          <Route path="/" element={<Main />} >
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} /> */}
            <Route path="/journal/career" element={<Job />} />
            <Route path="/journal/engagement" element={<Engagement />} />
            {/* <Route path="/journal/house" element={<House />} /> */}
            <Route path="/journal/motherhood" element={<Motherhood />} />
            {/* <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} /> */}
          </Route>
          <Route path="/digital-invitation" element={<Invitation />} />
          <Route path="/digital-invitation/:guestName" element={<Invitation />} />
          <Route path="/digital-invitation/links" element={<ExternalLinks />} />
        </Routes>
      </Router>
    </Fragment>
  )
}
