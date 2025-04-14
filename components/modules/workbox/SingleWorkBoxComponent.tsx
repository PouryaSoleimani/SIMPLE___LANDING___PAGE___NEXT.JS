import React from 'react'


interface SingleWorkBoxProps { id: number, title: string, desc: string }

const SingleWorkBoxComponent: React.FC<SingleWorkBoxProps> = ({ title, desc }) => {
    return (
        <div>
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
    )
}

export default SingleWorkBoxComponent

