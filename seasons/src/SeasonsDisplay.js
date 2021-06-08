import './SeasonsDisplay.css'
import React from 'react'

const seasonConfig = {
    summer : {
        text: 'Let\'s hit the Beach!',
        icon: 'sun'
    },
    winter: {
        text: 'Burr it is cold!',
        icon: 'snowflake'
    }
}

const getSeason = (lat) => {
    const currentMonth = new Date().getMonth()
    if(currentMonth >= 3 && currentMonth <= 8 ){
        if(lat > 0){
            return 'summer'
        } else{
            return 'winter'
        }
    } else {
        if(lat > 0){
            return 'winter'
        } else{
            return 'summer'
        }
    }
}

const SeasonsDisplay = (props) => {
    const currentSeason = getSeason(props.latitude)
    const finalSeasonConfig = seasonConfig[currentSeason]
    return (
        <div className={`season-display ${currentSeason}`}>
        <i className={`icon-top-left massive ${finalSeasonConfig.icon} icon`} />
        <h1>{finalSeasonConfig.text}</h1>
        <i className={`icon-bottom-right massive ${finalSeasonConfig.icon} icon`} />
        </div>
    )
}

export default SeasonsDisplay;