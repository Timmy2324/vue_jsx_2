<script>

import Vue from 'vue'
import Component from 'vue-class-component'

const CustomInputProps = Vue.extend({
  props: {
    whenChange: Function,
    icon: {
      type: String,
      required: false,
    },
    label: {
      type: String,
      required: false,
    },
    value: String,
    type: {
      type: String,
      required: false,
      default: 'text',
    },
    placeholder: {
      type: String,
      required: false,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
})

@Component
export default class CustomInput extends CustomInputProps {

  render() {
    return (
        <label class="label">
          { this.label }
          <input
              type={this.type}
              class={`
                input
                ${ this.label ? 'marginTop' : ''}
                ${ this.icon === 'search' ? 'search-icon' : '' }
                ${ this.icon === 'calendar' ? 'calendar-icon' : '' }
              `}
              disabled={this.disabled}
              value={this.value}
              placeholder={this.placeholder}
              onInput={(e) => this.whenChange(e.target.value)}
          />
        </label>
    )
  }
}
</script>

<style scoped>
.label {
  width: 100%;
  font-size: 13px;
  line-height: 16px;
  color: var(--text-secondary-color);
}

.input {
  display: block;
  width: 100%;
  padding: var(--indent-3);
  font-size: 15px;
  line-height: 20px;
  color: var(--text-primary-color);
  border: none;
  border-radius: 8px;
  background: var(--bg-color-grey);
}

.marginTop {
  margin-top: var(--indent-1);
}

.search-icon {
  background-image: url("@/assets/images/search-icon.svg");
  background-repeat: no-repeat;
  background-position: var(--indent-3);
  padding-left: var(--indent-9);
}

.calendar-icon {
  background-image: url("@/assets/images/calendar-input-icon.svg");
  background-repeat: no-repeat;
  background-position: center right var(--indent-2);
  height: 44px;
}

.calendar-icon[type=date]::-webkit-calendar-picker-indicator {
  opacity: 0;
}
</style>