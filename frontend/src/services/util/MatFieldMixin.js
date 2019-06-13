export default {
  props: {
    value: {},
    placeholder: String,
    name: String,
    maxlength: [String, Number],
    readonly: Boolean,
    required: Boolean,
    disabled: Boolean,
    mdCounter: [String, Number]
  },
  data () {
    return {
      localValue: this.value,
      textareaHeight: false
    }
  },
  computed: {
    model: {
      get () {
        return this.localValue
      },
      set (value) {
        if (value.constructor.toString().match(/function (\w*)/)[1].toLowerCase() !== 'inputevent') {
          this.$nextTick(() => {
            this.localValue = value
          })
        }
      }
    },
    clear () {
      return this.MatField.clear
    },
    attributes () {
      return {
        ...this.$attrs,
        type: this.type,
        id: this.id,
        name: this.name,
        disabled: this.disabled,
        required: this.required,
        placeholder: this.placeholder,
        readonly: this.readonly,
        maxlength: this.maxlength
      }
    }
  },
  watch: {
    model () {
      this.setFieldValue()
    },
    clear (clear) {
      if (clear) this.clearField()
    },
    placeholder () {
      this.setPlaceholder()
    },
    disabled () {
      this.setDisabled()
    },
    required () {
      this.setRequired()
    },
    maxlength () {
      this.setMaxlength()
    },
    mdCounter () {
      this.setMaxlength()
    },
    localValue (val) {
      this.$emit('input', val)
    },
    value (val) {
      this.localValue = val
    }
  },
  methods: {
    clearField () {
      this.$el.value = ''
      this.model = ''
      this.setFieldValue()
    },
    setLabelFor () {
      if (this.$el.parentNode) {
        const label = this.$el.parentNode.querySelector('label')
        if (label) {
          const forAttribute = label.getAttribute('for')
          if (!forAttribute || forAttribute.indexOf('mat-') >= 0) label.setAttribute('for', this.id)
        }
      }
    },
    setFieldValue () {
      this.MatField.value = this.model
    },
    setPlaceholder () {
      this.MatField.placeholder = Boolean(this.placeholder)
    },
    setDisabled () {
      this.MatField.disabled = Boolean(this.disabled)
    },
    setRequired () {
      this.MatField.required = Boolean(this.required)
    },
    setMaxlength () {
      if (this.mdCounter) {
        this.MatField.counter = parseInt(this.mdCounter, 10)
      } else {
        this.MatField.maxlength = parseInt(this.maxlength, 10)
      }
    },
    onFocus () {
      console.log('assfweffwf2f')
      this.MatField.focused = true
    },
    onBlur () {
      this.MatField.focused = false
    }
  },
  created () {
    this.setFieldValue()
    this.setPlaceholder()
    this.setDisabled()
    this.setRequired()
    this.setMaxlength()
  },
  mounted () {
    this.setLabelFor()
  }
}
