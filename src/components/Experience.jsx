import arrowDownRight from "../assets/arrow-down-right.svg";

const Experience = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between px-3 pr-1 2xl:px-1 mb-[4.69rem] 2xl:mb-36">
      <div className="flex flex-col w-64 2xl:mt-20">
        <h2 className="text-black-200 font-handlee text-shadow shadow-black-200 text-xl md:text-2xl 2xl:text-[2rem] leading-normal font-semibold bg-pink-100 w-max">
          Work Experience
        </h2>
        <div className="inline-flex justify-start 2xl:justify-end my-4 2xl:my-6 pr-4">
          <img className="rotate-[50.7deg]" src={arrowDownRight} alt="arrow" />
        </div>
        <p className="text-black-200 font-inter text-base 2xl:text-2xl font-normal leading-[125%] 2xl:leading-[140%] w-4/5 2xl:w-full">
          Have been designing since my past 4 years
        </p>
      </div>
      <div className="md:border-x-2 md:border-black-100 w-full md:w-[65%] md:mr-10 md:pt-[3.69rem] md:pb-[5.3rem]">
        <div className="md:w-[113%] md:h-[2px] md:bg-black-100 md:-ml-[7.33%]"></div>
        <div className="flex flex-col gap-5 2xl:gap-[2.31rem] pt-8 2xl:pt-16 md:pb-6 2xl:pb-[4.83rem] md:pl-6 2xl:pl-[4.44rem] 2xl:pr-[7.38rem]">
          <div className="flex gap-3 2xl:gap-[2.312rem]">
            <div className="text-black-100 text-shadow-lg shadow-black-100 text-center font-handlee text-[1.9rem] 2xl:text-5xl font-semibold leading-[150%] 2xl:leading-[150%] tracking-[-0.052rem] 2xl:tracking-[-0.066rem] py-[0.32rem] 2xl:py-2 px-[1.55rem] 2xl:px-[2.437rem] rounded-md border-2 border-yellow-300 bg-yellow-100">
              1
            </div>
            <div>
              <h3 className="text-black-200 font-inter text-base 2xl:text-2xl font-normal leading-[140%] 2xl:leading-[140%] mb-[0.38rem]">
                Design intern at
                <span className="font-bold"> Google</span>
              </h3>
              <p className="font-inter text-black-200 text-[0.69rem] 2xl:text-lg font-normal leading-[140%] 2xl:leading-[140%]">
                Worked on design system at Material 3 designs
              </p>
              <p className="text-grey text-[0.6rem] 2xl:text-base font-medium leading-[140%] mt-[0.1875rem]">
                20, April 2021
              </p>
            </div>
          </div>
          <div className="flex gap-3 2xl:gap-[2.312rem]">
            <div className="text-black-100 text-shadow-lg shadow-black-100 text-center font-handlee text-[1.9rem] 2xl:text-5xl font-semibold leading-[150%] 2xl:leading-[150%] tracking-[-0.041rem] 2xl:tracking-[-0.066rem] py-[0.32rem] 2xl:py-2 px-[1.32rem] 2xl:px-[2.0921rem] rounded-md border-2 border-blue-300 bg-blue-200">
              2
            </div>
            <div>
              <h3 className="text-black-200 font-inter text-base 2xl:text-2xl font-normal leading-[140%] mb-[0.38rem]">
                Sr. UI/UX Designer at
                <span className="font-bold"> Microsoft</span>
              </h3>
              <p className="font-inter text-black-200 text-[0.69rem] 2xl:text-lg font-normal leading-[140%] 2xl:leading-[140%]">
                Worked on design system at Material 3 designs
              </p>
              <p className="text-grey text-[0.6rem] 2xl:text-base font-medium leading-[140%] mt-[0.1875rem]">
                20, April 2022
              </p>
            </div>
          </div>
          <div className="flex gap-3 2xl:gap-[2.312rem]">
            <div className="text-black-100 text-center text-shadow-lg shadow-black-100 font-handlee text-[1.9rem] 2xl:text-5xl font-semibold leading-[150%] 2xl:leading-[150%] tracking-[-0.041rem] 2xl:tracking-[-0.066rem] py-[0.32rem] 2xl:py-2 px-[1.356rem] 2xl:px-[2.1621rem] rounded-md border-2 border-pink-300 bg-pink-100">
              3
            </div>
            <div>
              <h3 className="text-black-200 font-inter text-base 2xl:text-2xl font-normal leading-[140%] mb-[0.38rem]">
                Software Engineer at
                <span className="font-bold"> SASS Startup</span>
              </h3>
              <p className="font-inter text-black-200 text-[0.69rem] 2xl:text-lg font-normal leading-[140%] 2xl:leading-[140%]">
                Worked on design system at Material 3 designs
              </p>
              <p className="text-grey text-[0.6rem] 2xl:text-base font-medium leading-[140%] mt-[0.1875rem]">
                20, April 2023
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-[113%] md:h-[2px] md:bg-black-100 md:-ml-[7.33%]"></div>
      </div>
    </section>
  );
};

export default Experience;
