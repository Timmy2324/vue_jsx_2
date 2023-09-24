<script>
import Vue from 'vue'
import Component from 'vue-class-component'

const RadioButtonProps = Vue.extend({
  props: {
    label: {
      type: String,
      required: false,
    },
    checked: {
      type: Boolean,
      required: false,
    },
    name: String,
  }
})

@Component
export default class RadioButton extends RadioButtonProps {

  render() {
    return (
        <label class="radio-button-wrapper">
          <input class="radio-button" type="radio" checked={ this.checked } name={ this.name }/>
          { this.label }
        </label>
    )
  }
}
</script>

<style scoped>
.radio-button-wrapper {
  font-size: 15px;
  line-height: 22px;
  padding: var(--indent-2) var(--indent-3);
  border: 1px solid var(--border-color);
  width: 100%;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: var(--indent-1);
  cursor: pointer;
}

.radio-button {
  position: relative;
  height: 20px;
  width: 20px;
  border: 2px solid var(--border-color);
  border-radius: 50%;
  appearance: none;
  display: block;
  place-content: center;
  cursor: pointer;
}

.radio-button::before {
  content: '';
  position: absolute;
  display: none;
  top: 4px;
  left: 4px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--bg-color-white);
}

.radio-button:checked::before {
  display: block;
}

.radio-button:checked {
  background-color: var(--blue-color);
}
</style>