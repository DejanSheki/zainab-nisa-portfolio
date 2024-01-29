import vector from "../assets/vector.svg";

const Navbar = () => {
  return (
    <nav className="bg-transparent flex justify-between gap-10 md:gap-32 pl-[1.19rem] pr-[0.45rem] md:justify-end items-center pt-12">
      <div className="inline-flex items-center gap-2 2xl:mr-40">
        <img
          className="w-[1.68rem] md:w-10 2xl:w-12"
          src={vector}
          alt="vector"
        />
        <strong className="font-handlee font-bold 2xl:font-normal leading-normal text-2xl md:text-4xl text-black-200">
          znisa
        </strong>
      </div>
      <div className="inline-flex items-center gap-6 2xl:gap-8">
        <a
          className="text-black-200 text-base md:text-2xl font-normal font-inter"
          href="#"
        >
          Portfolio
        </a>
        <div className=" bg-gradient-to-t from-pink-100 from-30% to-transparent to-30% bg-[center_-6px] hover:from-pink-100 hover:from-60% hover:to-transparent hover:to-60% hover:bg-[center_-6px] h-min mr-1 pr-[1px] items-center">
          <a
            className="text-black-200 text-base md:text-2xl font-normal font-inter"
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
