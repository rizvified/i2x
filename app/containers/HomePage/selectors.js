import { createSelector } from 'reselect';

/**
 * Direct selector to the homePage state domain
 */
const selectHomePageDomain = () => (state) => state.get('homePage');

/**
 * Other specific selectors
 */
 const makeSelectContent = () => createSelector(
   selectHomePageDomain(),
   (substate) => substate.get('content').toJS()
 );


/**
 * Default selector used by HomePage
 */

const makeSelectHomePage = () => createSelector(
  selectHomePageDomain(),
  (substate) => substate
);

export default makeSelectHomePage;
export {
  selectHomePageDomain,
  makeSelectContent,
};
