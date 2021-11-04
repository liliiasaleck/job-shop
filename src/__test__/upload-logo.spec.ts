import { AnyAction } from 'redux';
import configureStore from 'redux-mock-store';
import { ThunkDispatch } from 'redux-thunk';


const initialState = {}
type State = typeof initialState;
const thunkMiddlewares = []
const mockStore = configureStore<State, ThunkDispatch<State, any, AnyAction>>(thunkMiddlewares);

const uploadLogo = () => ({ type: 'UPLOAD_LOGO' })

it('should dispatch action', (): void =>  {
  const initialState = {}
  const store = mockStore(initialState)

  store.dispatch(uploadLogo())

  const actions = store.getActions()
  const expectedPayload = { type: 'UPLOAD_LOGO' }
  expect(actions).toEqual([expectedPayload])
})