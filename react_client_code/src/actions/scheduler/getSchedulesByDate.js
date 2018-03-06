import axios from 'axios';
import {BaseUrl} from '../../_constants/baseurl';

export default (obj) => {
        return dispatch => {
            axios({
              method: 'post',
              url: BaseUrl.RestUrl+"schedule/findSchedulesByDate",              
              data: obj,
              headers: {
                'Content-Type': "application/json"
              }

            })
              .then(response => {
                var data = response;
                console.log("response while updating -- > ", data);
                dispatch({
                  type: "GET_SCHEDULES_BY_DATE_SUCCESS",
                  getScheduleByDate: data
                });
              }).catch(error => {
                console.log("got error while updating---> ", error);
                dispatch({ type: "GET_SCHEDULES_BY_DATE_REJECTED" , getScheduleByDate: error });
              });
          }

        
}