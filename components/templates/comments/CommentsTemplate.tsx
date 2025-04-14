import CommentBoxComponent from '@/components/modules/comment-box/CommentBoxComponent'
import React from 'react'

const commentsData = [
    { id: 1, body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio fugiat nulla", userName: "Alfred Carlos", userImage: "/user-1.jpg" },
    { id: 2, body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio fugiat nulla", userName: "Alfred Carlos", userImage: "/user-2.jpg" },
    { id: 3, body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio fugiat nulla", userName: "Alfred Carlos", userImage: "/user-3.jpg" }
]

type SingleCommentBoxType = { id: number, body: string, userName: string, userImage: string }

function CommentsTemplate() {
    return (
        <div className='h-[40rem] bg-blue-600 rounded-2xl px-6 py-16'>
            <h2 className='text-center font-bold text-4xl text-white tracking-wide'>You're In a good hand</h2>
            <p className='text-center w-1/3 mx-auto mt-6 text-white'>There are many variations of passages of Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, accusamus.</p>
            <div className='flex items-center justify-around mt-16'>
                {commentsData.map((item: SingleCommentBoxType) => (
                    <CommentBoxComponent {...item} />
                ))}
            </div>
        </div>
    )
}

export default CommentsTemplate