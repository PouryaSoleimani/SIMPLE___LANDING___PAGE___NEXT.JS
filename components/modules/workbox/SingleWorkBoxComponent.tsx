import React from 'react'


interface SingleWorkBoxProps { id: number, title: string, desc: string }

const SingleWorkBoxComponent: React.FC<SingleWorkBoxProps> = ({ title, desc }) => {
    return (
        <div className='flex flex-col gap-y-6 mt- items-center justify-start content-start'>
            <h3 className='text-2xl tracking-tight'>{title}</h3>
            <p className='w-[60%] text-center text-lg text-zinc-600'>{desc}</p>
        </div>
    )
}

export default SingleWorkBoxComponent

