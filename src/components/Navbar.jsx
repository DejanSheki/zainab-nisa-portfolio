import vector from '../assets/vector.svg';

const Navbar = () => {
  return (
    <nav className="bg-transparent flex justify-end items-center pt-12">
      <div className='inline-flex items-center gap-4 mr-40'>
        <img className='w-12' src={vector} alt="vector" />
        <h1 className='font-handlee font-normal text-4xl text-black-200'>znisa</h1>
      </div>
      <div className='inline-flex items-center'>
        <a className='text-black-200 text-2xl font-normal font-inter mr-8' href="#">Portfolio</a>
        <div className='bg-gradient-to-t from-pink-100 from-30% to-transparent to-30% bg-[center_-6px] h-min mr-1'>
          <a className='text-black-200 font-inter font-normal text-2xl' href="#">Hire Me</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
