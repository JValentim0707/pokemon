import axios from 'axios'

const getAll = async () => {
    const data = await axios.get('https://pokeapi.co/api/v2/type/grass')
    return data
}

export {
    getAll
}
