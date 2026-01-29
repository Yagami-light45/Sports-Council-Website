import './App.css'
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Facilities from './pages/Facilities'
import Events from './pages/Events'
import Team from './pages/Team'

import Gallery from './pages/Gallery'
import Contact from './pages/contact'
import Footer from './components/Footer'
import { DisplayProvider } from './context/DisplayContext'
import ClubDetail from './pages/ClubDetail'
import EventDetail from './pages/EventDetail'
import Staff from './pages/Staff'
import ClubsGallery from './pages/ClubAndSocities'
import Feedback from './pages/feedback'


function App() {
  return (
    <>
      <div className='max-w-screen h-screen font-poppins'>
      <Router>
        <DisplayProvider>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/facilities' element={<Facilities/>}/>
            <Route path='/events' element={<Events/>}/>
            <Route path='/events/:id' element={<EventDetail/>}/>
            <Route path='/team' element={<Team/>}/>
            <Route path='/staff' element={<Staff/>}/>
            <Route path='/clubs' element={<ClubsGallery/>}/>
            <Route path="/clubs/:clubname" element={<ClubDetail/>} />
            <Route path='/gallery' element={<Gallery/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/feedback' element={<Feedback/>}/>
          </Routes>
          <Footer/>
        </DisplayProvider>
      </Router>
      </div>
    </>
  )
}

export default App
