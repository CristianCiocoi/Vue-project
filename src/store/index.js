import { createStore } from 'vuex';

import coachesModule from './modules/coaches/index.js';
import requestModule from './modules/requests/index.js';

const store = createStore({
  modules: {
    coaches: coachesModule,
    requests: requestModule,
  },
  state() {
    return {
      userId: 'c3',
      // now this id should be used when we sign up as a coach
      //but should thereafter be used, to verify wheather we already got a coach with that id
    };
  },
  getters: {
    userId(state) {
      return state.userId;
    }
  }
});

export default store;