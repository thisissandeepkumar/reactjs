import React from 'react'
import ReactDOM from 'react-dom'


class App extends React.Component {
    
    constructor(props){
        super(props)

        this.state = {
            lat : null,
            errorMessage: ''
        }
        window.navigator.geolocation.getCurrentPosition(
        (position) => {
            this.setState({
                lat : position.coords.latitude
            })
        },
        (err) => {
            console.log(err)
            this.setState({
                errorMessage : err.message
            })
        }
        );
        
    }

    render(){
            if(this.state.lat == null && this.state.errorMessage === ''){
                return (<div>Loading!</div>)
            }
            else if(this.state.lat == null && !this.state.errorMessage === ''){
                return (<div>Error : {this.state.errorMessage}</div>)
            }
            else{
                return (<div>Latitude is {this.state.lat}</div>)
            }
        
        
    }
    
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)