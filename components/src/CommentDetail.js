import React from 'react'

const CommentDetail = (props) => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={props.srcImage} />
            </a>
        <div className = "content">
            <a href="/" className="author">
                {props.authorName}
            </a>
        <div className="metadata">
            <span className="date">{props.timeOfComment}</span>
        </div>
        <div className="text">Looks Nice</div>
        </div>
        </div>
    )
}

export default CommentDetail