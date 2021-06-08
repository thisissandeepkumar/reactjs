import React from 'react'
import ReactDOM from 'react-dom'
import SeasonsDisplay from './SeasonsDisplay'
import Loader from './Loader'

class App extends React.Component {

    state = {
        lat: null,
        errorMessage: ''
    }

    componentDidMount(){
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
                return <Loader message="Loading!"/>
            }
            else if(this.state.lat == null && this.state.errorMessage !== ''){
                return (<div>Error : {this.state.errorMessage}</div>)
            }
            else{
                return (<SeasonsDisplay latitude={this.state.lat} />)
            }
        
        
    }
    
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)