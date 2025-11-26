import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AddEvent from './pages/AddEvent'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddEvent />} />
    </Routes>
  )
}
