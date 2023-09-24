<script>
import Vue from 'vue'
import Component from 'vue-class-component'

const CustomButtonProps = Vue.extend({
  props: {
    title: String,
    fill: {
      type: Boolean,
      required: false,
      default: false,
    },
    img: String,
    alt: String,
  }
})

@Component
export default class CustomButton extends CustomButtonProps {

  render() {
    return (
        <button
            class={ `button ${this.fill ? 'fill' : ''}`}
        >
          { this.img && <img class="img" src={this.img} alt={this.alt}/>}
          { this.title }
        </button>
    )
  }
}
</script>

<style scoped>
.button {
  border: none;
  font: inherit;
  padding: 0;
  background-color: transparent;
  cursor: pointer;
  color: var(--text-primary-color);
}

.fill {
  padding: var(--indent-2);
  border-radius: 8px;
  background: var(--bg-color-grey);
}

.img {
  display: block;
  width: 24px;
  height: 24px;
}
</style>