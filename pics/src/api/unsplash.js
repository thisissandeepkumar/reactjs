import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID DILcrP7LRXXchpxahVXrAt41A5BaWeNn9J3IOael5zg'
    }
})