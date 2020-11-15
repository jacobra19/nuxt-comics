// import axios from "axios";


export const state = () => ({
    comics: [],
    authenticated: false,
})

export const actions = {
    async nuxtServerInit ({ state }, { req }) {
        const res = await this.$axios.get(`api/comics/`);
        state.comics = res.data || []
    },
    
    fetchComics: async function (context){
        const res = await this.$axios.get(`api/comics/`);
        context.commit('setComics',{comics: res.data || []})
    }
}

export const mutations = {
    setComics: (state, {comics}) => {
        state.comics = comics
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

