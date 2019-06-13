<template>
  <div class="demo">
    <h1 class="md-title">
      Demo
    </h1>
    <div class="layout-row flex">
      <div>
        <GlbIco name="question-answer" size="36" />
      </div>
      <div>
      <mat-field>
        <label>Initial Value</label>
        <mat-input v-model="initial"></mat-input>
      </mat-field>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Demo',
  data () {
    return {
      initial: 'aaa'
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
