<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import StatusBadge from '@/components/utils/components/StatusBadge/StatusBadge'
import CustomInput from '@/components/utils/components/CustomInput/CustomInput'
import CustomSelect from '@/components/utils/components/CustomSelect/CustomSelect'
import RadioButton from '@/components/utils/components/RadioButton/RadioButton'
import {getFormattedDate} from '@/components/utils/functions/getFormattedDate'

@Component
export default class MainContent extends Vue {

  get user() {
    return this.$store.state.selectedUser
  }

  get options() {
    return this.$store.state.citizenship
  }

  get gender() {
    return this.$store.state.gender
  }

  render() {
    return (
        <article class="main-content">
          <div class="header">
            <h2 class="title">
              { `${this.user.middleName} ${this.user.firstName} ${this.user.lastName}` }
            </h2>
            <StatusBadge
              title={this.$store.getters.badgeTitle(this.user.applicationStatus)}
              statusType={this.$store.getters.statusType(this.user.applicationStatus)}
              fill
            />
            <ul class="statement-info">
              <li class="statement-info-item">
                <div class="statement-info-item-left">
                  <div>
                    Заявка:
                  </div>
                  <div>
                    Логин:
                  </div>
                </div>
                <div class="statement-info-item-right">
                  <div>
                    { this.user.ticket }
                  </div>
                  <div>
                    { this.user.login }
                  </div>
                </div>
              </li>
              <li class="statement-info-item">
                <div class="statement-info-item-left">
                  <div>
                    Дата выхода:
                  </div>
                  <div>
                    Дата оформления:
                  </div>
                </div>
                <div class="statement-info-item-right">
                  <time>
                    { getFormattedDate(this.user.employmentDate) }
                  </time>
                  <time>
                    { getFormattedDate(this.user.registeredDate) }
                  </time>
                </div>
              </li>
              <li class="statement-info-item">
                <div class="statement-info-item-left">
                  <div>
                    Статус ФП:
                  </div>
                  <div>
                    Статус УЗ:
                  </div>
                </div>
                <div class="statement-info-item-right">
                  <StatusBadge
                    statusType={this.$store.getters.statusType(this.user.FPStatus)}
                    title={this.user.FPStatus === 'active' ? 'Активна' : 'Обновлено'}
                  />
                  <StatusBadge
                    statusType={this.$store.getters.statusType(this.user.accountStatus)}
                    title={this.user.accountStatus === 'active' ? 'Активна' : 'Обновлено'}
                  />
                </div>
              </li>
            </ul>
          </div>
          <div class="separator"></div>
          <div class="personal-information">
            <h3 class="personal-information-title">
              Личная информация
            </h3>
            <ul class="personal-information-list">
              <li class="personal-information-list-item">
                <CustomInput label="Фамилия" value={this.user.middleName}/>
              </li>
              <li class="personal-information-list-item">
                <CustomInput label="Имя" value={this.user.firstName}/>
              </li>
              <li class="personal-information-list-item">
                <CustomInput label="Отчество" value={this.user.lastName}/>
              </li>
              <li class="personal-information-list-item">
                <CustomInput
                    type="date"
                    label="Дата рождения"
                    icon="calendar"
                    value={this.user.age}
                />
              </li>
              <li class="personal-information-list-item">
                <CustomSelect options={this.options} label="Гражданство" value={this.user.citizenship}/>
              </li>
              <li class="personal-information-list-item">
                <div class="personal-information-list-title">
                  Пол
                  <div class="personal-information-list-checkbox">
                    <RadioButton label="Женский" name="gender" checked={this.user.gender === this.gender.female}/>
                    <RadioButton label="Мужской" name="gender" checked={this.user.gender === this.gender.male}/>
                  </div>
                </div>
              </li>
              <li class="personal-information-list-item personal-information-list-item-city disabled">
                <CustomInput label="Город проживания" disabled value={this.user.city}/>
              </li>
            </ul>
          </div>
        </article>
    )
  }
}
</script>

<style scoped>
.main-content {
  height: 100%;
  width: 1016px;
  background: var(--bg-color-white);
  border-radius: 8px;
}

.header {
  padding: var(--indent-6) var(--indent-6) 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.title {
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  margin-bottom: var(--indent-1);
  padding-left: 0 var(--indent-6);
  color: var(--text-primary-color);
}

.statement-info {
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
  padding-top: var(--indent-6);
  padding-bottom: var(--indent-4);
}

.statement-info-item {
  display: flex;
  gap: var(--indent-1);
  padding: 0 var(--indent-6);
  border-right: 1px solid var(--border-color);
}

.statement-info-item:last-child {
  padding-right: 0;
  border-right: none;
}

.statement-info-item:first-child {
  padding-left: 0;
}

.statement-info-item-left {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--indent-1);
  color: var(--text-secondary-color);
}

.statement-info-item-right {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--indent-1);
  color: var(--text-primary-color);
}

.separator {
  height: 0;
  width: 100%;
  border-bottom: 1px solid var(--border-color);
}

.personal-information {
  padding: var(--indent-4) var(--indent-6) var(--indent-3);
}

.personal-information-title {
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  color: var(--text-primary-color);
  margin-bottom: var(--indent-6);
}

.personal-information-list {
  display: flex;
  gap: var(--indent-6);
  flex-wrap: wrap;
}

.personal-information-list-item {
  width: 31.68%;
  display: flex;
  flex-direction: column;
}

.personal-information-list-item-city {
  width: 100%;
}

.personal-information-list-title {
  font-size: 13px;
  line-height: 16px;
  color: var(--text-secondary-color);
}

.personal-information-list-checkbox {
  margin-top: var(--indent-1);
  display: flex;
  justify-content: space-between;
  gap: var(--indent-2);
}

.disabled {
  opacity: 0.5;
}
</style>