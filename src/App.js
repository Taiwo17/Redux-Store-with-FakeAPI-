import HomePage from './pages/HomePage'
import Cart from './pages/Cart'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomePage />} path='/' />
        <Route element={<Cart />} path='/cart' />
      </Routes>
    </BrowserRouter>
  )
}

export default App
