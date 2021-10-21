import configureStore from 'redux-mock-store' //ES6 modules


const thunkMiddlewares = []
const mockStore = configureStore(thunkMiddlewares)

const advancedFilter = () => ({ type: 'ADVANCED_FILTER' })

it('should dispatch action', () => {

  const initialState = {}
  const store = mockStore(initialState)

  store.dispatch(advancedFilter())

  const actions = store.getActions()
  const expectedPayload = { type: 'ADVANCED_FILTER' }
  expect(actions).toEqual([expectedPayload])
})