import axios from 'axios';
import {BaseUrl} from '../../_constants/baseurl';

export default (form) => {
        return dispatch => {
            axios({
              method: 'post',
              url: BaseUrl.RestUrl+"schedule_detail/create_schedule_detail",              
              data: form,
              headers: {
                'Content-Type': "application/json",
                'Authorization': "JWT "+localStorage.getItem("token")
              }

            })
              .then(response => {
                var data = response;
                console.log("response while updating -- > ", data);
                dispatch({
                  type: "CREATE_SCHEDULE_DETAILS_SUCCESS",
                  createScheduleDetails: data
                });
              }).catch(error => {
                console.log("got error while updating---> ", error);
                dispatch({ type: "CREATE_SCHEDULE_DETAILS_REJECTED" , createScheduleDetails: error });
              });
          }

        
}