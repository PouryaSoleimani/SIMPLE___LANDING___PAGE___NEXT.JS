import React from 'react'


interface SingleWorkBoxProps { id: number, title: string, desc: string }

const SingleWorkBoxComponent: React.FC<SingleWorkBoxProps> = ({ title, desc }) => {
    return (
        <div>SingleWorkBoxComponent</div>
    )
}

export default SingleWorkBoxComponent

