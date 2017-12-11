import axios from 'axios'

export const state = ()=>( {
    travels: []
})

export const mutations = {
    init(state, travels) {
        state.travels = travels
    },
    add(state, travels) {
        state.travels = [...state.travels, travel]
    },
    remove(state, travels) {
        state.travels = state.travels.filter(t => t.id != travel.id)
    },
    toggle(state, travels) {
        state.travels = state.travels.map(t =>
            t.id === travel.id
                ? travel
                : t
        )
    }
}

export const actions = {
    async add({commit}, {from, to, datefrom, dateto, price}) {
        const res = await axios.post('http://localhost:3000/travels',
            { from, to, datefrom, dateto, price, complete: false })

        commit('add', res.data)
    },

    async remove({commit}, travel) {
        const res = await axios.delete(`http://localhost:3000/travels/${travel.id}`)

        commit('remove', travel)
    },

    async toggle({commit}, travel) {
        const res = await axios.patch(`http://localhost:3000/travels/${travel.id}`,
            {
                complete: !travel.complete
            })

        commit('toggle', res.data)
    }
}
