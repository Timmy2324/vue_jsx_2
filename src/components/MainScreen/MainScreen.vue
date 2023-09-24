<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import Sidebar from '@/components/MainScreen/Sidebar/SidebarComponent'
import MainContent from '@/components/MainScreen/MainContent/MainContent'

@Component
export default class MainScreen extends Vue {

  render() {
    return (
        <section class="main-screen">
          <div class="container">
            <Sidebar/>
            <MainContent/>
          </div>
        </section>
    )
  }
}
</script>

<style scoped>
.main-screen {
  padding-top: var(--indent-4);
  background: var(--bg-color-main);
  flex-grow: 1;
}

.container {
  max-width: 1440px;
  padding: 0 var(--indent-8);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
</style>