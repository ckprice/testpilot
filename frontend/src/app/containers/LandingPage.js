import { connect } from 'react-redux';
import { push as routerPush } from 'react-router-redux';

import LandingPage from '../components/LandingPage';

import { getExperiments } from '../reducers/experiments';

export default connect(
  state => ({
    experiments: getExperiments(state.experiments),
    isFirefox: state.browser.isFirefox,
    hasAddon: state.addon.hasAddon
  }),
  dispatch => ({
    navigateTo: path => dispatch(routerPush(path))
  })
)(LandingPage);
