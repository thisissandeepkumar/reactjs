import React, { useState } from 'react'

const Accordian = ({allItems}) => {
    const [activeIndex, setActiveIndex] = useState(null)
    const onTitleClick = (index) => {
        setActiveIndex(index)
    }
    const renderedItems = allItems.map((item, index) => {
        const activeIndexVar = index === activeIndex ? 'active' : ''
        return <div key={item.title}>
            <React.Fragment key={item.title}>
                <div className={`title ${activeIndexVar}`} onClick={() => onTitleClick(index)}>
                    <i className="dropdown icon"/>
                {item.title}
                </div>
                <div className={`content ${activeIndexVar}`}>
                    <p>
                        {item.description}
                    </p>
                </div>
            </React.Fragment>
        </div>
    })
    return (
        <div className="ui styled accordion">
        {renderedItems}
        </div>
    )
}

export default Accordian