import axios from 'axios';
import {BaseUrl} from '../../_constants/baseurl';

export default (obj) => {
        return dispatch => {
            axios({
              method: 'post',
              url: BaseUrl.RestUrl+"schedule_detail/getScheduleDetailByScheduleId",              
              data: obj,
              headers: {
                'Content-Type': "application/json"
              }

            })
              .then(response => {
                var data = response;
                console.log("response while updating -- > ", data);
                dispatch({
                  type: "GET_SCHEDULE_DETAILS_BY_ID_SUCCESS",
                  getScheduleDetails: data
                });
              }).catch(error => {
                console.log("got error while updating---> ", error);
                dispatch({ type: "GET_SCHEDULE_DETAILS_BY_ID_REJECT" , getScheduleDetails: error });
              });
          }

        
}