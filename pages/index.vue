<template>
  <div>
    <!-- <h1>Hello wsssorld!</h1> -->
    <p>{{comics.length}}</p>
    <p>getIsLoggedinL: {{getIsLoggedinL}}</p>
    <p v-for="comic in comics" :key="comic._id">
      {{ comic.series.title }} {{ comic.series.issue }}
    </p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    async asyncData({ store }) {
        store.dispatch("fetchComics");
    },
    computed: {
        // mix the getters into computed with object spread operator
        ...mapGetters({
            comics: 'getComics',
            getIsLoggedinL: 'getIsLoggedinL',
        }),
    },
};
</script>