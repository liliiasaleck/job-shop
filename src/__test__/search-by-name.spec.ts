import { AnyAction } from 'redux';
import configureStore from 'redux-mock-store';
import { ThunkDispatch } from 'redux-thunk';


const initialState = {}
type State = typeof initialState;
const thunkMiddlewares = []
const mockStore = configureStore<State, ThunkDispatch<State, any, AnyAction>>(thunkMiddlewares);

const searchOfferByName = () => ({ type: 'SEARCH_OFFER_BY_NAME' })

it('should dispatch action', (): void =>  {
  const initialState = {}
  const store = mockStore(initialState)

  store.dispatch(searchOfferByName())

  const actions = store.getActions()
  const expectedPayload = { type: 'SEARCH_OFFER_BY_NAME' }
  expect(actions).toEqual([expectedPayload])
})