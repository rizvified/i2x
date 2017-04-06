// makeSelectLocationState expects a plain JS object for the routing state
import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');

const makeSelectToken = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('token')
);

const makeSelectError = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('error')
);

const makeSelectUsername = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('username')
);

const makeSelectPassword = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('password')
);

const makeSelectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route'); // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};

export {
  makeSelectLocationState,
  makeSelectToken,
  makeSelectError,
  makeSelectUsername,
  makeSelectPassword,
};
