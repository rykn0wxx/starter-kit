<template>
  <RouterView class="page-container app relative overflow-hidden antialiased" v-cloak />
</template>

<script>
export default {
  name: 'App',
  metaInfo () {
    return {
      title: 'Frontend by mudhead'
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
