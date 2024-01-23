import ilustration from '../assets/mask-group.svg';
import device from '../assets/device.svg';
import arrow from '../assets/arrow.svg';

const Header = () => {
    return (
        <header className='flex flex-col pt-16 gap-6'>
            <div className='flex p-[0.24944rem_2.11925rem_0.30131rem_0.363rem] items-center'>
                <div className='flex items-center gap-4 -rotate-[5.2deg]'>
                    <div className='relative'>
                        <img src={ilustration} alt="ilustration" />
                        <img className='absolute top-[78px] left-[87px]' src={device} alt="device" />
                    </div>
                    <div>
                        <img src={arrow} alt="arrow" />
                    </div>
                    <div className='h-16'>
                        <strong className='font-handlee font-extrabold text-[2rem] text-black-200 bg-pink-100'>znisa</strong>
                    </div>
                </div>
            </div>
            <div className='flex justify-between gap-52 px-2'>
                <div className='w-1/2'>
                    <h1 className='font-inter font-semibold text-[4rem] text-black-200 leading-normal'>I <span className='bg-gradient-to-t from-pink-100 from-30% to-transparent to-30% bg-[center_-6px]'>design</span> top <br /> notch websites</h1>
                </div>
                <div className='w-1/2 pt-2'>
                    <p className='font-inter font-normal text-2xl text-black-200 leading-8 text-justify'>I'll design your website and will develop to land it on internet using No-code.</p>
                    <button className='bg-black-200 shadow-[3px_3px_12px_0px_rgba(0,0,0,0.12)] py-[1.125rem] px-[3.625rem] mt-8 text-white font-inter text-2xl font-semibold hover:shadow-[0px_0px_0px_4px_rgba(255,_201,_240,_1)] hover:text-pink-100'>Hire me</button>
                </div>
            </div>
        </header>
    )
};

export default Header;
