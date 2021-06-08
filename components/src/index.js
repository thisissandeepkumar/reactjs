import React from 'react'
import ReactDOM from 'react-dom'
import ApprovalCard from './ApprovalCard'
import faker from 'faker'

const App = () => {
    return (
        <div className="ui component comments">
            <ApprovalCard authorName = {faker.name.firstName() + ' ' + faker.name.lastName()} timeOfComment = "Yesterday at 9:00 PM" srcImage = {faker.image.imageUrl()} />
            <ApprovalCard authorName = {faker.name.firstName() + ' ' + faker.name.lastName()} timeOfComment = "Today at 9:00 PM" srcImage = {faker.image.imageUrl()} />
            <ApprovalCard authorName = {faker.name.firstName() + ' ' + faker.name.lastName()} timeOfComment = "Yesterday at 9:00 PM" srcImage = {faker.image.imageUrl()} />
            <ApprovalCard authorName = {faker.name.firstName() + ' ' + faker.name.lastName()} timeOfComment = "Today at 9:00 PM" srcImage = {faker.image.imageUrl()} />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)