import { Button } from '@mui/material'
import Image from 'next/image'
import React from 'react'

function BottomHeaderComponent() {
    return (
        <div className='flex flex-col lg:flex-row items-center justify-between w-full mt-16 lg:px-10'>


            <div id='HEADER___IMAGE' className='h-full basis-full lg:basis-1/2 px-4'>
                <Image src="/header___image.jpg" width={1500} height={1800} alt='header--image' className='object-cover h-96' />
            </div>

            <div id="HEADER__CONTENT" className='basis-full lg:basis-1/2 px-10 lg:px-6  flex items-center flex-col'>
                <h1 className='text-5xl font-black text-center my-6 text-slate-900 leading-[4rem] mx-auto'>Create a New Generation website for your Business</h1>
                <p className=' text-xl text-zinc-600 leading-[3rem] text-justify'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere recusandae amet liberoempore. Saepe, repellendus est ipsa veniam dolorem illum harum quasi.
                    adipisicing elit. Facere recusandae amet liberoempore. Saepe, repellendus est ipsa ve adipisicing elit. Facere recusandae amet liberoempore. Saepe, repellendus est
                </p>
                <div id="HEADER___BUTTONS" className='flex items-center justify-center lg:justify-start lg:self-start mt-6 gap-4'>
                    <Button variant='contained' size='large' color='success'>Contact Us</Button>
                    <Button variant='contained' size='large' color='primary'>See our Works</Button>
                </div>
            </div>


        </div>
    )
}

export default BottomHeaderComponent