<template>
    <div>
        <h1>
            this is admin panel
        </h1>
        <input v-model="queryString" @keydown.enter="handleClick"/>
        <div v-for="comic in queriedCollection" :key="comic.series.issue">
            <p>{{comic.series.title }}{{comic.series.issue}}</p>



            <div :style="{ backgroundImage: `url(${comic.media.coverSrc})` }"></div>


        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    middleware: 'authenticated',
    data(){
        return{
            queryString: ''
        }
    },
    computed:{
        ...mapGetters({
            queriedCollection: 'collections/getQueriedCollection',
        }),
    },
    methods:{
        handleClick(e){
            console.log('e', e)
            console.log('this.queryString', this.queryString)

            this.$store.dispatch("collections/getComicsCollection",{collectionId:this.queryString});

        }
    }
}
</script>

<style lang="scss" scoped>

</style>>
