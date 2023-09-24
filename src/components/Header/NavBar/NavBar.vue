<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class NavBar extends Vue {
  
  get links() {
    return this.$store.state.headerLinks
  }

  render() {
    return (
        <nav class="nav">
          <ul class="list">
            { this.links.map(link => (
                <li class="item" key={ link.key } onClick={() => this.$store.dispatch('setSelectedNavbarLink', link)}>
                  <a class={`link ${link.isActive ? 'active' : ''}`}>
                    { link.name }
                  </a>
                </li>
            )) }
          </ul>
        </nav>
    )
  }
}
</script>

<style scoped>
.nav {
  padding: var(--indent-1) 0;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
}

.list {
  display: flex;
  align-items: center;
  gap: var(--indent-8);
}

.item {
  height: 100%;
  cursor: pointer;
}

.link {
  text-decoration: none;
  color: var(--text-secondary-color);
  line-height: 24px;
}

.active {
  color: var(--text-primary-color);
  position: relative;
}

.active::after {
  content: '';
  display: block;
  position: absolute;
  bottom: -13px;
  left: 0;
  height: 2px;
  width: 100%;
  border-radius: 4px;
  background: var(--blue-color);
}
</style>