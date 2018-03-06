import axios from 'axios';
import {BaseUrl} from '../../_constants/baseurl';

export default () => {
    return dispatch => {
        axios({
          method: 'get',
          url: BaseUrl.RestUrl+"category/getall_category",        
          headers: {
            'Content-Type': "application/json",
            'Authorization': "JWT "+localStorage.getItem("token")
          }
        })
          .then(response => {
            var data = response;
            console.log("response while getting data -- > ", data);
            dispatch({
              type: "RECEIVE_ALL_CATEGORY",
              payload: data
            });
          }).catch(error => {
            console.log("got error while updating---> ", error);
          });
      }     
}


