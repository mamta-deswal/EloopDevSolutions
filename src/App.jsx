import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Footer from './components/Footer';
import Form from './pages/Form';
import SubscriptionLanding from './pages/SubscriptionLanding';
import Cv from './components/Cv';
import FullBlog from './components/FullBlog';

const App = () => {

  const isOwnerPath = useLocation().pathname.includes("owner");
  return (
    <div>
      {!isOwnerPath && <Navbar />}
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blog' element={<Blogs />} />
          <Route path='/form' element={<Form />} />
          <Route path='/SubscriptionLanding' element={<SubscriptionLanding />} />
          <Route path='/cv' element={<Cv />} />
          <Route path='/fullblog' element={<FullBlog />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
