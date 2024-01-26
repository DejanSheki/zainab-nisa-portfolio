/* eslint-disable react/no-unescaped-entities */
import ilustration from "../assets/mask-group.svg";
import device from "../assets/device.svg";
import arrow from "../assets/arrow.svg";

const Header = () => {
  return (
    <header className="flex flex-col pt-[4.7rem] 2xl:pt-20 gap-8 2xl:gap-[1.77rem] px-[1.19rem] 2xl:px-0">
      <div className="flex  items-center">
        <div className="flex items-center gap-1 2xl:gap-4 -rotate-3 2xl:-rotate-[5.2deg]">
          <div className="relative">
            <img src={ilustration} alt="ilustration" />
            <img
              className="absolute top-[78px] left-[87px]"
              src={device}
              alt="device"
            />
          </div>
          <div>
            <img src={arrow} alt="arrow" />
          </div>
          <div className="h-16">
            <strong className="font-handlee text-xl 2xl:text-[2rem] leading-normal text-black-200 bg-pink-100">
              znisa
            </strong>
          </div>
        </div>
      </div>
      <div className="flex 2xl:flex-row flex-col 2xl:justify-between gap-4 2xl:gap-52 2xl:px-3">
        <div className="w-full 2xl:w-1/2">
          <h1 className="font-inter font-semibold text-[2rem] 2xl:text-[4rem] text-black-200 ">
            I
            <span className="bg-gradient-to-t from-pink-100 from-30% to-transparent to-30% bg-[center_-6px]">
              design
            </span>
            top <br /> notch websites
          </h1>
        </div>
        <div className="flex flex-col gap-5 2xl:gap-[1.9rem] w-full 2xl:w-1/2 pt-2">
          <p className="font-inter font-normal text-base 2xl:text-2xl text-black-200 leading-5 2xl:leading-8 text-justify">
            I'll design your website and will develop to land it on internet
            using No-code.
          </p>
          <div>
            <button className="bg-black-200 shadow-[3px_3px_12px_0px_rgba(0,0,0,0.12)] py-[0.375rem] 2xl:py-[1.125rem] px-3 2xl:px-[3.625rem]  text-white font-inter text-base 2xl:text-2xl leading-[140%] 2xl:leading-[140%] font-semibold hover:shadow-[0px_0px_0px_4px_rgba(255,_201,_240,_1)] hover:text-pink-100">
              Hire me
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
