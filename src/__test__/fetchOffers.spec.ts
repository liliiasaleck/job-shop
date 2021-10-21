// import configureStore from "redux-mock-store";
// import thunk from "redux-thunk";
// const configureMockStore = require('redux-mock-store');

// const middlewares = [thunk]; 
// const mockStore = configureStore(middlewares);

// function success() {
//   return {
//     type: "FETCH_OFFERS"
//   };
// }


// function fetchOffers() {
//   return async dispatch => {
//     await fetch("/offers"); 
//     dispatch(success());
//   };
// }



// it("should execute fetch data", () => {
//   const store = mockStore({});

//   return store.dispatch(fetchOffers()).then(() => {
//     const actions = store.getActions();
//     expect(actions).toEqual([success()]);
//   });
// });