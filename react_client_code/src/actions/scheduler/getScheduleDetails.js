import axios from 'axios';
import {BaseUrl} from '../../_constants/baseurl';

export default () => {
        return dispatch => {
            axios({
              method: 'get',
              url: BaseUrl.RestUrl+"schedule_detail/getall_schedule_detail",              
              headers: {
                'Content-Type': "application/json"
              }

            })
              .then(response => {
                var data = response;
                console.log("response while updating -- > ", data);
                dispatch({
                  type: "GET_SCHEDULE_DETAILS_SUCCESS",
                  getScheduleDetails: data
                });
              }).catch(error => {
                console.log("got error while updating---> ", error);
                dispatch({ type: "GET_SCHEDULE_DETAILS_REJECT" , getScheduleDetails: error });
              });
          }

        
}