import axios from 'axios';
import {BaseUrl} from '../../_constants/baseurl';

export default () => {
    return dispatch => {
        axios({
          method: 'get',
          url: BaseUrl.RestUrl+"attendance/getall_attendance",        
          headers: {
            'Content-Type': "application/json"
          }
        })
          .then(response => {
            var data = response;
            console.log("response while getting data -- > ", data);
            dispatch({
              type: "RECEIVE_ALL_ATTENDANCE",
              payload: data
            });
          }).catch(error => {
            console.log("got error while updating---> ", error);
          });
      }     
}


