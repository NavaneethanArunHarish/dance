import axios from 'axios';
import {BaseUrl} from '../../_constants/baseurl';

export default (form) => {
        return dispatch => {
            axios({
              method: 'put',
              url: BaseUrl.RestUrl+"schedule/update_schedule",              
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
                  type: "UPDATE_SCHEDULER_SUCCESS",
                  updateScheduler: data
                });
              }).catch(error => {
                console.log("got error while updating---> ", error);
                dispatch({ type: "UPDATE_SCHEDULER_REJECTED" , updateScheduler: error });
              });
          }

        
}