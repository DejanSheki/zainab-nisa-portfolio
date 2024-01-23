import './App.css';

import Navbar from './components/Navbar';
import Header from './components/Header';
import Services from './components/Services';
import Projects from './components/Projects';

function App() {

  return (
    <main className='max-w-[90rem] bg-white m-auto px-[7.5rem]'>
      <div className='bg-bg bg-repeat bg-[length:5.999999865889549px_5.999999865889549px] border-l-[3px] border-black-100'>
        <Navbar />
        <Header />
        <Services />
        <Projects />
      </div>

    </main>
  )
}

export default App;
