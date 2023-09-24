<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import Header from '@/components/Header/Header'
import MainScreen from '@/components/MainScreen/MainScreen'

@Component
export default class App extends Vue {

  render() {
    return (
        <div id="app">
          <Header/>
          <MainScreen/>
        </div>
    )
  }
}
</script>

<style>
@import './styles/reset.min.css';
@import './styles/normalize.min.css';

:root {
  --bg-color-main: #F9FAFB;
  --bg-color-white: #FFFFFF;
  --bg-color-grey: rgba(97, 131, 162, 0.1);
  --text-primary-color: rgba(0, 17, 34, 0.95);
  --text-secondary-color: rgba(0, 17, 34, 0.66);
  --blue-color: #005BFF;
  --border-color: rgba(97, 131, 162, 0.16);
  --status-color-success: rgba(29, 174, 64, 0.12);
  --status-color-waiting: rgba(247, 178, 0, 0.12);
  --dot-color-success: #1DAE40;
  --dot-color-waiting: #F7B200;

  --indent-1: 8px;
  --indent-2: 10px;
  --indent-3: 12px;
  --indent-4: 16px;
  --indent-5: 20px;
  --indent-6: 24px;
  --indent-7: 28px;
  --indent-8: 32px;
  --indent-9: 42px;
}

* {
  font-family: 'Inter', sans-serif;
  box-sizing: border-box;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>
