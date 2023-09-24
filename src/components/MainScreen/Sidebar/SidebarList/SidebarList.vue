<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import StatusBadge from '@/components/utils/components/StatusBadge/StatusBadge'
import calendarIcon from '@/assets/images/calendar-icon.svg'
import {getFormattedDate} from '@/components/utils/functions/getFormattedDate'

@Component
export default class SidebarList extends Vue {

  render() {
    return (
        <ul class="list">
          { this.$store.getters.searchUsers.map(item => (
              <li class="list-item" key={item.id} onClick={() => {this.$store.dispatch('setSelectUser', item)}}>
                <h4 class="list-title">
                  {`${item.middleName} ${item.firstName} ${item.lastName}`}
                </h4>
                <div class="list-body">
                  <StatusBadge title={this.$store.getters.badgeTitle(item.applicationStatus)} statusType={this.$store.getters.statusType(item.applicationStatus)} fill/>
                  <div class="date">
                    <img class="calendar-icon" src={calendarIcon} alt="calendar-icon"/>
                    <time class="date-text">{getFormattedDate(item.age)}</time>
                  </div>
                </div>
              </li>
          )) }
        </ul>
    )
  }
}
</script>

<style scoped>
.list {
  color: var(--text-primary-color);
  max-height: 566px;
  overflow: scroll;
}

.list-item {
  display: flex;
  flex-direction: column;
  gap: var(--indent-1);
  padding: var(--indent-3) var(--indent-4);
  border-top: 1px solid var(--border-color);
  cursor: pointer;
  transition: 0.3s;
}

.list-item:hover {
  background: var(--bg-color-grey);
}

.list-title {
  font-size: 15px;
  font-weight: 400;
  line-height: 24px;
}

.list-body {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
}

.date {
  display: flex;
  align-items: center;
  gap: var(--indent-1);
}

.calendar-icon {
  display: block;
  width: 16px;
  height: 16px;
}
</style>