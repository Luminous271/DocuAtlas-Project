import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
import UserGreeting from './Components/UserGreeting.jsx'
import Card from './Components/Card.jsx'
import Button from './Components/Button.jsx'
import Home from './Pages/Home.jsx'
import Courses from './Pages/Courses.jsx'
import Search from './Pages/Search.jsx'
import Settings from './Pages/Settings.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return(
    <BrowserRouter>
            <div className="app">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/courses" element={<Courses />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/settings" element={<Settings />} />
                </Routes>
            </div>
    </BrowserRouter>
  );
}

export default App
