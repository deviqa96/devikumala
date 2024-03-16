import React, { Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Main from './routes/Main'
import Home from './routes/Home/Home'
import About from './routes/About'
// import Service from './Service'
import Portfolio from './routes/Portfolio/Portfolio'
import Contact from './routes/Contact'
import Blog from './routes/Blog/Blog'
import BlogView from './routes/Blog/BlogView'
import PortfolioView from './routes/Home/PortfolioView'
import Page404 from './routes/Page404'

export default function App() {
  return (
    <Fragment>

      <Router>
        <Routes>
          <Route path="/" element={<Main />} >
            <Route path="/" element={<Home />} />
            <Route path="/tentang" element={<About />} />
            {/*<Route path="/service" element={<Service />} /> */}
            <Route path="/blog/:param" element={<BlogView />} />
            <Route path="/blogs/:param" element={<Blog />} />
            <Route path="/blogs/" element={<Blog />} />
            <Route path="/portofolio/:param" element={<PortfolioView />} />
            <Route path="/portofolios/:param" element={<Portfolio />} />
            <Route path="/portofolios/" element={<Portfolio />} />
            <Route path="/kontak" element={<Contact />} />
            <Route element={<Page404/>} />
          </Route>
          <Route element={<Page404/>} />
        </Routes>
      </Router>
    </Fragment>
  )
}
