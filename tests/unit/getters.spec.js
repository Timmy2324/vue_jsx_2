import {getters} from "@/store/store";

describe('getter searchUsers', () => {
    let state
    beforeEach(() => {
        state = {
            candidateQuestionnaires: [
                {
                    "firstName": "Михаил",
                    "middleName": "Агафонов",
                    "lastName": "Дмитриевич",
                    "applicationStatus": "success"
                },
                {
                    "firstName": "Иван",
                    "middleName": "Гончаров",
                    "lastName": "Александрович",
                    "applicationStatus": "success"
                },
                {
                    "firstName": "Николай",
                    "middleName": "Орлов",
                    "lastName": "Константинович",
                    "applicationStatus": "idle"
                },
            ],
            searchValue: '',
            dateFormatter: new Intl.DateTimeFormat(['ru']),
        }
    })
    test('get searchUsers', () => {
        state.searchValue = 'Иван'
        const users = getters.searchUsers(state)
        expect(users.length).toBe(1)
        expect(users[0].firstName).toBe('Иван')
    })

})

describe('getter badgeTitle', () => {
    let state
    beforeEach(() => {
        state = {
            status: {
                success: 'success',
                idle: 'idle',
                active: 'success',
                inactive:'idle',
            },
        }
    })
    test('get success badge title', () => {
        const badgeTitle = getters.badgeTitle(state)('success')
        expect(badgeTitle).toBe('Загружена кандидатом')
    })
    test('get idle badge title', () => {
        const badgeTitle = getters.badgeTitle(state)('idle')
        expect(badgeTitle).toBe('Ожидают загрузки')
    })
    test('get badge title with empty status', () => {
        const badgeTitle = getters.badgeTitle(state)()
        expect(badgeTitle).toBe('')
    })
})

describe('getter statusType', () => {
    let state
    beforeEach(() => {
        state = {
            status: {
                success: 'success',
                idle: 'idle',
                active: 'success',
                inactive:'idle',
            },
        }
    })
    test('get status type active', () => {
        const statusType = getters.statusType(state)('active')
        expect(statusType).toBe('success')
    })
    test('get status type inactive', () => {
        const statusType = getters.statusType(state)('inactive')
        expect(statusType).toBe('idle')
    })
    test('get status type success', () => {
        const statusType = getters.statusType(state)('success')
        expect(statusType).toBe('success')
    })
    test('get status type idle', () => {
        const statusType = getters.statusType(state)('idle')
        expect(statusType).toBe('idle')
    })
    test('get status type with empty status', () => {
        const statusType = getters.statusType(state)()
        expect(statusType).toBe('')
    })
})