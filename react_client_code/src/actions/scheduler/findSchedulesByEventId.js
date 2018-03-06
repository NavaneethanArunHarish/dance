import axios from 'axios';
import {BaseUrl} from '../../_constants/baseurl';

export default (eventid) => {
    return dispatch => {
        axios({
          method: 'post',
          url: BaseUrl.RestUrl+"schedule/findSchedulesByEventId",
          data:eventid,    
          headers: {
            'Content-Type': "application/json"
          }
        })
          .then(response => {
            var data = response;
            console.log("response listOfSchedulebyEvent -- > ", data);
            dispatch({
              type: "RECEIVE_SCHEDULE_BY_EVENT_ID",
              payload: data
            });
          }).catch(error => {
            console.log("got error while updating---> ", error);
          });
      }     
}


