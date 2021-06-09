import React from 'react'

class ImageCard extends React.Component {

    constructor(props){
        super(props)
        this.state = { spans: 0 }
        this.imageRef = React.createRef()
    }

    componentDidMount(){
        this.imageRef.current.addEventListener('load', this.onImageLoaded)
    }
    
    onImageLoaded = () => {
        const height = this.imageRef.current.clientHeight
        this.setState({
            spans : Math.ceil(height / 10)
        })
    }

    render(){
        const {description, url} = this.props.image
        return (
        <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
            <img ref={this.imageRef} alt={description} src={url.regular}/>
        </div>
        )
    }
}

export default ImageCard