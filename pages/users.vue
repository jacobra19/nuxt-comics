<template>
      <ul class="users">
        <li v-for="(user, index) in users" :key="index" class="user">
          <!-- <nuxt-link :to="{ name: 'users-id', params: { id: index }}"> -->
            {{ user.name }}
          <!-- </nuxt-link> -->
        </li>
      </ul>
</template>

<script>
export default {
    async asyncData (context) {
        const data = await context.$axios.$get('/api/users')
        return { users: data }
    },
}
</script>

<style>

</style>ue