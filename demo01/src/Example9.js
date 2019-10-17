// import React, { useRef } from 'react';

// function Example9() {
//     const inputEL = useRef(null)
//     const ClickBtn = () => {
//         inputEL.current.value = 'xiaoxu'
//         console.log(inputEL)
//     }
//     return (
//         <>
//             <input ref={inputEL} type="text"></input>
//             <button onClick={ClickBtn}>点击</button>
//         </>
//     )
// }

// export default Example9
import React, { useRef ,useState,useEffect } from 'react';
function Example9(){
    const inputEl = useRef(null)
    const onButtonClick=()=>{ 
        inputEl.current.value="Hello ,useRef"
        console.log(inputEl)
    }
    //-----------关键代码--------start
    const [text, setText] = useState('jspang')
    const textRef = useRef()

    useEffect(()=>{
        textRef.current = text;
        console.log('textRef.current:', textRef.current)
    })
    //----------关键代码--------------end
    return (
        <>
            {/*保存input的ref到inputEl */}
            <input ref={inputEl} type="text"/>
            <button onClick = {onButtonClick}>在input上展示文字</button>
            <br/>
            <br/>
            <input value={text} onChange={(e)=>{setText(e.target.value)}} />
        </>
    )
}

export default Example9