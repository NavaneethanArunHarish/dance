import axios from 'axios';
import {BaseUrl} from '../../_constants/baseurl';

export default () => {
    return dispatch => {
        axios({
          method: 'get',
          url: BaseUrl.RestUrl+"subCategory/getall_subCategory",
          headers: {
            'Content-Type': "application/json",
            'Authorization': "JWT "+localStorage.getItem("token")
          }
        })
        .then(response => {
          var data = response
          console.log("response fetching thae data -- > ", data);
          dispatch({
            type: "GET_SUBCATEGORY_SUCCESS",
            getSubCategory: data
 
          });
        }).catch(error => {
          console.log("got error while updating---> ", error);
          dispatch({ type: "GET_SUBCATEGORY_REJECTED" , getSubCategory: error });
        });
    }

  
}
