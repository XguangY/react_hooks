import React, { useState, useMemo } from 'react';

// useMemo主要用来解决使用React hooks产生的无用渲染的性能问题。

function Example8() {
    const [xiaohong, setXiaohong] = useState('小红')
    const [xiaoxu, setXiaoxu] = useState('小徐')
    return (
        <div>
            <button onClick={() => (setXiaohong(new Date().getTime()))}>小红</button>
            <button onClick={() => (setXiaoxu(new Date().getTime() + '小徐来了'))}>小徐</button>
            <ChildComponent name={xiaohong}>
                {xiaoxu}
            </ChildComponent>
        </div>
    )
}

function ChildComponent({name, children}) {
    function ChangeXiaohong(val) {
        console.log('小红来了，来了')
        return val + 'xiaohong来了'
    }
    const actionXiaohong = useMemo(() => ChangeXiaohong(name), [name])
    return (
        <div>
            <div>{actionXiaohong}</div>
            <div>{children}</div>
        </div>
    )
}

export default Example8