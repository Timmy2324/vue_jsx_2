import Vue from 'vue'
import Vuex from 'vuex'
import mockData from '@/data/mock.json'

Vue.use(Vuex)

export const state = {
  candidateQuestionnaires: mockData,
  searchValue: '',
  selectedUser: mockData[0],
  status: {
    success: 'success',
    idle: 'idle',
    active: 'success',
    inactive:'idle',
  },
  gender: {
    male: 'male',
    female: 'female',
  },
  citizenship: [
    'Российская Федерация',
    'Республика Белорусь',
    'Казахстан',
    'Грузия',
    'США',
  ],
  headerLinks: [
    {
      name: 'Все',
      key: 'all',
      isActive: true,
    },
    {
      name: 'Ожидают загрузки',
      key: 'idle',
      isActive: false,
    },
    {
      name: 'Загружены кандидатом',
      key: 'success',
      isActive: false,
    },
  ],
}

export const getters = {
  searchUsers: (state) => {
    return state.candidateQuestionnaires.filter(user => {
      const userFullName = `${user.middleName} ${user.firstName} ${user.lastName}`.toLowerCase()
      return userFullName.indexOf(state.searchValue.toLowerCase()) !== -1
    })
  },
  badgeTitle: (state) => (status) => {
    if (!status) return ''
    return status === state.status.success ? 'Загружена кандидатом' : 'Ожидают загрузки'
  },
  statusType: (state) => (status) => {
    if (!status) return ''
    return state.status[status]
  }
}
export const mutations = {
  setSelectUser(state, user) {
    if (!user) return
    state.selectedUser = user
  },
  setSearchValue(state, value) {
    if (!value) value = ''
    state.searchValue = value
  },
  setSelectedNavbarLink(state, link) {
    if (!link) return
    state.headerLinks.forEach(item => item.name === link.name ? item.isActive = true : item.isActive = false)
  },
  setCandidateQuestionnaires(state, filterName) {
    if (!filterName) return
    if (filterName === 'all') {
      state.candidateQuestionnaires = mockData
    } else {
      state.candidateQuestionnaires = mockData.filter(item => item.applicationStatus === filterName)
    }
  }
}
export const actions = {
  setSelectUser({ commit }, user) {
    commit('setSelectUser', user)
  },
  setSearchValue({ commit }, value) {
    commit('setSearchValue', value)
  },
  setSelectedNavbarLink({ commit }, link) {
    commit('setSelectedNavbarLink', link)
    commit('setCandidateQuestionnaires', link.key)
    commit('setSearchValue', '')
  },
}

const modules = {}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules,
})
