<template>
  <RouterView class="page-container app relative min-h-full h-full w-full overflow-hidden antialiased" v-cloak />
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
