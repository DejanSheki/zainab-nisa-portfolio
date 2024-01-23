import vector from "../assets/vector.svg";

const Navbar = () => {
  return (
    <nav className="bg-transparent flex justify-end items-center pt-12">
      <div className="inline-flex items-center gap-4 mr-40">
        <img className="w-12" src={vector} alt="vector" />
        <strong className="font-handlee font-medium text-4xl text-black-200">
          znisa
        </strong>
      </div>
      <div className="inline-flex items-center">
        <a
          className="text-black-200 text-2xl font-normal font-inter mr-8"
          href="#"
        >
          Portfolio
        </a>
        <div className=" bg-gradient-to-t from-pink-100 from-30% to-transparent to-30% bg-[center_-6px] hover:from-pink-100 hover:from-60% hover:to-transparent hover:to-60% hover:bg-[center_-6px] h-min mr-1 pr-[1px] items-center">
          <a
            className="text-black-200 font-inter font-normal text-2xl"
            href="#"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
