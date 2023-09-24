<script>
import Vue from 'vue'
import Component from 'vue-class-component'

const CustomSelectProps = Vue.extend({
  props: {
    label: {
      type: String,
      required: false,
    },
    options: Array,
    value: String,
  }
})

@Component
export default class CustomSelect extends CustomSelectProps {
  render() {
    return (
        <label class="label">
          { this.label }
          <select
              class={`select ${ this.label ? 'marginTop' : ''}`}
          >
            { this.options.map(option => (
                <option selected={this.value === option} value={option} key={option}>
                  { option }
                </option>
            )) }
          </select>
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

.select {
  display: inline-block;
  width: 100%;
  padding: var(--indent-3);
  font-size: 15px;
  line-height: 20px;
  color: var(--text-primary-color);
  border: none;
  border-radius: 8px;
  background: var(--bg-color-grey);
  background-image: url("@/assets/images/arrow-icon.svg");
  background-repeat: no-repeat;
  background-position: center right var(--indent-3);
  appearance: none;
}

.marginTop {
  margin-top: var(--indent-1);
}
</style>