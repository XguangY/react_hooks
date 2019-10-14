import React, {useContext} from 'react';

import { ColorContext, UPDATE_COLOR } from './color'

function Button() {
    const {dispatch} = useContext(ColorContext)
    return (
        <div>
            <button onClick={()=>{dispatch({type:UPDATE_COLOR,color:"red"})}}>红色</button>
            <button onClick={()=>{dispatch({type:UPDATE_COLOR,color:'blue'})}}>蓝色</button>
        </div>
    )
}

export default Button