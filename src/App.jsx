import './App.css';

import Navbar from './components/Navbar';
import Header from './components/Header';
import Services from './components/Services';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  return (
    <main className='max-w-[90rem] bg-white m-auto px-6 md:px-16 2xl:px-[7.63rem] overflow-hidden'>
      <div className='bg-bg bg-repeat bg-[length:5.999999865889549px_5.999999865889549px] border-l-[1.5px] md:border-l-[3px] border-black-100'>
        <Navbar />
        <Header />
        <Services />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}

export default App;
