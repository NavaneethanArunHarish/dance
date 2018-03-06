import student from './student/student-reducer.js';
import login from './login';
import category from './category/category-reducer.js';
import event from './event/event-reducer.js';
import business from './business/business-reducer.js';
import scheduler from './scheduler/scheduler-reducer.js';
import assets from './assets/assets-reducer.js';
import subCategory from './subCategory/subCategory-reducer.js';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  student,
  login,
  category,
  event,
  business,
  scheduler,
  assets,
  subCategory
});

export default rootReducer;
