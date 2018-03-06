import axios from 'axios';
import {BaseUrl} from '../../_constants/baseurl';

export default (obj) => {
        return dispatch => {
            axios({
              method: 'post',
              url: BaseUrl.RestUrl+"attendance/create_attendance",              
              data: obj,
              headers: {
                'Content-Type': "application/json"
              }

            })
              .then(response => {
                var data = response;
                console.log("response while updating -- > ", data);
                dispatch({
                  type: "CREATE_ATTENDANCE_SUCCESS",
                  createAttendance: data
                });
              }).catch(error => {
                console.log("got error while updating---> ", error);
                dispatch({ type: "CREATE_ATTENDANCE_REJECTED" , createAttendance: error });
              });
          }

        
}