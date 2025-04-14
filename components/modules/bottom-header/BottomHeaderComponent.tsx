import Image from 'next/image'
import React from 'react'

function BottomHeaderComponent() {
    return (
        <div className='flex flex-col md:flex-row items-center justify-between w-full mt-16 lg:px-10'>
            <div id="HEADER__CONTENT" className='basis-1/2 px-10'>
                <h2 className='text-5xl font-black text-center my-6 text-slate-900  mx-auto'>Create a New Generation website for your Business</h2>
                <p className=' text-xl text-zinc-700 leading-[3rem] text-justify'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere recusandae amet libero placeat ipsa, soluta laboriosam aspernatur repudiandae voluptas non quidem numquam voluptates dolores labore deserunt aliquam assumenda magnam eum cumque vero veniam tempore. Saepe, rerum, obcaecati vel quae architecto error sed, repellendus est ipsa veniam dolorem illum harum quasi.
                </p>
            </div>
            <div id='HEADER___IMAGE' className='w-full basis-1/2'>
                <Image src="/header___image.jpg" width={1200} height={1200} alt='header--image' />
            </div>
        </div>
    )
}

export default BottomHeaderComponent