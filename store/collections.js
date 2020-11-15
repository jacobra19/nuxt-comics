// import axios from "axios";


export const state = () => ({
    queriedComics: [],
})

export const actions = {
    getComicsCollection: async function ({commit},params) {
        console.log('params', params)
        console.log('process.env.mycomicshop', process.env.mycomicshop)
        let url;
        if (params && params.collectionId) {
            url = `${process.env.mycomicshop}${params.collectionId}`
        } else {
            url = `${process.env.mycomicshop}21311185`
        }

        let response = await this.$axios.get(url)

        let data = response.data

        let s = '<div id="myDiv"></div>';
        let htmlObject = document.createElement('div');
        htmlObject.innerHTML = data;

        let results = htmlObject.getElementsByClassName('issue')
        if (!results) return
        let list = Array.prototype.slice.call(results)


        let fetchedBooks = list.map((item )=>{
            return {
                publish: {
                    title: item.querySelector('.othercolright').lastElementChild.innerText,
                    date: item.querySelector('.othercolright').firstElementChild.innerText
                },
                media:{
                    coverSrc:item.querySelector('.img a') ? item.querySelector('.img a').href : ''
                },
                series:{
                    title: item.querySelector('.title a').innerText,
                    issue: item.querySelector('.title strong').innerText,
                },
                description:item.querySelector('.tabcontents').lastElementChild.innerText,
                saga:{
                    title: '',
                    currentIssue: '',
                    totalIssues: '',
                },
                variant: '',
                creators:{
                    coverArtBy: [],
                    writtenBy: [],
                    pencilsBy: [],
                    inksBy: [],
                }
            }
        })
            // resolve(fetchedBooks)
        // return fetchedBooks
        console.log('fetchedBooks', fetchedBooks)
        commit('setQueriedCollection',fetchedBooks)
        // // })
        // // .then((fetchedBooks: ComicBook[] = [])=>{
        // //     console.log('fetchedBooks', fetchedBooks)
            // addFromScrapeComics( fetchedBooks)
        // //     .then(console.log)
        // //     .catch(console.log)

        // })
        // .catch(reject)

    }
}

export const mutations = {
    setQueriedCollection: (state, fetchedBooks) => {
        state.queriedComics = fetchedBooks
    }
}

export const getters = {
    getQueriedCollection: (state) => {
        return state.queriedComics
    }
}
