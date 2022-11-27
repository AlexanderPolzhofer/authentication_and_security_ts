import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/pages/Home/Home';
import { Signin } from './components/pages/Signin/Signin';
import { Signup } from './components/pages/Signup/Signup';
import { FallbackPage } from './components/pages/FallbackPage/FallbackPage';
import { Navbar } from './components/pages/Navbar/Navbar';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
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
