import {createStore} from 'redux';

import rootReducer from './redoucers';

const store = createStore(rootReducer);

export default store;