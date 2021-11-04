import { AnyAction } from 'redux';
import configureStore from 'redux-mock-store';
import { ThunkDispatch } from 'redux-thunk';

const initialState = {}
type State = typeof initialState;
const thunkMiddlewares = []
const mockStore = configureStore<State, ThunkDispatch<State, any, AnyAction>>(thunkMiddlewares);

const advancedFilter = () => ({ type: 'ADVANCED_FILTER' })
it('should dispatch action', (): void =>  {

  const initialState = {}
  const store = mockStore(initialState)
  store.dispatch(advancedFilter())
  const actions = store.getActions()
  const expectedPayload = { type: 'ADVANCED_FILTER' }
  expect(actions).toEqual([expectedPayload])
})