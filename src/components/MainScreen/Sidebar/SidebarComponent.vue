<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import SidebarList from '@/components/MainScreen/Sidebar/SidebarList/SidebarList'
import CustomInput from '@/components/utils/components/CustomInput/CustomInput'
import CustomButton from '@/components/utils/components/CustomButton/CustomButton'
import filterIcon from '@/assets/images/filter-icon.svg'

@Component
export default class SidebarComponent extends Vue {

  changeSearchValue(value) {
    this.$store.dispatch('setSearchValue', value)
  }

  render() {
    return (
        <aside class="sidebar">
          <div class="search-block">
            <CustomInput type="search" icon="search" placeholder="Поиск" whenChange={this.changeSearchValue} value={this.$store.state.searchValue}/>
            <CustomButton img={filterIcon} alt="filter-icon" fill/>
          </div>
          <SidebarList/>
        </aside>
    )
  }
}
</script>

<style scoped>
.sidebar {
  width: 336px;
  background: var(--bg-color-white);
  border-radius: 8px;
}

.search-block {
  display: flex;
  align-items: center;
  gap: var(--indent-4);
  padding: var(--indent-4);
}
</style>