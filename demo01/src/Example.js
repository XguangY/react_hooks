// import React, { Component } from 'react'
// class Example extends Component {
//     constructor(props) {
//         super(props)
//         this.state = { count: 0 }
//     }
//     render() { 
//         return ( 
//             <div>
//                 <div>click number {this.state.count}</div>
//                 <button onClick={this.addCount.bind(this)}>click</button>
//             </div>
//          )
//     }
//     addCount() {
//         this.setState(
//             {count:this.state.count + 1}
//         )
//     }
// }

// 使用hooks实现
import React, { useState } from 'react';

function Example() {
    let [count, setCount] = useState(0)
    return (
        <div>
            <div>click Number {count}</div>
            <button onClick={() => {setCount(++count)}}>CLICK</button>
        </div>
    )
}

export default Example