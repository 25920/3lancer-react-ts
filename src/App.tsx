import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { 
  Navbar,
  Footer,
} from "./components";
import {
  Home,
  Team,
  Services, 
  FOF,
} from "./pages";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/contact" element={<Team/>} />
        <Route path="*" element={<FOF/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App