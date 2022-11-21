import React, { Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ExternalLinks from './ExternalLinks'
import Invitation from './Invitation'

export default function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Invitation />} />
          <Route path="/:guestName" element={<Invitation />} />
          <Route path="/links" element={<ExternalLinks />} />
        </Routes>
      </Router>
    </Fragment>
  )
}
