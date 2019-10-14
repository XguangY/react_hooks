// useReducer 使用
import React, { useReducer } from 'react';

function useReducerDemo() {
    const [count, dispatch] = useReducer((state, action) => {
        switch (action) {
            case 'add':
                return ++state
            case 'del':
                return --state
            default:
                return state
        }
    }, 0)
    return (
        <div>
            <div>点击了{count} 次</div>
            <button onClick={() => dispatch('add')}>add</button>
            <button onClick={() => dispatch('del')}>del</button>
        </div>
    )
}

export default useReducerDemo