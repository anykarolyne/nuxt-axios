import axios from 'axios'

export async function init({store, redirect}) {
    try {
        const res = await axios.get('http://localhost:3000/travels')
        store.commit('init', res.data)
    } catch (error) {
        redirect('/error')
    }
}
