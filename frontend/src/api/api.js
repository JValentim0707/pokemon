import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.tvmaze.com/search/shows?q=girls'
})


export default api
