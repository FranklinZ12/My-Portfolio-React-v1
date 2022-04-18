
const CardSkills = ({img, name}) => {
    return (
        <div className='group relative pl-[35%] md:pl-[50%]'>
            <div className='w-full min-h-80 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-70 lg:aspect-none'>
                <img src={img} alt=''
                    className='w-10 h-10 object-center object-cover lg:w-12 lg:h-12'
                />
            </div>
            <div className='mt-2'>
                <h3 className='text-sm text-gray-200'>
                    {name}
                </h3>
            </div>
        </div>
    )
}

export default CardSkills