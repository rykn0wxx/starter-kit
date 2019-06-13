<script>
import _ from 'lodash'

export default {
  name: 'Ico',
  props: {
    name: {
      type: [String],
      required: true
    },
    size: {
      type: [Number, String],
      default: 24
    }
  },
  render: function (createElement) {
    const iconSize = `${this.size}px`
    const iconName = _.snakeCase(this.name)
    return createElement('i', {
      inheritAttrs: false,
      class: 'material-icons ico',
      style: {
        width: iconSize,
        minWidth: iconSize,
        height: iconSize,
        fontSize: `${iconSize} !important`
      },
      attrs: {
        ariaLabel: iconName,
        role: 'img'
      },
      domProps: {
        innerHTML: iconName
      }
    })
  }
}
</script>

<style lang="scss" scoped>
$icon-size: 2.4rem;
.ico {
  margin: auto;
  background-repeat: no-repeat no-repeat;
  display: inline-block;
  vertical-align: middle;
  fill: currentColor;
  height: $icon-size;
  width: $icon-size;
  min-height: $icon-size;
  min-width: $icon-size;
}

</style>
