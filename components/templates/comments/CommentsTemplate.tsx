import React from 'react'
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoGameControllerA } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoGameControllerB } from "react-icons/io";
import { IoLogoFlickr } from "react-icons/io";
import { IoLogoFreebsdDevil } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoBitcoin } from "react-icons/io";
import { IoLogoCodepen } from "react-icons/io";
import { IoLogoChrome } from "react-icons/io";
import { IoLogoAngular } from "react-icons/io";
import CommentBoxComponent from '@/components/modules/comment-box/CommentBoxComponent'
import { Box } from "@mui/material";

const commentsData = [
    { id: 1, body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio fugiat nulla", userName: "Alfred Carlos", userImage: "/user-1.jpg" },
    { id: 2, body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio fugiat nulla", userName: "Alfred Carlos", userImage: "/user-2.jpg" },
    { id: 3, body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio fugiat nulla", userName: "Alfred Carlos", userImage: "/user-3.jpg" }
]

type SingleCommentBoxType = { id: number, body: string, userName: string, userImage: string }

function CommentsTemplate() {
    return (

        <Box component="div" className='bg-blue-600 rounded-2xl px-6 py-16 z-10 ' >
            <h2 className='text-center font-bold text-4xl text-white tracking-wide'>You're In a good hand</h2>
            <p className='text-center lg:w-1/3 mx-auto mt-6 text-white'>There are many variations of passages of Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, accusamus.</p>

            <div className='flex flex-col md:flex-row gap-y-6 lg:gap-0 items-center justify-around mt-16'>
                {commentsData.map((item: SingleCommentBoxType) => (
                    <CommentBoxComponent key={item.id} {...item} />
                ))}
            </div>


            <Box component="div" className='flex items-center justify-around mt-20 flex-wrap' >
                <IoLogoAngular className="w-20 h-20 shrink-0 mx-3 text-white" />
                <IoLogoChrome className="w-20 h-20 shrink-0 mx-3 text-white" />
                <IoLogoCodepen className="w-20 h-20 shrink-0 mx-3 text-white" />
                <IoLogoBitcoin className="w-20 h-20 shrink-0 mx-3 text-white" />
                <IoLogoFacebook className="w-20 h-20 shrink-0 mx-3 text-white" />
                <IoLogoCss3 className="w-20 h-20 shrink-0 mx-3 text-white" />
                <IoLogoFreebsdDevil className="w-20 h-20 shrink-0 mx-3 text-white" />
                <IoLogoFlickr className="w-20 h-20 shrink-0 mx-3 text-white" />
                <IoLogoGameControllerB className="w-20 h-20 shrink-0 mx-3 text-white" />
                <IoLogoGithub className="w-20 h-20 shrink-0 mx-3 text-white" />
                <IoLogoGameControllerA className="w-20 h-20 shrink-0 mx-3 text-white" />
                <IoLogoJavascript className="w-20 h-20 shrink-0 mx-3 text-white" />
            </Box>

        </Box>
    )
}

export default CommentsTemplate