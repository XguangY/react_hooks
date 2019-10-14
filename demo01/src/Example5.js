// useContext 父子组件传值
import React, { useState, createContext, useContext } from 'react'

// 声明上下文函数，用于存储数据
const CountContext = createContext()

function Counter() {
    // 接收上下文数据
    const context = useContext(CountContext)
    return (
        <h2>
            {context}
        </h2>
    )
}

function Example5() {
    let [count, setCount] = useState(0)
    return (
        <div>
            <div>click Number {count}</div>
            <button onClick={() => {setCount(++count)}}>CLICK</button>
            {/* Provider:用来包裹整合组件，传递一个value属性，把context上下文注入到整个组件当中 */}
            <CountContext.Provider value={count}>
                <Counter/>
            </CountContext.Provider>
        </div>
    )
}

export default Example5;