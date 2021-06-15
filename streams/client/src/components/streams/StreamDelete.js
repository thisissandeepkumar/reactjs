import React from 'react'
import Modal from '../Modal'
import history from '../../history'

const StreamDelete = () => {
    const actions = (
        <React.Fragment>
        <button className="ui primary button">Delete</button>
        <button className="ui button">Cancel</button>
        </React.Fragment>
    )
    return (
        <div>
            <Modal 
                onDismiss={() => {history.push('/')}}
                title="Delete Stream"
                content="Are you sure you want to delete this Stream?"
                actions={actions}
            />
        </div>
    )
}

export default StreamDelete