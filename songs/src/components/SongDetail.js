import React, {Component} from 'react'
import { connect } from 'react-redux'

class SongDetail extends Component {
    renderView(){
        if(this.props.song != null){
            return (
                <div>
                    {this.props.song.title}
                <div>
                    {this.props.song.duration}
                    </div>
                </div>
            )
        }
        return (
            <div>
                Select a Song!
            </div>
        )
    }
    render(){
        return (
            <div>
                {this.renderView()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {song:state.selectedSong}
} 

export default connect(mapStateToProps)(SongDetail)