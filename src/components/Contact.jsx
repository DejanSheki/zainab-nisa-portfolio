import arrow from "../assets/arrow-down-right.svg";

const Contact = () => {
  return (
    <section>
      <div className="flex flex-col 2xl:flex-row gap-9 2xl:gap-52 pl-3 2xl:pl-14 pr-2 2xl:pr-10 mb-7 2xl:mb-36">
        <div className="flex flex-col gap-[1.2rem] 2xl:gap-6 w-4/5 2xl:w-1/4 pt-0 2xl:pt-[1.8rem]">
          <h2 className="text-black-200 text-shadow shadow-black-200 font-handlee text-xl 2xl:text-[2rem] font-semibold w-max bg-pink-100">
            Contact here
          </h2>
          <div className="inline-flex justify-start 2xl:justify-end pr-2">
            <img className="rotate-[50.7deg]" src={arrow} alt="arrow icon" />
          </div>
          <p className="text-black-200 font-inter text-base 2xl:text-2xl font-normal leading-[125%] 2xl:leading-[140%]">
            Have a project idea? just say me
            <strong className="text-black-200 font-inter font-bold leading-8">
              &nbsp;Hi
            </strong>
            .
          </p>
        </div>
        <div className="flex flex-col w-full 2xl:w-[70%]">
          <form>
            <div className="flex flex-col gap-[1.8rem] 2xl:gap-[3.75rem]">
              <div className="flex">
                <span className="text-black-200 font-handlee 2xl:text-shadow 2xl:shadow-black-200 font-semibold text-base 2xl:text-[2rem] border-l-2 border-black-100 bg-pink-100 pl-[1px] h-max leading-snug">
                  Name
                </span>
                <input
                  className="bg-transparent w-full border-b-2 border-black-100 pl-[1.8rem] mb-[2px] placeholder:text-black-200  font-handlee text-[0.93rem] 2xl:text-[1.75rem] font-normal leading-[140%] pt-[2px]"
                  type="text"
                  name="name"
                  placeholder="Zainab Nisa"
                />
              </div>
              <div className="flex">
                <span className="text-black-200 font-handlee 2xl:text-shadow 2xl:shadow-black-200 font-semibold text-base 2xl:text-[2rem] border-l-2 border-black-100 bg-yellow-100 pl-[1px] h-max leading-snug">
                  Your email
                </span>
                <input
                  className="bg-transparent flex-[1_1_0] w-full border-b-2 border-black-100 pl-[1.8rem] mb-[2px] placeholder:text-black-200 font-handlee text-[0.93rem] 2xl:text-[1.75rem] font-normal leading-[140%] pt-[2px]"
                  type="email"
                  name="email"
                  placeholder="zainab123@gmail.com"
                />
              </div>
              <div className="flex">
                <span className="text-black-200 font-handlee 2xl:text-shadow 2xl:shadow-black-200 font-semibold text-base 2xl:text-[2rem] border-l-2 border-black-100 bg-blue-200 pl-[1px] h-max leading-snug">
                  About Project
                </span>
                <textarea
                  className="bg-transparent w-full flex-[1_1_0] h-[2.7rem] border-b-2 border-black-100 pl-[1.8rem] mb-[2px] placeholder:text-black-200 font-handlee text-[0.93rem] 2xl:text-[1.75rem] font-normal leading-[140%] pt-[2px] resize-none hover:resize "
                  name="message"
                  id=""
                  cols="30"
                  rows="1"
                  placeholder="I want to discuss you about ......."
                ></textarea>
              </div>
              <div className="flex justify-start 2xl:justify-end">
                <button className="rotate-[1.287deg] py-2 2xl:py-5 px-5 2xl:px-[2.5625rem] bg-black-200 shadow-[3px_3px_12px_0px_rgba(0,0,0,0.12)] text-white font-inter text-2xl font-semibold leading-[2.1rem]">
                  Send Here
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="h-[3px] bg-black-100 min-w-[1440px] relative -left-[7.8175rem]"></div>
    </section>
  );
};

export default Contact;
