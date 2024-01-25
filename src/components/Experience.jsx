import arrowDownRight from '../assets/arrow-down-right.svg';

const Experience = () => {
    return (
        <section className='flex justify-between px-1 pb-36'>
            <div className='flex flex-col w-64 mt-20'>
                <h2 className='text-black-200 font-handlee text-[2rem] leading-normal font-normal bg-pink-100 w-max'>Work Experience</h2>
                <div className='inline-flex justify-end my-6 pr-4'><img src={arrowDownRight} alt="arrow" /></div>
                <p className='text-black-200 font-inter text-2xl font-normal leading-8'>Have been designing since my past 4 years</p>
            </div>
            <div className='border-x-2 border-black-100 w-[65%] mr-10 pt-[3.69rem] pb-[5.3rem]'>
                <div className='w-[113%] h-[2px] bg-black-100 -ml-[7.33%]'></div>
                <div className='flex flex-col gap-[2.31rem] pt-16 pb-[4.83rem] pl-[4.44rem] pr-[7.38rem]'>
                    <div className='flex gap-[2.312rem]'>
                        <div className='text-black-100 text-center font-handlee text-5xl font-semibold leading-[150%] tracking-[-0.066rem] py-2 px-[2.437rem] rounded-md border-2 border-yellow-300 bg-yellow-100'>
                            1
                        </div>
                        <div >
                            <h3 className='text-black-200 font-inter text-2xl font-normal leading-[140%] mb-[0.38rem]'>Design intern at
                                <span className='font-bold'> Google</span>
                            </h3>
                            <p className='font-inter text-black-200 text-lg font-normal leading-[140%]'>Worked on design system at Material 3 designs</p>
                            <p className='text-grey text-base font-medium leading-[140%] mt-[0.1875rem]'>20, April 2021</p>
                        </div>
                    </div>
                    <div className='flex gap-[2.31rem]'>
                        <div className='text-black-100 text-center font-handlee text-5xl font-semibold leading-[150%] tracking-[-0.066rem] py-2 px-[2.0921rem] rounded-md border-2 border-blue-300 bg-blue-200'>
                            2
                        </div>
                        <div >
                            <h3 className='text-black-200 font-inter text-2xl font-normal leading-[140%] mb-[0.38rem]'>Sr. UI/UX Designer at
                                <span className='font-bold'> Microsoft</span>
                            </h3>
                            <p className='font-inter text-black-200 text-lg font-normal leading-[140%]'>Worked on design system at Material 3 designs</p>
                            <p className='text-grey text-base font-medium leading-[140%] mt-[0.1875rem]'>20, April 2022</p>
                        </div>
                    </div>
                    <div className='flex gap-[2.31rem]'>
                        <div className='text-black-100 text-center font-handlee text-5xl font-semibold leading-[150%] tracking-[-0.066rem] py-2 px-[2.0921rem] rounded-md border-2 border-pink-300 bg-pink-100'>
                            3
                        </div>
                        <div >
                            <h3 className='text-black-200 font-inter text-2xl font-normal leading-[140%] mb-[0.38rem]'>Software Engineer at
                                <span className='font-bold'> SASS Startup</span>
                            </h3>
                            <p className='font-inter text-black-200 text-lg font-normal leading-[140%]'>Worked on design system at Material 3 designs</p>
                            <p className='text-grey text-base font-medium leading-[140%] mt-[0.1875rem]'>20, April 2023</p>
                        </div>
                    </div>
                </div>
                <div className='w-[113%] h-[2px] bg-black-100 -ml-[7.33%]'></div>
            </div>
            <h1 className='drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]'>text Bezveze</h1>
        </section>
    )
};

export default Experience;