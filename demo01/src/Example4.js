import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

function Index() {
    useEffect(() => {
        console.log(`index 来了`)
        return () => {
            console.log(`index 走了`)
        }
    }, []) 
    return (
        <div>
            这是首页
        </div>
    )
}

function List() {
    useEffect(() => {
        console.log(`list 来了`)
        // react hooks useEffect 实现 componentWillUnmount 解绑  ，第二个数组参数辅助实现
        return () => {
            console.log(`list 走了`)
        }
    }, []) 
    return (
        <div>
            这是列表
        </div>
    )
}

function Example4() {
    let [count, setCount] = useState(0)
    // useEffect(() => {
    //     console.log(`useEffect => ${count}`)
    // }) 
    return (
        <div>
            <div>click Number {count}</div>
            <button onClick={() => {setCount(++count)}}>CLICK</button>

            <Router>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/list/">列表</Link></li>
                </ul>
                <Route path="/" exact component={Index}></Route>
                <Route path="/list/" component={List}></Route>
            </Router>
        </div>
    )
}

export default Example4;