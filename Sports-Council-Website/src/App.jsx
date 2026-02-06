import './App.css'
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'

import Events from './pages/Events'
import Team from './pages/Team'
import TeamMembers from './pages/TeamMembers'
import Details from './pages/Details'

import Gallery from './pages/Gallery'
import Contact from './pages/contact'
import Footer from './components/Footer'
import { DisplayProvider } from './context/DisplayContext'
import ClubDetail from './pages/ClubDetail'
import EventDetail from './pages/EventDetail'
import Staff from './pages/Staff'
import ClubsGallery from './pages/ClubAndSocities'
import Feedback from './pages/feedback'
import Members from './pages/Members'
import GallerytData from './pages/GalleryData'


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
          
            <Route path='/events' element={<Events/>}/>
            <Route path='/events/:id' element={<EventDetail/>}/>
            <Route path='/team' element={<Team/>}/>
            <Route path='/staff' element={<Staff/>}/>
            <Route path='/clubs' element={<ClubsGallery/>}/>
            <Route path="/clubs/:clubname" element={<ClubDetail/>} />
            <Route path='/gallery' element={<Gallery/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/feedback' element={<Feedback/>}/>
            <Route path='/teamMembers' element={<TeamMembers/>} />
            <Route path='/Details' element={<Details/>} />
            <Route path='/Members' element={<Members/>} />
            <Route path='/GallerytData' element={<GallerytData/>} />
          </Routes>
          <Footer/>
        </DisplayProvider>
      </Router>
      </div>
    </>
  )
}

export default App
