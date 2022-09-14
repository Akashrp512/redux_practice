//the following lines are equivalent, and both dispatch the action of type LOGIN:

store.dispatch(actionCreator());
store.dispatch({ type: 'LOGIN' });

//Dispatch the LOGIN action to the Redux store by calling the dispatch method, and pass in the action created by loginAction()
const store = Redux.createStore(
  (state = {login: false}) => state
);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

// Dispatch the action here:
store.dispatch(loginAction());
