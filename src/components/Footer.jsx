import vector from "../assets/vector.svg";

const Footer = () => {
  return (
    <footer
      className="flex flex-col 2xl:flex-row justify-between items-start pt-[3.81rem] 2xl:pt-[5.75rem] pb-[1.43rem] 2xl:pb-10 
   pl-[1.2rem] 2xl:pl-[2.37rem] gap-[2.83rem]"
    >
      <div className="flex justify-center items-center gap-2 2xl:gap-4">
        <img className="w-[1.87rem] 2xl:w-12" src={vector} alt="icon" />
        <strong className="font-handlee font-medium text-[1.38rem] 2xl:text-4xl leading-normal text-shadow shadow-black-200 text-black-200">
          znisa
        </strong>
      </div>
      <div className="flex flex-col items-start 2xl:items-center gap-[0.69rem] 2xl:gap-[2.437rem]">
        <div className="flex gap-[1.37rem] 2xl:gap-[4.81rem]">
          <a
            className="bg-black-200 shadow-[1px_1px_11.2px_0px_rgba(0,0,0,0.08)] text-white text-center text-shadow shadow-white font-handlee text-base 2xl:text-[2rem] font-normal leading-normal"
            href="#"
          >
            Twitter X
          </a>
          <a
            className="bg-black-200 shadow-[1px_1px_11.2px_0px_rgba(0,0,0,0.08)] text-white text-center text-shadow shadow-white font-handlee text-base 2xl:text-[2rem] font-normal leading-normal"
            href="#"
          >
            LinkdIn
          </a>
          <a
            className="bg-black-200 shadow-[1px_1px_11.2px_0px_rgba(0,0,0,0.08)] text-white text-center text-shadow shadow-white font-handlee text-base 2xl:text-[2rem] font-normal leading-normal"
            href="#"
          >
            Instagram
          </a>
        </div>
        <p className="text-black-200 font-inter text-[0.94rem] 2xl:text-2xl font-normal leading-[140%] text-right">
          Copyright. Portfolio 2024
        </p>
      </div>
    </footer>
  );
};

export default Footer;
