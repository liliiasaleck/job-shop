import { AnyAction } from 'redux';
import configureStore from 'redux-mock-store';
import { ThunkDispatch } from 'redux-thunk';


const initialState = {}
type State = typeof initialState;
const thunkMiddlewares = []
const mockStore = configureStore<State, ThunkDispatch<State, any, AnyAction>>(thunkMiddlewares);

const resetFilters = () => ({ type: 'RESET_FILTERS' })

it('should dispatch action', (): void =>  {
  const initialState = {}
  const store = mockStore(initialState)

  store.dispatch(resetFilters())

  const actions = store.getActions()
  const expectedPayload = { type: 'RESET_FILTERS' }
  expect(actions).toEqual([expectedPayload])
})