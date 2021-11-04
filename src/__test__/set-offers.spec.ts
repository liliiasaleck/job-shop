import { AnyAction } from 'redux';
import configureStore from 'redux-mock-store';
import { ThunkDispatch } from 'redux-thunk';


const initialState = {}
type State = typeof initialState;
const thunkMiddlewares = []
const mockStore = configureStore<State, ThunkDispatch<State, any, AnyAction>>(thunkMiddlewares);

const setOffers = () => ({ type: 'SET_OFFERS' })

it('should dispatch action', (): void =>  {
  const initialState = {}
  const store = mockStore(initialState)

  store.dispatch(setOffers())

  const actions = store.getActions()
  const expectedPayload = { type: 'SET_OFFERS' }
  expect(actions).toEqual([expectedPayload])
})