import arrowDownRight from '../assets/arrow-down-right.svg';

const Experience = () => {
    return (
        <section className='flex justify-between px-1'>
            <div className='flex flex-col w-64 mt-20'>
                <h2 className='text-black-200 font-handlee text-[2rem] leading-normal font-semibold bg-pink-100 w-max'>Work Experience</h2>
                <div className='inline-flex justify-end my-6 pr-4'><img src={arrowDownRight} alt="arrow" /></div>
                <p className='text-black-200 font-inter text-2xl font-normal leading-8'>Have been designing since my past 4 years</p>
            </div>
            <div className='border-x-2 border-black-100 w-[65%] mr-10 py-[3.69rem]'>
                <div className='w-[113%] h-[2px] bg-black-100 -ml-[3.51rem]'></div>
                <div className='flex'>
                    <div className='p-9'>1</div>
                    <div >
                        <h3>Design intern at Google</h3>
                        <p>Worked on design system at Material 3 designs</p>
                        <p>20, April 2021</p>
                    </div>
                </div>
                <div className='flex'>
                    <div className='p-9'>2</div>
                    <div >
                        <h3>Design intern at Google</h3>
                        <p>Worked on design system at Material 3 designs</p>
                        <p>20, April 2021</p>
                    </div>
                </div>
                <div className='flex'>
                    <div className='p-9'>3</div>
                    <div >
                        <h3>Design intern at Google</h3>
                        <p>Worked on design system at Material 3 designs</p>
                        <p>20, April 2021</p>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Experience;