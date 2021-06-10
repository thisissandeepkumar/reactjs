import React, { useState } from 'react'
import Accordian from './components/Accordian'
import Dropdown from './components/Dropdown'
import Translate from './components/Translate'
import Route from './components/Route'
import Search from './components/Search'
import Header from './components/Header'

const items = [
    {
        title: 'What is React?',
        description: 'React is an open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.'
    },
    {
        title: 'Why use React?',
        description: 'React has a great community'
    },
    {
        title: 'How do you use React?',
        description: 'Use it with Node.js'
    }
]

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'The Color Blue',
        value: 'blue'
    }
]

const App = () => {
    const [selected, setSelected] = useState(options[0])
    return (
        <div>
            <Header />
            <Route path='/'>
                <Accordian allItems={items}/>
            </Route>
            <Route path='/dropdown'>
                <Dropdown
            setSelected = {setSelected}
            selected = {selected}
            options = {options}/>
            </Route>
            <Route path='/translate'>
                <Translate />
            </Route>
            <Route path='/search'>
                <Search />
            </Route>
        </div>
    )
}

export default App