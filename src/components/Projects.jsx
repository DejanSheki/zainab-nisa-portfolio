import arrowDownRight from "../assets/arrow-down-right.svg";
import noCode from "../assets/no-code.png";
import uiDesign from "../assets/ui-desin.png";
import uxDesin from "../assets/ux-desin.png";
import uxDesinApp from "../assets/ux-desin2.png";
import cursorPink from "../assets/cursor-pink.svg";
import cursorBlue from "../assets/cursor-blue.svg";
import cursorYellow from "../assets/cursor-yellow.svg";
import cursorGreen from "../assets/cursor-green.svg";

const Projects = () => {
  return (
    <section className="grid grid-flow-row grid-cols-1 md:grid-cols-[12rem_repeat(2,minmax(33%,_1fr))] 2xl:grid-cols-[16rem_repeat(2,minmax(33%,_1fr))] gap-5 2xl:gap-8 px-3 mb-[4.69rem] 2xl:mb-36">
      <div className="row-span-4 col-span-1 flex flex-col 2xl:mt-[7.5rem] 2xl:mb-36">
        <h2 className="text-black-200 font-handlee text-shadow shadow-black-200 text-xl md:text-2xl 2xl:text-[2rem] leading-normal font-semibold bg-pink-100 w-max">
          Featured Projects
        </h2>
        <div className="inline-flex justify-start 2xl:justify-end my-4 2xl:my-6 pr-4">
          <img className="rotate-[50.7deg]" src={arrowDownRight} alt="arrow" />
        </div>
        <p className="text-black-200 font-inter text-base 2xl:text-2xl font-normal leading-[125%] 2xl:leading-[140%] w-3/5 2xl:w-full">
          Have designed more than 20 projects
        </p>
      </div>
      <div className="row-span-2 col-span-1 flex flex-col bg-white border-solid border-black-100 border-[1.7px] 2xl:border-[3px] rounded-md px-4 2xl:px-5 pt-4 2xl:pt-5">
        <div>
          <img src={noCode} alt="No-code" />
        </div>
        <div className="flex items-end gap-3 2xl:gap-9 pb-4 2xl:pb-7 mt-4 2xl:mt-11">
          <h3 className="text-black-200 font-semibold text-shadow shadow-black-200 font-handlee text-xl 2xl:text-[1.75rem] leading-5 2xl:leading-7 flex-1">
            4 style Portfolio design
          </h3>
          <div className="relative">
            <img
              className="absolute w-4 2xl:w-auto -top-3 2xl:-top-6 -left-3 2xl:-left-5"
              src={cursorPink}
              alt="cursor icon"
            />
            <button className="flex py-[0.41rem] 2xl:py-[0.55944rem] pr-4 2xl:pr-[1.3985rem] pl-[0.82rem] 2xl:pl-[1.11881rem] rounded-[0.10294rem_1.23506rem_1.23506rem_1.23506rem] 2xl:rounded-[0.13988rem_1.67825rem_1.67825rem_1.67825rem] border-[2.238px] border-solid border-pink-500 bg-pink-200 shadow-[4.475px_4.475px_11.188px_0px_rgba(247,144,9,0.16)] text-white font-inter text-[0.82rem] 2xl:text-lg font-medium leading-5 2xl:leading-[1.678rem]">
              No-Code
            </button>
          </div>
        </div>
      </div>
      <div className="row-span-2 col-span-1 flex flex-col bg-white border-solid border-black-100 border-[1.7px] 2xl:border-[3px] rounded-md px-4 2xl:px-5 pt-4 2xl:pt-5">
        <div>
          <img src={uiDesign} alt="UI-design" />
        </div>
        <div className="flex items-end gap-3 2xl:gap-9 pb-4 2xl:pb-7 mt-4 2xl:mt-11">
          <h3 className="text-black-200 font-semibold text-shadow shadow-black-200 font-handlee text-xl 2xl:text-[1.75rem] leading-5 2xl:leading-7 flex-1">
            Color system for app
          </h3>
          <div className="relative">
            <img
              className="absolute w-4 2xl:w-auto -top-3 2xl:-top-6 -left-3 2xl:-left-5"
              src={cursorBlue}
              alt="cursor icon"
            />
            <button className="flex py-[0.41rem] 2xl:py-[0.55944rem] pr-4 2xl:pr-[1.3985rem] pl-[0.82rem] 2xl:pl-[1.11881rem] rounded-[0.10294rem_1.23506rem_1.23506rem_1.23506rem] 2xl:rounded-[0.13988rem_1.67825rem_1.67825rem_1.67825rem] border-[2.238px] border-solid border-blue-500 bg-blue-300 shadow-[4.475px_4.475px_11.188px_0px_rgba(9,33,247,0.16)] text-white font-inter text-[0.82rem] 2xl:text-lg font-medium leading-5 2xl:leading-[1.678rem]">
              UI Design
            </button>
          </div>
        </div>
      </div>
      <div className="row-span-2 col-span-1 flex flex-col bg-white border-solid border-black-100 border-[1.7px] 2xl:border-[3px] rounded-md px-4 2xl:px-5 pt-4 2xl:pt-5">
        <div>
          <img src={uxDesin} alt="UX-design" />
        </div>
        <div className="flex gap-3 2xl:gap-9 pb-4 2xl:pb-7 mt-4 2xl:mt-11">
          <h3 className="text-black-200 font-semibold text-shadow shadow-black-200 font-handlee text-xl 2xl:text-[1.75rem] leading-5 2xl:leading-7 flex-1">
            Onboarding screen process
          </h3>
          <div className="relative">
            <img
              className="absolute w-4 2xl:w-auto -top-3 2xl:-top-6 -left-3 2xl:-left-5"
              src={cursorYellow}
              alt="cursor icon"
            />
            <button className="flex py-[0.41rem] 2xl:py-[0.55944rem] pr-4 2xl:pr-[1.3985rem] pl-[0.82rem] 2xl:pl-[1.11881rem] rounded-[0.10294rem_1.23506rem_1.23506rem_1.23506rem] 2xl:rounded-[0.13988rem_1.67825rem_1.67825rem_1.67825rem] border-[2.238px] border-solid border-yellow-400 bg-yellow-200 shadow-[4.475px_4.475px_11.188px_0px_rgba(229,193,65,0.16)] text-white font-inter text-[0.82rem] 2xl:text-lg font-medium leading-5 2xl:leading-[1.678rem]">
              UX Design
            </button>
          </div>
        </div>
      </div>
      <div className="row-span-2 col-span-1 flex flex-col bg-white border-solid border-black-100 border-[1.7px] 2xl:border-[3px] rounded-md px-4 2xl:px-5 pt-4 2xl:pt-5">
        <div>
          <img src={uxDesinApp} alt="UX-desin" />
        </div>
        <div className="flex gap-3 2xl:gap-9 pb-4 2xl:pb-7 mt-4 2xl:mt-11">
          <h3 className="text-black-200 font-semibold text-shadow shadow-black-200 font-handlee text-xl 2xl:text-[1.75rem] leading-5 2xl:leading-7 flex-1">
            Finance Landing page
          </h3>
          <div className="relative">
            <img
              className="absolute w-4 2xl:w-auto -top-3 2xl:-top-6 -left-3 2xl:-left-5"
              src={cursorGreen}
              alt="cursor icon"
            />
            <button className="flex py-[0.41rem] 2xl:py-[0.55944rem] pr-4 2xl:pr-[1.3985rem] pl-[0.82rem] 2xl:pl-[1.11881rem] rounded-[0.10294rem_1.23506rem_1.23506rem_1.23506rem] 2xl:rounded-[0.13988rem_1.67825rem_1.67825rem_1.67825rem] border-[2.238px] border-solid border-green bg-lihgt-green shadow-[4.475px_4.475px_11.188px_0px_rgba(9,33,247,0.16)] text-white font-inter text-[0.82rem] 2xl:text-lg font-medium leading-5 2xl:leading-[1.678rem]">
              UI Design
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
