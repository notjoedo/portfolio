import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './pages/Hero';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Atlas from './pages/Atlas';
import Footer from './components/Footer';

// Home page component
function HomePage() {
  return (
    <>
      <Hero />
      <Experience />
      <Projects />
      <div className="max-w-5xl mx-auto px-4">
        <div className="w-full h-px bg-gray-300"></div>
      </div>
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen flex flex-col overflow-x-hidden">
            <div className="flex-grow">
              <HomePage />
            </div>
            <Footer />
          </div>
        } />
        <Route path="/atlas" element={<Atlas />} />
      </Routes>
    </Router>
  );
}

export default App;
