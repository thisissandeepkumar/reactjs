import React from 'react'
import SearchBar from './SearchBar'
import unsplash from '../api/unsplash'
import ImageList from './ImageList'

class App extends React.Component {

    state = {
        images : []
    }

    onFormSubmit = async (value) => {
        const response = await unsplash.get('https://api.unsplash.com/search/photos', {
            params: {
                query: value
            }
        })
        this.setState({images: response.data.results})
    }

    render(){
    return (
        <div className="ui container" style={{marginTop: '10px'}}>
            <SearchBar onFormSubmit= {this.onFormSubmit}/>
            <ImageList images={this.state.images} />
        </div>
    );
    }
}

export default App