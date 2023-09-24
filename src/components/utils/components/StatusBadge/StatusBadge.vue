<script>
import Vue from 'vue'
import Component from 'vue-class-component'

const StatusBadgeProps = Vue.extend({
  props: {
    title: String,
    statusType: String,
    fill: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
})

@Component
export default class StatusBadge extends StatusBadgeProps {
  status =  {
    success: 'success',
    idle: 'idle',
  }

  render() {
    return (
        <div class={`
          status
          ${this.statusType === this.status.idle && this.fill ? 'status-waiting' : ''}
          ${this.statusType === this.status.success && this.fill ? 'status-success' : ''}
        `}>
          <span class={`
            status-dot
            ${this.statusType === this.status.idle ? 'dot-waiting' : ''}
            ${this.statusType === this.status.success ? 'dot-success' : ''}
          `}>●</span>{ this.title }
        </div>
    )
  }
}
</script>

<style scoped>
.status {
  font-size: 13px;
  font-weight: 600;
  border-radius: 16px;
  line-height: 24px;
  padding: 0 var(--indent-3) 0 var(--indent-1);
}

.status-dot {
  margin-right: 5px;
}

.dot-success {
  color: var(--dot-color-success);
}

.dot-waiting {
  color: var(--dot-color-waiting);
}

.status-success {
  background: var(--status-color-success);
}

.status-waiting {
  background: var(--status-color-waiting);
}
</style>