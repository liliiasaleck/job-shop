import { AnyAction } from 'redux';
import configureStore from 'redux-mock-store';
import { ThunkDispatch } from 'redux-thunk';

const initialState = {}
type State = typeof initialState;
const thunkMiddlewares = []
const mockStore = configureStore<State, ThunkDispatch<State, any, AnyAction>>(thunkMiddlewares);

const changeLocation = () => ({ type: 'SET_LOCATION' })
it('should dispatch action', (): void =>  {

  const initialState = {}
  const store = mockStore(initialState)
  store.dispatch(changeLocation())
  const actions = store.getActions()
  const expectedPayload = { type: 'SET_LOCATION' }
  expect(actions).toEqual([expectedPayload])
})