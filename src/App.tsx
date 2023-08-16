import React, { Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ExternalLinks from './digital-invitation/ExternalLinks'
import Invitation from './digital-invitation/Invitation'
import Main from './routes/Main'
import Home from './routes/Home/Home'
import About from './routes/About'
// import Service from './Service'
import Portfolio from './routes/Portfolio/Portfolio'
import Contact from './routes/Contact'
import Blog from './routes/Blog/Blog'

export default function App() {
  return (
    <Fragment>

      <Router>
        <Routes>
          <Route path="/" element={<Main />} >
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/*<Route path="/service" element={<Service />} /> */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:category" element={<Blog />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:category" element={<Portfolio />} />
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
