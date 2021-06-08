import React from 'react'
import CommentDetail from './CommentDetail'

const ApprovalCard = (props) => {
    return (
        <div className="ui cards">
            <div className="card">
                <div className="content">
                    <CommentDetail authorName = {props.authorName} timeOfComment = {props.timeOfComment} srcImage = {props.srcImage} />
                </div>
                <div className="extra content">
                    <div className="ui two buttons">
                        <div className="ui basic green button">Approve</div>
                        <div className="ui basic red button"> Decline</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApprovalCard