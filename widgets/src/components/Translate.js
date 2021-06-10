import React, { useState } from 'react'
import Dropdown from './Dropdown'
import Convert from './Convert'

// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM

const options = [
    {
        label: "Afrikaans",
        value: 'af'
    },
    {
        label: "Arabic",
        value: 'ar'
    },
    {
        label: "Hindi",
        value: 'hi'
    }
]

const Translate = () => {
    const [language, setLanguage] = useState(options[0])
    const [text, setText] = useState("")
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)}></input>
                </div>
            </div>
            <Dropdown selected={language} setSelected={setLanguage} options = {options} labelText={'Select a Language'}/>
            <Convert language={language} text={text}/>
        </div>
    )
}

export default Translate