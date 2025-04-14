import React from 'react'


interface SingleWorkBoxProps { id: number, title: string, desc: string }

const SingleWorkBoxComponent: React.FC<SingleWorkBoxProps> = ({ title, desc }) => {
    return (
        <div className='flex flex-col items-center justify-start content-start'>
            <h3>{title}</h3>
            <p className='w-[60%] text-center text-lg text-zinc-600'>{desc}</p>
        </div>
    )
}

export default SingleWorkBoxComponent

