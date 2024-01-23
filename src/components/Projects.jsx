import arrowDownRight from '../assets/arrow-down-right.svg';

const Projects = () => {
    return (
        <section className='flex px-2'>
            <div className='flex flex-col w-1/5'>
                <h2 className='text-black-200 font-handlee text-[2rem] leading-normal font-semibold'>Featured Projects</h2>
                <div className='inline-flex justify-end'><img src={arrowDownRight} alt="arrow" /></div>
                <p className='text-black-200 font-inter text-2xl font-normal leading-8'>Have designed more than 20 projects</p>
            </div>
            <div className='w-4/5'></div>
        </section>
    )
};

export default Projects;