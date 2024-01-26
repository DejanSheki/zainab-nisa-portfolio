import vector from '../assets/vector.svg';

const Footer = () => {
    return (
        <footer className="flex justify-between items-start pt-[5.75rem] pb-10 pl-[2.37rem]">
            <div className='flex justify-center items-center gap-4'>
                <img className='w-12' src={vector} alt="icon" />
                <strong className="font-handlee font-medium text-4xl leading-normal text-shadow shadow-black-200 text-black-200">
                    znisa
                </strong>
            </div>
            <div className='flex flex-col items-center gap-[2.437rem]'>
                <div className='flex gap-[4.81rem]'>
                    <a className='bg-black-200 shadow-[1px_1px_11.2px_0px_rgba(0,0,0,0.08)] text-white text-center text-shadow shadow-white font-handlee text-[2rem] font-normal leading-normal' href="#">Twitter X</a>
                    <a className='bg-black-200 shadow-[1px_1px_11.2px_0px_rgba(0,0,0,0.08)] text-white text-center text-shadow shadow-white font-handlee text-[2rem] font-normal leading-normal' href="#">LinkdIn</a>
                    <a className='bg-black-200 shadow-[1px_1px_11.2px_0px_rgba(0,0,0,0.08)] text-white text-center text-shadow shadow-white font-handlee text-[2rem] font-normal leading-normal' href="#">Instagram</a>
                </div>
                <p className='text-black-200 font-inter text-2xl font-normal leading-[2.1rem]'>Copyright. Portfolio 2024</p>
            </div>
        </footer>
    )
};

export default Footer;
