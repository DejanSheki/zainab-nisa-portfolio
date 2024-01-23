import arrowwDown from '../assets/arrow-down.svg';
import pen from '../assets/pen.svg';

const Services = () => {
    return (
        <section>
            <div className='pt-[6.875rem] pl-14'>
                <h2 className='font-handlee text-black-200 leading-normal font-semibold text-[2rem] w-max bg-pink-100'>What I do?</h2>
                <img className='mt-[0.88rem]' src={arrowwDown} alt="arrow" />
            </div>
            <div className='flex '>
                <div className='w-[23.6rem] h-[28.25rem] -rotate-[4deg] rounded-lg bg-yellow-100 border-yellow-300 border-solid border-[5px]'>
                    <img src={pen} alt="pen" />
                    <h3>User Research Design</h3>
                </div>
                <div className='w-[23.6rem] h-[28.25rem] rotate-[5.5deg] rounded-lg bg-blue-200 border-blue-300 border-solid border-[5px] translate-x-8'>
                    <img src={pen} alt="pen" />
                    <h3>User Research Design</h3>
                </div>
                <div className='w-[23.6rem] h-[28.25rem] -rotate-[5deg] rounded-lg bg-pink-100 border-pink-300 border-solid border-[5px] translate-x-14'>
                    <img src={pen} alt="pen" />
                    <h3>User Research Design</h3>
                </div>
            </div>
        </section>
    )
}

export default Services;