import React, { Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Invitation from './Invitation'

export default function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Invitation />} />
          <Route path="/:guestName" element={<Invitation />} />
        </Routes>
      </Router>
    </Fragment>
  )
}
