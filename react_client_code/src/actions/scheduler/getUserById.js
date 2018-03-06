import axios from 'axios';
import {BaseUrl} from '../../_constants/baseurl';

export default (form) => {
    return dispatch => {
        axios({
          method: 'post',
          url: BaseUrl.RestUrl+"user/getuserbydanceid", 
          data:form ,      
          headers: {
            'Content-Type': "application/json"
          }
        })
          .then(response => {
            var data = response;
            console.log("response while getting data -- > ", data);
            dispatch({
              type: "RECEIVE_USERBY_ID",
              payload: data
            });
          }).catch(error => {
            console.log("got error while updating---> ", error);
          });
      }     
}


