import axios from 'axios';
import {BaseUrl} from '../../_constants/baseurl';

export default (form,callback) => {
        return dispatch => {
            axios({
              method: 'post',
              url: BaseUrl.RestUrl+"schedule/create_schedule",              
              data: form,
              headers: {
                'Content-Type': "application/json",
                'Authorization': "JWT "+localStorage.getItem("token")
              }

            })
              .then(response => {
                var data = response;
                callback(data);
                console.log("response while updating -- > ", data);
                dispatch({
                  type: "CREATE_SCHEDULER_SUCCESS",
                  createScheduler: data
                });
              }).catch(error => {
                callback(error)
                console.log("got error while updating---> ", error);
                dispatch({ type: "CREATE_SCHEDULER_REJECTED" , createScheduler: error.response.data });
              });
          }

        
}