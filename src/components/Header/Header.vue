<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import NavBar from '@/components/Header/NavBar/NavBar'
import CustomButton from '@/components/utils/components/CustomButton/CustomButton'
import logo from '@/assets/images/logo.svg'

@Component
export default class Header extends Vue {

  render() {
    return (
        <header class="header">
          <div class="header-head">
            <a class="logo">
              <img src={logo} alt="logo"/>
              HR
            </a>
            <div>
              <CustomButton title="Выйти"/>
            </div>
          </div>
          <NavBar/>
        </header>
    )
  }
}
</script>

<style scoped>
.header {
  background-color: var(--bg-color-white);
  display: flex;
  flex-direction: column;
  padding: 0 var(--indent-8);
  border-bottom: 2px solid var(--border-color);
}

.header-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--indent-3) 0;
  color: var(--text-primary-color);
}

.logo {
  display: flex;
  align-items: center;
  gap: var(--indent-1);
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  cursor: pointer;
}
</style>