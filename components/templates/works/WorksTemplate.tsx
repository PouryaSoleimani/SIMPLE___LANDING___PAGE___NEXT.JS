import SingleWorkBoxComponent from '@/components/modules/workbox/SingleWorkBoxComponent'
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
        <div className='flex flex-col py-4 lg:py-10 w-full mt-16'>
            <h2 className='text-center text-xl text-zinc-600'>HOW IT WORK</h2>
            <h3 className='text-center my-2 text-4xl font-semibold tracking-wide'>Three Simple Step to Start Working Progress</h3>
            <div className='flex flex-col lg:flex-row items-center justify-center gap-0 lg:gap-x-4 mt-16'>
                {workBoxeData.map((item: SingleWorkType) => (
                    <SingleWorkBoxComponent {...item} />
                ))}
            </div>
        </div>
    )
}

export default WorksTemplate