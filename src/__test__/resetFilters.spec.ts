import configureStore from 'redux-mock-store' //ES6 modules


const thunkMiddlewares = []
const mockStore = configureStore(thunkMiddlewares)

const resetFilters = () => ({ type: 'RESET_FILTERS' })

it('should dispatch action', () => {

  const initialState = {}
  const store = mockStore(initialState)

  store.dispatch(resetFilters())

  const actions = store.getActions()
  const expectedPayload = { type: 'RESET_FILTERS' }
  expect(actions).toEqual([expectedPayload])
})