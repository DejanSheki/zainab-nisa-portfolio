import arrowwDown from '../assets/arrow-down.svg';
import pen from '../assets/pen.svg';
import eye from '../assets/eye.svg';
import rhombus from '../assets/rhombus.svg';

const Services = () => {
    return (
        <section className='pb-36'>
            <div className='pt-[6.875rem] pl-14'>
                <h2 className='font-handlee text-black-200 leading-normal font-semibold text-[2rem] w-max bg-pink-100'>What I do?</h2>
                <img className='mt-[0.88rem]' src={arrowwDown} alt="arrow" />
            </div>
            <div className='flex mt-3'>
                <div className='flex flex-col items-start gap-9 w-[23.6rem] h-[28.25rem] -rotate-[4deg] rounded-lg bg-yellow-100 border-yellow-300 border-solid border-[5px] shadow-[5px_5px_20px_0px_rgba(255,230,140,0.13)] px-14 pt-16 justify-center -translate-x-3'>
                    <img className='w-[3.08rem] h-[3.43rem]' src={pen} alt="pen" />
                    <h3 className='text-black-100 font-inter text-4xl font-medium leading-normal'>User Research Design</h3>
                </div>
                <div className='flex flex-col items-start gap-9  w-[23.6rem] h-[28.25rem] rotate-[5.5deg] rounded-lg bg-blue-200 border-blue-300 border-solid border-[5px] shadow-[5px_5px_20px_0px_rgba(157,220,255,0.15)] pl-12 pr-16 justify-center translate-x-6 translate-y-1'>
                    <img className='w-[3.79rem] h-[2.86rem]' src={eye} alt="eye" />
                    <h3 className='text-black-100 font-inter font-medium text-4xl leading-normal'>UI & Product Design</h3>
                </div>
                <div className='flex flex-col items-start justify-center gap-9 w-[23.6rem] h-[28.25rem] -rotate-[5deg] rounded-lg bg-pink-100 border-pink-300 border-solid border-[5px] shadow-[5px_5px_20px_0px_rgba(255,201,240,0.13)] px-14 translate-x-6 translate-y-1'>
                    <img className='w-[3.375rem] h-[3.375rem]' src={rhombus} alt="rhombus" />
                    <h3 className='font-inter text-black-100 text-4xl font-medium leading-normal'>No-code Development</h3>
                </div>
            </div>
        </section>
    )
}

export default Services;