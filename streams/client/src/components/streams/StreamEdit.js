import React from 'react'
import { connect } from 'react-redux'
import { getStreamById, editStreamById } from '../../actions'
import StreamForm from './StreamForm'

class StreamEdit extends React.Component{
    componentDidMount(){
        this.props.getStreamById(this.props.match.params.id)
    }
    onSubmit(formValues){
        // this.props.editStreamById(this.props.match.params.id, formValues)
        // console.log(formValues)
        console.log(this.props.editStreamById)
    }
    render() {
        if(!this.props.stream){
            return (
                <div>
                    Loading!
                </div>
            )
        }
        return (
        <div>
            <h3>Edit Stream</h3>
            <StreamForm 
            initialValues = {this.props.stream}
            onSubmit={this.onSubmit}
            />
        </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream : state.streams[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {getStreamById, editStreamById})(StreamEdit)