<template>
  <input
    class="mat-input"
    v-model="model"
    v-bind="attributes"
    v-on="listeners"
    @focus="onFocus"
    @blur="onBlur" />
</template>

<script>
import { MatFieldMixin, AppUuid } from '../../services/util'

export default {
  name: 'MatInput',
  mixins: [ MatFieldMixin ],
  inject: [ 'MatField' ],
  props: {
    id: {
      type: String,
      default: () => 'mat-input-' + AppUuid()
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  computed: {
    toggleType () {
      return this.MatField.togglePassword
    },
    isPassword () {
      return this.type === 'password'
    },
    listeners () {
      const l = { ...this.$listeners }
      delete l.input
      return l
    }
  },
  watch: {
    type (type) {
      this.setPassword(this.isPassword)
    },
    toggleType (toggle) {
      if (toggle) {
        this.setTypeText()
      } else {
        this.setTypePassword()
      }
    }
  },
  methods: {
    setPassword (state) {
      this.MatField.password = state
      this.MatField.togglePassword = false
    },
    setTypePassword () {
      this.$el.type = 'password'
    },
    setTypeText () {
      this.$el.type = 'text'
    }
  },
  created () {
    this.setPassword(this.isPassword)
  },
  beforeDestroy () {
    this.setPassword(false)
  }
}
</script>

<style lang="scss" scoped>

</style>
