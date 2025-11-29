import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AddEvent from './pages/AddEvent'
import EventDetail from './pages/EventDetail'
import About from './pages/About'
import Profile from './pages/Profile'
import Layout from './components/Layout'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddEvent />} />
        <Route path="/events/:id" element={<EventDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Layout>
  )
}
