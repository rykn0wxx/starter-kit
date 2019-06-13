<template>
  <div class="mat-field" @blur="onBlur" :class="fieldClasses">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'MatField',
  props: {
    mdInline: {
      type: [Boolean]
    }
  },
  data () {
    return {
      MatField: {
        value: null,
        focused: false,
        highlighted: false,
        disabled: false,
        required: false,
        placeholder: false,
        textarea: false,
        autogrow: false,
        maxlength: null,
        counter: null,
        password: null,
        togglePassword: false,
        clear: false,
        file: false
      }
    }
  },
  provide () {
    return {
      MatField: this.MatField
    }
  },
  computed: {
    stringValue () {
      return (this.MatField.value || this.MatField.value === 0) && this.MatField.value.toString()
    },
    hasValue () {
      return this.stringValue && this.stringValue.length > 0
    },
    valueLength () {
      return (this.stringValue) ? this.stringValue.length : 0
    },
    fieldClasses () {
      return {
        'md-inline': this.mdInline,
        'md-focused': this.MatField.focused,
        'md-highlight': this.MatField.highlighted,
        'md-disabled': this.MatField.disabled,
        'md-required': this.MatField.required,
        'md-has-value': this.hasValue,
        'md-has-placeholder': this.MatField.placeholder,
        'md-has-textarea': this.MatField.textarea,
        'md-has-password': this.MatField.password,
        'md-has-file': this.MatField.file,
        'md-has-select': this.MatField.select,
        'md-autogrow': this.MatField.autogrow
      }
    }
  },
  methods: {
    clearInput () {
      this.MatField.clear = true
      this.$emit('md-clear')
      this.$nextTick().then(() => {
        this.MatField.clear = false
      })
    },
    onBlur () {
      this.MatField.highlighted = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../sass/mat/mat-functions';
@import '../../sass/mat/mat-mixins';
$md-transition-default-timing: cubic-bezier(.4, 0, .2, 1);
$md-transition-default-duration: .4s;
$md-transition-default: all $md-transition-default-duration $md-transition-default-timing;

$md-transition-enter-timing: cubic-bezier(0, 0, .2, 1);
$md-transition-enter-duration: .4s;
$md-transition-enter: all $md-transition-enter-duration $md-transition-enter-timing;

$md-transition-leave-timing: cubic-bezier(.4, .0, 1, 1);
$md-transition-leave-duration: .4s;
$md-transition-leave: all $md-transition-leave-duration $md-transition-leave-timing;

$md-transition-stand-timing: cubic-bezier(.25, .8, .25, 1);
$md-transition-stand-duration: .4s;
$md-transition-stand: all $md-transition-stand-duration $md-transition-stand-timing;

$md-transition-drop-timing: cubic-bezier(.55, 0, .55, .2);
$md-transition-drop-duration: .4s;
$md-transition-drop: all $md-transition-drop-duration $md-transition-drop-timing;

$md-input-height: 32px;

$bg-variant: #fafafa;
$theme-primary: #1eb980;
$theme-error: #f24c4e;
$theme-disabled: rgba(0,0,0,.42);

.mat-field {
  width: 100%;
  min-height: 48px;
  margin: 4px 0 24px;
  padding-top: 16px;
  display: flex;
  position: relative;
  font-family: inherit;
  &::before, &::after {
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 1;
    transition: border .3s $md-transition-default-timing,
                opacity .3s $md-transition-default-timing,
                transform 0s .3s $md-transition-default-timing;
    will-change: border, opacity, transform;
    content: '';
  }
  &::after {
    height: 1px;
  }
  &::before {
    height: 2px;
    z-index: 2;
    opacity: 0;
    transform: scaleX(.12);
  }
  label {
    position: absolute;
    top: 23px;
    left: 0;
    pointer-events: none;
    transition: $md-transition-stand;
    // transition-duration: .3s;
    // transition-property: all;
    font-size: 16px;
    line-height: 20px;
  }
  .md-suffix {
    font-size: 16px;
    line-height: 32px;
    align-self: center;
    justify-self: center;
  }
  .md-prefix {
    display: none;
    padding-right: 4px;
    font-size: 16px;
    line-height: 32px;
    align-self: center;
    justify-self: center;
  }
  &.md-focused, &.md-has-value {
    .md-prefix {
      display: block;
    }
  }
  .mat-input, .md-textarea {
    height: $md-input-height;
    padding: 0;
    display: block;
    flex: 1;
    border: none;
    background: none;
    transition: $md-transition-stand;
    transition-property: font-size, padding-top, color;
    font-family: inherit;
    font-size: 16px;
    line-height: $md-input-height;
    &[type="date"] {
      font-size: 16px;
    }
    &[disabled] {
      cursor: default;
    }
    &:focus {
      outline: none;
    }
    &::-webkit-input-placeholder {
      font-size: 16px;
      text-shadow: none;
      -webkit-text-fill-color: initial;
      transition: $md-transition-stand;
      transition-property: font-size, color;
    }
  }
  .md-textarea {
    min-height: 32px;
    max-height: 230px;
    padding: 5px 0;
    resize: none;
    line-height: 1.3em;
  }
  .md-helper-text, .md-error, .md-count {
    height: 20px;
    position: absolute;
    bottom: -22px;
    font-size: 12px;
    transition: .3s $md-transition-default-timing;
  }
  .md-error {
    display: block !important;
    left: 0;
    opacity: 0;
    transform: translate3d(0, -8px, 0);
  }
  .md-count {
    right: 0;
  }
  .mat-input-action {
    width: 32px;
    min-width: 32px;
    height: 32px;
    margin: 0;
    position: absolute;
    top: 16px;
    right: 0;
    transition: $md-transition-default;
    &.mat-input-action-enter-active, &.mat-input-action-leave-active {
      opacity: 0;
    }
    &.mat-input-action-enter-to {
      opacity: 1;
    }
  }
  > .md-icon {
    margin: 4px auto;
    position: relative;
    z-index: 3;
    transition: $md-transition-stand;
    &:last-of-type:not(:first-child):after {
      display: none;
    }
    &::after {
      width: 37px;
      height: 4px;
      position: absolute;
      left: -1px;
      bottom: -5px;
      transition: .3s $md-transition-default-timing;
      content: "";
    }
    ~ {
      label {
        left: 36px;
      }
      .mat-input, .md-textarea, .md-file {
        margin-left: 12px;
      }
    }
  }
}
.mat-field {
  + .md-has-textarea:not(.md-autogrow) {
    margin-top: 36px;
  }
  &.md-has-placeholder {
    label {
      pointer-events: auto;
      top: 10px;
      opacity: 0;
      font-size: 12px;
    }
    .mat-input, .md-textarea {
      font-size: 16px;
    }
  }
  &.md-has-textarea:not(.md-autogrow) {
    &::before, &::after {
      height: auto;
      pointer-events: none;
      top: 0;
      bottom: 0;
      transform: none;
      background: none !important;
      border: 1px solid transparent;
      border-radius: 3px;
    }
    &::before {
      border-width: 2px;
    }
    label {
      top: 16px;
      left: 16px;
    }
    .md-textarea {
      min-height: 100px;
      padding: 0 16px;
      resize: vertical;
    }
    > .md-icon {
      position: absolute;
      top: 6px;
      right: 6px;
      z-index: 3;
    }
    .md-count {
      right: 6px;
      bottom: 2px;
    }
    .md-clear {
      top: 6px;
      right: 6px;
    }
    &.md-focused, &.md-has-value {
      label {
        top: 6px;
      }
      .md-textarea {
        padding-top: 10px;
      }
    }
  }
  &.md-has-file {
    &::before, &::after,
    label {
      left: 36px;
    }
    .mat-input {
      margin-left: 12px;
    }
  }
  &.md-focused, &.md-highlight {
    &::before {
      opacity: 1;
      transform: scaleX(1);
      transition: .3s $md-transition-default-timing;
      transition-property: border, opacity, transform;
    }
  }
  &.md-focused, &.md-has-value {
    label {
      pointer-events: auto;
      top: 0;
      opacity: 1;
      font-size: 12px;
    }
    .mat-input, .md-textarea {
      font-size: 16px;
    }
  }
  &.md-inline {
    label {
      pointer-events: none;
    }
    &.md-focused {
      label {
        top: 23px;
        font-size: 16px;
      }
    }
    &.md-has-value {
      label {
        opacity: 0;
      }
    }
  }
  &.md-disabled {
    &::after {
      background: bottom left repeat-x;
      background-size: 4px 1px;
    }
  }
  &.md-has-password {
    .md-toggle-password {
      margin: 0;
      position: absolute;
      right: 0;
      bottom: -2px;

      svg {
        width: 22px;
        height: 22px;
      }
    }
  }
  &.md-clearable {
    .mat-input {
      padding-right: 30px;
    }
  }
  &.md-invalid {
    @keyframes md-invalid-shake {
      10%, 90% {
        transform: translate3d(-1px, 0, 0);
      }
      30%, 70% {
        transform: translate3d(-4px, 0, 0);
      }
      40%, 60% {
        transform: translate3d(4px, 0, 0);
      }
    }
    &.md-has-value label:not(:focus) {
      animation: md-invalid-shake .4s $md-transition-default-timing both;
      backface-visibility: hidden;
      perspective: 1000px;
    }
    &.md-has-textarea:not(.md-autogrow) {
      &::before {
        border-width: 2px;
      }
    }
    .md-error {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
    .md-helper-text {
      opacity: 0;
      transform: translate3d(0, -8px, 0);
    }
  }
  &.md-required {
    label::after {
      position: absolute;
      top: 2px;
      right: 0;
      transform: translateX(calc(100% + 2px));
      content: "*";
      line-height: 1em;
      vertical-align: top;
    }
  }
}
.mat-field {
  &::after {
    background-color: rgba(#000, .42);
  }
  &::before {
    background-color: $theme-primary;
  }
  .md-helper-text, .md-count, label {
    color: rgba(#000, .54);
  }
  .md-suffix, .md-prefix {
    color: rgba(#000, .54);
  }
  .mat-input, .md-textarea {
    &::-webkit-input-placeholder {
      color: rgba(#000, .54);
    }
  }
  &.md-focused, &.md-has-value {
    .mat-input, .md-textarea {
      -webkit-text-fill-color: rgba(#000, .87);
    }
  }
  &.md-has-textarea:not(.md-autogrow) {
    &::after {
      border-color: rgba(#000, .42);
    }
    &::before {
      border-color: $theme-primary;
    }
  }
  &.md-disabled {
    &::after {
      background-image: linear-gradient(to right, rgba(#000, .38) 0%, rgba(#000, .38) 33%, transparent 0%);
    }
    label, .mat-input, .md-textarea {
      color: rgba(#000, .42);
    }
  }
  > .md-icon {
    &:after {
      background-color: $bg-variant;
    }
  }
  &.md-invalid {
    &::after {
      background-color: $theme-error;
    }
    &.md-has-textarea:not(.md-autogrow) {
      &::before {
        background-color: $theme-error;
      }
    }
    label {
      color: $theme-error;
    }
    .md-error {
      color: $theme-error;
    }
    .md-date-icon, .md-date-icon svg {
      color: $theme-error;
      fill: $theme-error;
    }
  }
  &.md-focused, &.md-highlight {
    .md-input, .md-textarea {
      color: $theme-primary;
    }
    > .md-icon {
      color: $theme-primary;
      fill: $theme-primary;
    }
  }
  &.md-focused {
    label {
      color: $theme-primary;
    }
  }
  &.md-disabled {
    .md-icon svg {
      fill: $theme-disabled;
    }
  }
}
</style>
