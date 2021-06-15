import React from 'react'
import { connect } from 'react-redux'
import {signIn, signOut} from '../actions'

class GoogleAuth extends React.Component{
    state = {
        isSignedIn: null
    }
    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '939989406039-94a5ujcs6ajn6bl0tlus7en572dhrign.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance()
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }
    onAuthChange = (isSignedIn) => {
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId())
        } else{
            this.props.signOut()
        }
    }
    onSignInClick = () => {
        this.auth.signIn()
    }
    onSignOutClick = () => {
        this.auth.signOut()
    }
    renderSignInStatus(){
        if(this.props.isSignedIn === null){
            return null
        } else if(this.props.isSignedIn){
            return (
                <button 
                onClick={() => this.onSignOutClick()}
                className="ui red google button">
                    <i className="google icon"/>
                    Sign Out
                </button>
            )
        } else{
            return (
                <button 
                onClick= {() => this.onSignInClick()}
                className="ui red google button">
                    <i className="google icon"/>
                    Sign In With Google
                </button>
            )
        }
    }
    render(){
        return (
            <div>
                {this.renderSignInStatus()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(
    mapStateToProps, 
    {signIn, signOut}
    )(GoogleAuth)