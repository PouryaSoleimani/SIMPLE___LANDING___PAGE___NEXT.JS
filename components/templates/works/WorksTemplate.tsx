import SingleWorkBoxComponent from '@/components/modules/workbox/SingleWorkBoxComponent'
import Image from 'next/image'
import React from 'react'



//  COMPONENT
function WorksTemplate() {
    const workBoxeData = [
        { id: 1, title: "Research Project", desc: "There are many variations of passages of lorem ipsum available" },
        { id: 2, title: "Targeting", desc: "There are many variations of passages of lorem ipsum available" },
        { id: 3, title: "Result", desc: "There are many variations of passages of lorem ipsum available" },
    ]
    type SingleWorkType = { id: number, title: string, desc: string }


    // RETURN
    return (
        <div className='flex flex-col py-4 lg:py-10 w-full my-16 overflow-x-hidden'>
            <h2 className='text-center text-xl text-zinc-600'>HOW IT WORK</h2>
            <h3 className='text-center my-2 text-4xl font-semibold tracking-wide'>Three Simple Step to Start Working Progress</h3>
            <div className='flex flex-col lg:flex-row items-center justify-center gap-0 gap-y-10 lg:gap-y-0 lg:gap-x-4 mt-16'>
                {workBoxeData.map((item: SingleWorkType) => (
                    <SingleWorkBoxComponent key={item.id} {...item} />
                ))}
            </div>
            <div className='flex items-center justify-center mt-4'>
                <Image src="/work-4.jpg" width={1024} height={968} alt='work-image' className='w-auto h-auto' />
            </div>
        </div>
    )
}

export default WorksTemplate