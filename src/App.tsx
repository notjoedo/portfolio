import Hero from './pages/Hero';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <div className="flex-grow">
        <Hero />
        <Experience />
        <Projects />
        <div className="max-w-5xl mx-auto px-4">
          <div className="w-full h-px bg-gray-300"></div>
        </div>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
