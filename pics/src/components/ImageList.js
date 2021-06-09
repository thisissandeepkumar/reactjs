import './ImageList.css'
import React from 'react'
import ImageCard from './ImageCard'

const ImageList = (props) => {
    const images = props.images.map(({id, urls}) => {
        return <ImageCard image = {{description: "Image", url: urls}} />
    })
    return (
        <div className="image-list">{images}</div>
    )
}

export default ImageList
