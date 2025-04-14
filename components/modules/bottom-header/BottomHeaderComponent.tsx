import { Button } from '@mui/material'
import Image from 'next/image'
import React from 'react'

function BottomHeaderComponent() {
    return (
        <div className='flex flex-col sm:flex-row items-center justify-between w-full mt-16 lg:px-10'>

            <div id='HEADER___IMAGE' className='w-full basis-1/2'>
                <Image src="/header___image.jpg" width={1500} height={1500} alt='header--image' className='h-auto' />
            </div>

            <div id="HEADER__CONTENT" className='basis-1/2 px-10'>
                <h2 className='text-5xl font-black text-center my-6 text-slate-900 leading-[4rem] mx-auto'>Create a New Generation website for your Business</h2>
                <p className=' text-xl text-zinc-600 leading-[3rem] text-justify'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere recusandae amet libero placeat ipsa, soluta laboriosa veniam tempore. Saepe, rerum, obcaecati vel quae architecto error sed, repellendus est ipsa veniam dolorem illum harum quasi.
                </p>
                <div id="HEADER___BUTTONS" className='flex items-center justify-center md:justify-start mt-6 gap-4'>
                    <Button variant='contained' size='large' color='success'>Contact Us</Button>
                    <Button variant='contained' size='large' color='primary'>See our Works</Button>
                </div>
            </div>



        </div>
    )
}

export default BottomHeaderComponent