import React, { useState } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import About from './components/About'
import Error from './components/Error'
import LoadingBar from 'react-top-loading-bar'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

const App = () => {
  const pageSize = 15;

  const [progress, setProgress] = useState(0)

  const handleProgress = (progress) => {
    setProgress(progress);
  }

    return (
      <>
      <Router>
        <Navbar />
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
        
      />
        <Routes>
          <Route exact path='/' element={<News setProgress={handleProgress}  key="general" pageSize={pageSize} country="in" category="general" />} />
          <Route exact path='/business' element={<News setProgress={handleProgress}  key="business" pageSize={pageSize} country="in" category="business" />} />
          <Route exact path='/entertainment' element={<News setProgress={handleProgress}  key="entertainment" pageSize={pageSize} country="in" category="entertainment" />} />
          <Route exact path='/health' element={<News setProgress={handleProgress}  key="health" pageSize={pageSize} country="in" category="health" />} />
          <Route exact path='/science' element={<News setProgress={handleProgress}  key="science" pageSize={pageSize} country="in" category="science" />} />
          <Route exact path='/sports' element={<News setProgress={handleProgress}  key="sports" pageSize={pageSize} country="in" category="sports" />} />
          <Route exact path='/technology' element={<News setProgress={handleProgress}  key="technology" pageSize={pageSize} country="in" category="technology" />} />
          <Route exact path='/about' element={<About />} />
          <Route path='/*' element={<Error/>} />
        </Routes>
      </Router>
      </>
    )
  }

  export default App;