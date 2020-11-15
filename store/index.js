// import axios from "axios";


export const state = () => ({
    comics: [],
    authenticated: false,
})

export const actions = {
    fetchComics: async function (context){
        console.log('fetchComics')
        console.log('process.env.baseAPI', process.env.baseAPI)
        const res = await this.$axios.get(`${process.env.baseAPI}/comics/`);
        context.commit('setComics',{comics: res.data || []})
    }
}

export const mutations = {
    setComics: (state, {comics}) => {
        console.log('state.comics.length', state.comics.length)
        console.log('comics.length', comics.length)
        state.comics = comics
        console.log('state.comics.length', state.comics.length)
    }
}

export const getters = {
    getComics: (state) => {
        return state.comics
    },

    getComicsById: (state) => (id) => {
        return state.comics.filter(comic=>comic.id===id)
    },

    getIsLoggedinL: (state) => {
        return state.authenticated
    }
}

