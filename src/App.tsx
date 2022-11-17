import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Home } from './components/pages/Home/Home';
import { Signin } from './components/pages/Signin/Signin';
import { Signup } from './components/pages/Signup/Signup';
import { FallbackPage } from './components/pages/FallbackPage/FallbackPage';

function App() {

  return (
    <BrowserRouter>
      <nav>
        <Link to={'/'}>
          Home
        </Link>
        <Link to={'/signin'}>
          SignIn
        </Link>
        <Link to={'/signup'}>
          SignUp
        </Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='*' element={<FallbackPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
