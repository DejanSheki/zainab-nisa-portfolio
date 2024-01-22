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
                    <h1 className='font-inter font-semibold text-[4rem] text-black-200'>I <span>design</span> top <br /> notch websites</h1>
                </div>
                <div className='w-1/2'>
                    <p className='font-inter font-normal text-2xl text-black-200 leading-8'>I'll design your website and will develop to land it on internet using No-code.</p>
                    <button>Hire me</button>
                </div>
            </div>
        </header>
    )
};

export default Header;
