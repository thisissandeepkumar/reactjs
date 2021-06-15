import React from 'react'
import flv from 'flv.js'
import { connect } from 'react-redux'
import { getStreamById } from '../../actions'

class StreamShow extends React.Component{
    constructor(props){
        super(props)
        this.videoRef = React.createRef()
    }
    async componentDidMount(){
        await this.props.getStreamById(this.props.match.params.id)
        this.buildPlayer()
    }
    componentDidUpdate(){
        this.buildPlayer()
    }
    componentWillUnmount(){
        this.player.destroy()
    }
    buildPlayer(){
        if(this.player || !this.props.stream){
            return;
        }
        const {id} = this.props.match.params
        this.player = flv.createPlayer({
            type: 'flv',
            url: `http://localhost:8000/live/${id}.flv`
        })
        this.player.attachMediaElement(this.videoRef.current)
        this.player.load()
        this.buildPlayer()
    }
    render(){
        return (
        <div>
            <video ref={this.videoRef} style={{width:'100%'}} controls/>
            <h1>{this.props.stream.title}</h1>
            <h3>{this.props.stream.description}</h3>
        </div>
    )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {stream: state.streams[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {getStreamById})(StreamShow)