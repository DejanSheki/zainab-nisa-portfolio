import arrowwDown from '../assets/arrow-down.svg';
import pen from '../assets/pen.svg';
import eye from '../assets/eye.svg';
import rhombus from '../assets/rhombus.svg';

const Services = () => {
    return (
        <section className='mb-36'>
            <div className='pt-[6.875rem] pl-14'>
                <h2 className='font-handlee text-black-200 text-shadow shadow-black-200 leading-normal font-semibold text-[2rem] w-max bg-pink-100'>What I do?</h2>
                <img className='mt-[0.88rem]' src={arrowwDown} alt="arrow" />
            </div>
            <div className='flex mt-3'>
                <div className='flex flex-col items-start gap-9 relative w-[23.6rem] h-[28.25rem] -rotate-[4deg] rounded-lg bg-yellow-100 border-yellow-300 border-solid border-[5px] shadow-[5px_5px_20px_0px_rgba(255,230,140,0.13)] px-14 pt-16 justify-center -translate-x-3 before:content-["Pen/Paper"] before:bg-blue-200 before:text-black-200 before:font-handlee before:text-[2rem] before:leading-normal before:font-semibold before:pr-[3px] before:absolute before:top-20 before:-right-8 before:rotate-[4.1deg]'>
                    <img className='w-[3.08rem] h-[3.43rem]' src={pen} alt="pen" />
                    <h3 className='text-black-100 font-inter text-4xl font-medium leading-normal'>User Research Design</h3>
                </div>
                <div className='flex flex-col items-start gap-9 relative  w-[23.6rem] h-[28.25rem] rotate-[5.5deg] rounded-lg bg-blue-200 border-blue-300 border-solid border-[5px] shadow-[5px_5px_20px_0px_rgba(157,220,255,0.15)] pl-12 pr-16 justify-center translate-x-6 translate-y-1 before:content-["Figma"] before:bg-pink-100 before:text-black-200 before:font-handlee before:text-[2rem] before:leading-normal before:font-semibold before:pr-[3px] before:absolute before:-top-6 before:right-[1.6rem] before:-rotate-[5.4deg]'>
                    <img className='w-[3.79rem] h-[2.86rem]' src={eye} alt="eye" />
                    <h3 className='text-black-100 font-inter font-medium text-4xl leading-normal'>UI & Product Design</h3>
                </div>
                <div className='flex flex-col items-start justify-center gap-9 relative w-[23.6rem] h-[28.25rem] -rotate-[5deg] rounded-lg bg-pink-100 border-pink-300 border-solid border-[5px] shadow-[5px_5px_20px_0px_rgba(255,201,240,0.13)] px-14 translate-x-16 translate-y-1 before:content-["Webflow"] before:bg-yellow-100 before:text-black-200 before:font-handlee before:text-[2rem] before:leading-normal before:font-semibold before:pr-[3px] before:absolute before:top-24 before:-right-8 before:rotate-[5.1deg]'>
                    <img className='w-[3.375rem] h-[3.375rem]' src={rhombus} alt="rhombus" />
                    <h3 className='font-inter text-black-100 text-4xl font-medium leading-normal'>No-code Development</h3>
                </div>
            </div>
        </section>
    );
};

export default Services;