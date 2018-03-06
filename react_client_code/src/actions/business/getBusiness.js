import axios from 'axios';
import { BaseUrl } from '../../_constants/baseurl';

export default (form) => {
  return dispatch => {
    axios({
      method: 'get',
      url: BaseUrl.RestUrl +"business/getall_business",
     
      headers: {
        'Content-Type': "application/json",
        'Authorization': "JWT "+localStorage.getItem("token")
      }

    })
      .then(response => {
        var data = response.data.result
        console.log("response get buisness -- > ", data);
        dispatch({
          type: "GET_BUSINESS_SUCCESS",
          getBusiness: data
        });
      }).catch(error => {
        console.log("got error while updating---> ", error);
        dispatch({ type: "GET_BUSINESS_REJECTED", getBusiness: error });
      });
  }


}
