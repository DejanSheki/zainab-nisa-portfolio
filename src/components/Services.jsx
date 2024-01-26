import arrowwDown from "../assets/arrow-down.svg";
import pen from "../assets/pen.svg";
import eye from "../assets/eye.svg";
import rhombus from "../assets/rhombus.svg";

const Services = () => {
  return (
    <section className="my-[4.69rem] 2xl:mb-36 2xl:mt-[6.875rem] px-[1.19rem] 2xl:px-0">
      <div className="2xl:pl-14">
        <h2 className="font-handlee text-black-200 text-shadow shadow-black-200 leading-normal font-semibold text-xl 2xl:text-[2rem] w-max bg-pink-100">
          What I do?
        </h2>
        <img className="mt-6 2xl:mt-[0.88rem]" src={arrowwDown} alt="arrow" />
      </div>
      <div className="flex flex-col 2xl:flex-row mt-3">
        <div className='flex flex-col items-start gap-6 2xl:gap-9 relative w-[16.25rem] 2xl:w-[23.6rem] h-[19.44rem] 2xl:h-[28.25rem] -rotate-[4deg] rounded-lg bg-yellow-100 border-yellow-300 border-solid border-[5px] shadow-[5px_5px_20px_0px_rgba(255,230,140,0.13)] px-9 2xl:px-14 pt-16 justify-center translate-x-4 2xl:-translate-x-3 before:content-["Pen/Paper"] before:bg-blue-200 before:text-black-200 before:font-handlee before:text-2xl 2xl:before:text-[2rem] before:leading-normal before:font-semibold before:pr-[3px] before:absolute before:top-20 before:-right-8 before:rotate-[4.1deg]'>
          <img
            className="w-[2.17rem] 2xl:w-[3.08rem] h-[2.42rem] 2xl:h-[3.43rem]"
            src={pen}
            alt="pen"
          />
          <h3 className="text-black-100 font-inter text-2xl 2xl:text-4xl font-medium leading-normal">
            User Research Design
          </h3>
        </div>
        <div className='flex flex-col items-start gap-6 2xl:gap-9 relative w-[16.25rem] 2xl:w-[23.6rem] h-[19.44rem] 2xl:h-[28.25rem] rotate-[5.5deg] rounded-lg bg-blue-200 border-blue-300 border-solid border-[5px] shadow-[5px_5px_20px_0px_rgba(157,220,255,0.15)] px-9 2xl:px-14 pt-16 justify-center translate-x-4 2xl:translate-x-6 translate-y-6 2xl:translate-y-1 before:content-["Figma"] before:bg-pink-100 before:text-black-200 before:font-handlee before:text-2xl 2xl:before:text-[2rem] before:leading-normal before:font-semibold before:pr-[3px] before:absolute before:-top-4 2xl:before:-top-6 before:right-[8.6rem] 2xl:before:right-[1.6rem] 2xl:before:-rotate-[5.4deg]'>
          <img
            className="w-[2.4rem] 2xl:w-[3.79rem] h-[1.8rem] 2xl:h-[2.86rem]"
            src={eye}
            alt="eye"
          />
          <h3 className="text-black-100 font-inter font-medium text-2xl 2xl:text-4xl leading-normal">
            UI & Product Design
          </h3>
        </div>
        <div className='flex flex-col items-start justify-center relative gap-6 2xl:gap-9 w-[16.25rem] 2xl:w-[23.6rem] h-[19.44rem] 2xl:h-[28.25rem] -rotate-[5deg] rounded-lg bg-pink-100 border-pink-300 border-solid border-[5px] shadow-[5px_5px_20px_0px_rgba(255,201,240,0.13)] px-9 2xl:px-14 pt-16 translate-x-5 2xl:translate-x-16 translate-y-[3.1rem] 2xl:translate-y-1 before:content-["Webflow"] before:bg-yellow-100 before:text-black-200 before:font-handlee before:text-2xl 2xl:before:text-[2rem] before:leading-normal before:font-semibold before:pr-[3px] before:absolute before:top-8 2xl:before:top-24 before:-left-4 2xl:before:-right-8 before:rotate-[5.1deg]'>
          <img
            className="w-[2.7rem] 2xl:w-[3.375rem]"
            src={rhombus}
            alt="rhombus"
          />
          <h3 className="text-black-100 font-inter font-medium text-2xl 2xl:text-4xl leading-normal">
            No-code Development
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Services;
