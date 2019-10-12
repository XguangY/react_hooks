import React, { useState } from 'react'

function Example() {
    let [age, setAge] = useState(3)
    let [name, setName] = useState('xu')
    let [work, setWork] = useState('前端工程师')
    return (
        <div>
            <div>年龄 {age}</div>
            <div>姓名 {name}</div>
            <div>职业 {work}</div>
        </div>
    )
}

export default Example