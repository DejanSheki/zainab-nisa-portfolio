import './App.css';

import Navbar from './components/Navbar';
import Header from './components/Header';

function App() {

  return (
    <main className='max-w-[90rem] bg-white m-auto px-28'>
      <div className='bg-bg bg-repeat bg-[length:5.999999865889549px_5.999999865889549px] border-l-[3px] border-black-100 h-screen'>
        <Navbar />
        <Header />
      </div>

    </main>
  )
}

export default App;
