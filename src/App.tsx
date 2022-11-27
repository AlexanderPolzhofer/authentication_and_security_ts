import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/pages/Home/Home';
import { Signin } from './components/pages/Signin/Signin';
import { Signup } from './components/pages/Signup/Signup';
import { FallbackPage } from './components/pages/FallbackPage/FallbackPage';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';

function App() {

  return (

    <BrowserRouter>
      <Navbar />
      <div style={{ height: '85vh' }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='*' element={<FallbackPage />} />
        </Routes>
      </div>
      <Footer label='&#169; SECRETS 2022' />
    </BrowserRouter>


  )
}

export default App
