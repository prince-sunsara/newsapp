import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import About from './components/About'
import Error from './components/Error'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<News pageSize={6} country="in" category="general" />} />
          <Route path='/business' element={<News pageSize={6} country="in" category="business" />} />
          <Route path='/entertainment' element={<News pageSize={6} country="in" category="entertainment" />} />
          <Route path='/health' element={<News pageSize={6} country="in" category="health" />} />
          <Route path='/science' element={<News pageSize={6} country="in" category="science" />} />
          <Route path='/sports' element={<News pageSize={6} country="in" category="sports" />} />
          <Route path='/technology' element={<News pageSize={6} country="in" category="technology" />} />
          <Route path='/about' element={<About/>} />
          <Route path='/*' element={<Error/>} />
        </Routes>
      </Router>
      </>
    )
  }
}
