import axios from 'axios';
import {BaseUrl} from '../../_constants/baseurl';

export default (form,callback) => {
        return dispatch => {
            axios({
              method: 'post',
              url: BaseUrl.RestUrl+"event/create_event",
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
                  type: "CREATE_EVENT_SUCCESS",
                  createEvent: data
                });
              }).catch(error => {
                callback(error)
                console.log("got error while updating---> ", JSON.stringify(error.response.data));
                dispatch({ type: "CREATE_EVENT_REJECTED" , createEvent: error.response.data });
              });
          }

        
}


