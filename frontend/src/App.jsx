import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AddEvent from './pages/AddEvent'
import Layout from './components/Layout'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddEvent />} />
      </Routes>
    </Layout>
  )
}
