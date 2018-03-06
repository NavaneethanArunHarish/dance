import axios from 'axios';
import {BaseUrl} from '../../_constants/baseurl';

export default (eventid,callback) => {
    return dispatch => {
        axios({
          method: 'post',
          url: BaseUrl.RestUrl+"schedule/findSchedulesByCategoryId",
          data:eventid,    
          headers: {
            'Content-Type': "application/json"
          }
        })
          .then(response => {
            var data = response;
            callback(data)
            console.log("response listOfSchedulebyEvent -- > ", data);
            dispatch({
              type: "RECEIVE_SCHEDULE_BY_CATEGORYALL_ID",
              payload: data
            });
          }).catch(error => {
            callback(error)
            console.log("got error while updating---> ", error);
          });
      }     
}


