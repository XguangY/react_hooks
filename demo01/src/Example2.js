import React, { useState } from 'react'
// 就是React Hooks不能出现在条件判断语句中，因为它必须有完全一样的渲染顺序。
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