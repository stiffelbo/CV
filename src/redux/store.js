import {combineReducers, createStore} from 'redux';
import initialStoreData from '../data/data';

// define initial state and shallow-merge initial data
const initialState = {
  personal: initialStoreData.personal,
  about: initialStoreData.about,
  technologies: initialStoreData.technologies,
  tools: initialStoreData.tools,
  courses: initialStoreData.courses,
  education: initialStoreData.education,
  experience: initialStoreData.experience,
  languages: initialStoreData.languages,
  interests: initialStoreData.interests,
  clausule: initialStoreData.clausule,
};

const reducers = {
};

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

// merge all reducers
const storeReducer = combineReducers(reducers);

// create store
const store = createStore(
  storeReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
