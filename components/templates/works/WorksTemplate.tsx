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
        <div>
            <h2>HOW IT WORK</h2>
            <h3>Three Simple Step to Start Working Progress</h3>
            <div>

            </div>
        </div>
    )
}

export default WorksTemplate