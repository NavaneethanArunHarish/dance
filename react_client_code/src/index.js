import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import Home from './components/home/home'
import EventComponent from './components/event/eventComponent'
import ListEventComponent from './components/event/listEventComponent'
import StudentRegister from './components/student/register'
import ListStudent from './components/student/listStudent'
import SchedulerComponent from './components/scheduler/schedulerComponent';
import ListSchedulerComponent from './components/scheduler/listSchedulerComponent';
import ListScheduleDetails from './components/scheduler/listScheduleDetails';
import ScheduleSlotsComponent from './components/scheduler/scheduleSlots';
import AttendenceSheet from './components/scheduler/attendenceSheet';
import AttendanceMetrics from './components/scheduler/attendanceMetrics';
// import AllStudents from './components/student/allStudents'
import Login from './components/login/login';
import CreateTrainer from './components/adminPage/createTrainer';
import ListTrainer from './components/adminPage/listTrainer';
import Category from './components/category/createCategory'
import ListCategory from './components/category/listCategory'
import CreateBusiness from './components/business/createBusiness'
import ListBusiness from './components/business/listBusiness'
import Dashboard from './components/adminPage/dashboard';
import StudentDashboard from './components/student/dashboard'
import TrainerDashboard from './components/trainer/dashboard'
import Assets from './components/assets/createAssets'
import ListAssets from './components/assets/listAssets'
import configureStore from './store/configure-store';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={browserHistory}>
        {/* For temprory purpose */}
        <Route path='/dashboard' component={Dashboard} />
        {/* <Route path='/' component={Home} /> */}
        <Route path='/CreateEvent' component={EventComponent} />
        <Route path='/StudentRegister' component={StudentRegister} />
        <Route path='/ListStudent' component={ListStudent} />
        <Route path='/ListOfEvent' component={ListEventComponent} />
        <Route path='/CreateCategory' component={Category} />
        <Route path='/ListCategory' component={ListCategory} />
        <Route path='/' component={Login} />
        <Route path='/CreateTrainer' component={CreateTrainer} />
        <Route path='/ListTrainer' component={ListTrainer} />
        <Route path='/Dashboard' component={Dashboard} />
        <Route path='/CreateBusiness' component={CreateBusiness} />
        <Route path='/ListBusiness' component={ListBusiness} />
        <Route path='/StudentDashboard' component={StudentDashboard} />
        <Route path='/TrainerDashboard' component={TrainerDashboard} />
        <Route path='/CreateAssets' component={Assets} />
        <Route path='/ListAssets' component={ListAssets} />
        <Route path='/CreateSchedule' component={SchedulerComponent} />
        <Route path='/ListOfSchedule' component={ListSchedulerComponent} />
        <Route path= '/ListOfScheduleDetails' component ={ListScheduleDetails} />
        <Route path='/ScheduleSlots' component={ScheduleSlotsComponent} />
        <Route path='/AttendenceSheet' component={AttendenceSheet} />
        <Route path='/AttendanceMetrics' component={AttendanceMetrics} />
        
        {/* <Route path='/allStudents' component={AllStudents} /> */}
      </Router>
    </div>
  </Provider>,
  document.getElementById('root')
)
