import React, { useState, useRef } from 'react'

const Dropdown = ({options, selected, setSelected, labelText}) => {
    const [isOpen, setOpen] = useState(false)
    const ref = useRef()
    // useEffect(() => {
    //     document.body.addEventListener('click', () => {
    //         setOpen(false)
    //     })
    // }, [])
    const renderedOptions = options.map((option) => {
        if(option===selected){
            return null
        }
        return (
            <div 
            onClick={() => {
                setSelected(option)
            }}
            key={option.value} className="item">
                {option.label}
            </div>
        )
    })
    
    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">
                    {labelText}
                </label>
                <div onClick={() => {setOpen(!isOpen)}} className={`ui selection dropdown ${ isOpen? 'visible active' : ''}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${isOpen? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown