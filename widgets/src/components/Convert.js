import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Convert = ({ language, text}) => {
    const [translatedText, setTranslatedText] = useState('')
    useEffect(() => {
        const transalate = async () => {
            const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', 
            {}, //body
            {
                params: {
                    q: text,
                    target:language.value,
                    format:'text',
                    source: 'en',
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
            }
            )
            setTranslatedText(data.data.translations[0].translatedText)
        }
        if(text){
            transalate()
        } else{
            const timeoutID = setTimeout(() => {
            transalate()
        }, 500)
        return (() => {
            clearTimeout(timeoutID)
        })
        }
        
    }, [language, text])
    return (
        <div>
            <h1 className="ui header">Output</h1>
            <h4>{translatedText}</h4>
        </div>
    )
}

export default Convert