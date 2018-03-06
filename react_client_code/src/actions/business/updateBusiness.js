import axios from 'axios';
import { BaseUrl } from '../../_constants/baseurl';

export default (form) => {
  return dispatch => {
    axios({
      method: 'put',
      url: BaseUrl.RestUrl + "business/update_business",
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
          type: "UPDATE_BUSINESS_SUCCESS",
          updateBusiness: data
        });
      }).catch(error => {
        console.log("got error while updating---> ", error);
        dispatch({ type: "UPDATE_BUSINESS_REJECTED", updateBusiness: error.response.data });
      });
  }


}


